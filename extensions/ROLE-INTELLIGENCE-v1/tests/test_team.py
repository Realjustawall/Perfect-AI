from __future__ import annotations
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('team',ROOT/'orchestrator/team.py')
team=importlib.util.module_from_spec(spec);spec.loader.exec_module(team)

class TeamTest(unittest.TestCase):
    def test_profiles_choose_distinct_reviews(self):
        e={x['role'] for x in team.route('ecommerce')}
        d={x['role'] for x in team.route('dashboard')}
        g={x['role'] for x in team.route('immersive-3d')}
        self.assertIn('ecommerce-checkout',e)
        self.assertIn('dashboard-data',d)
        self.assertIn('three-placement',g)
        self.assertNotIn('ecommerce-checkout',g)
        for v in (e,d,g):self.assertTrue(set(team.CFG['core']).issubset(v))
    def test_role_count(self):
        self.assertGreaterEqual(len(team.ROLES),50)
        self.assertGreaterEqual(len(team.CFG['profiles']),20)
    def test_auto_routing(self):
        with tempfile.TemporaryDirectory() as t:
            p=Path(t); (p/'checkout').mkdir(); (p/'cart').mkdir(); (p/'product').mkdir()
            site,meta=team.classify_site(p)
            self.assertEqual(site,'ecommerce')
            self.assertNotEqual(meta['confidence'],'explicit')

    def test_max_agent_safety(self):
        with self.assertRaises(ValueError):team.route('ecommerce',5)
        with self.assertRaises(ValueError):team.route('ecommerce',25)
    def test_brand(self):
        self.assertEqual(team.brand_status(None)[0],'missing')
        with tempfile.TemporaryDirectory() as t:
            b=Path(t)/'brand.json';b.write_text(json.dumps({'approved':True,'name':'Test'}))
            self.assertEqual(team.brand_status(b)[0],'incomplete')
    def test_validation(self):
        d=team.simulate_report('critical-reviewer','missing')
        self.assertIsNone(team.validate_report(d,'critical-reviewer'))
        self.assertIsNotNone(team.validate_report(d,'brand-guardian'))
    def test_deduplication(self):
        issue={k:'' for k in ['id','claim','evidence_path','evidence_locator','component','suggested_fix','verification']}
        issue.update(id='a',claim='Overflow',component='src/ui.tsx',evidence_locator='#cta',evidence_path='src/ui.tsx',severity='high',confidence=.9)
        a=team.simulate_report('critical-reviewer','approved');a['findings']=[issue]
        b=team.simulate_report('responsive-layout','approved');b['findings']=[dict(issue,id='b')]
        c=team.adjudicate([a,b],['critical-reviewer','responsive-layout'],'landing','approved')
        self.assertEqual(len(c['prioritized_findings']),1)
        self.assertEqual(len(c['duplicates_suppressed']),1)
    def test_dry_run_end_to_end(self):
        with tempfile.TemporaryDirectory() as t:
            root=Path(t);p=root/'project';p.mkdir();out=root/'report'
            cmd=[sys.executable,str(ROOT/'orchestrator/team.py'),'audit','--project',str(p),'--site-type','saas','--out',str(out)]
            c=subprocess.run(cmd,capture_output=True,text=True,timeout=15)
            self.assertEqual(c.returncode,0,c.stderr)
            s=json.loads((out/'team-summary.json').read_text('utf8'))
            self.assertEqual(s['status'],'not_verified')
            self.assertFalse(list(p.iterdir()))
    def test_prohibited_project_output(self):
        with tempfile.TemporaryDirectory() as t:
            root=Path(t)
            cmd=[sys.executable,str(ROOT/'orchestrator/team.py'),'plan','--project',str(root),'--site-type','landing','--out',str(root/'report')]
            c=subprocess.run(cmd,capture_output=True,text=True,timeout=15)
            self.assertNotEqual(c.returncode,0)
    def test_fake_codex_exec(self):
        # Simulates CLI contract, not actual model behavior. No network or login required.
        with tempfile.TemporaryDirectory() as t:
            root=Path(t);p=root/'p';p.mkdir();out=root/'out';fake=root/'codex'
            fake.write_text('#!'+sys.executable+'\nimport json,sys,re\na=sys.argv\ns=sys.stdin.read()\nr=re.search(r"ROLE_ID: ([a-z-]+)",s).group(1)\np=a[a.index("--output-last-message")+1]\njson.dump({"role":r,"status":"not_verified","findings":[],"strengths":[],"unknowns":["No browser traces supplied"]},open(p,"w"))\n')
            fake.chmod(0o755)
            cmd=[sys.executable,str(ROOT/'orchestrator/team.py'),'audit','--execute','--project',str(p),'--site-type','blog','--out',str(out),'--codex-bin',str(fake)]
            c=subprocess.run(cmd,capture_output=True,text=True,timeout=30)
            self.assertEqual(c.returncode,0,c.stderr)
            report=json.loads((out/'team-summary.json').read_text('utf8'))
            self.assertTrue(all('No browser traces' in x['unknowns'][0] for x in report['results']))
            self.assertEqual(report['status'],'not_verified')

if __name__=='__main__':unittest.main()
