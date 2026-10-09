import os,json,sys,tempfile,subprocess,pathlib,unittest
HERE=pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0,str(HERE/'scripts'))
from run_review import required_identity

class TestReview(unittest.TestCase):
 def fixture(self,t):
  t=pathlib.Path(t);brand=t/'brand.json';project=t/'project';project.mkdir();evidence=t/'evidence';evidence.mkdir()
  data={"status":"APPROVED","brand":{"name":"TestBrand","sector":"SaaS","positioning":"calm","audience":["teams"],"personality":["clear"],"values":["clarity"],"voice":"professional","must_keep":[],"must_avoid":[]},"visual":{"palette":{"mode":"monochrome","locked_hex":["#000000","#ffffff"]},"typography":{"fa":{"heading":"Vazirmatn","body":"Vazirmatn"},"en":{"heading":"Inter","body":"Inter"}},"motion":"subtle"},"goals":{"primary_action":"sign up"},"approval":{"approved":True}}
  brand.write_text(json.dumps(data));return brand,project,evidence,data
 def test_dry_run_and_missing_fields(self):
  with tempfile.TemporaryDirectory() as t:
   brand,project,evidence,data=self.fixture(t)
   self.assertEqual(required_identity(data),[])
   cmd=[sys.executable,str(HERE/'scripts'/'run_review.py'),'--brand',str(brand),'--project',str(project),'--evidence',str(evidence),'--dry-run']
   cp=subprocess.run(cmd,capture_output=True,text=True)
   self.assertEqual(cp.returncode,0,cp.stderr)
   self.assertEqual(len(list((project/'zt-review-outputs').glob('*/critic.prompt.md'))),1)
   data['approval']['approved']=False;brand.write_text(json.dumps(data))
   cp=subprocess.run(cmd,capture_output=True,text=True)
   self.assertEqual(cp.returncode,2)
 def test_parallel_four_and_sequential_arbiter_mock(self):
  with tempfile.TemporaryDirectory() as t:
   brand,project,evidence,_=self.fixture(t)
   mock=pathlib.Path(t)/'codexmock'
   mock.write_text('#!/usr/bin/env python3\nimport sys,pathlib\na=sys.argv\np=pathlib.Path(a[a.index("--output-last-message")+1])\np.write_text("# Evidence-based review\\nMock evidence NOTE: test runner only.\\n")\n')
   mock.chmod(0o755)
   cmd=[sys.executable,str(HERE/'scripts'/'run_review.py'),'--brand',str(brand),'--project',str(project),'--evidence',str(evidence),'--codex-binary',str(mock),'--timeout','15']
   cp=subprocess.run(cmd,capture_output=True,text=True)
   self.assertEqual(cp.returncode,0,cp.stderr)
   dirs=list((project/'zt-review-outputs').iterdir());self.assertEqual(len(dirs),1)
   out=dirs[0];self.assertTrue((out/'arbiter.md').exists());self.assertEqual(len(list(out.glob('*.prompt.md'))),4)
   statuses=json.loads((out/'reviewers-status.json').read_text())
   self.assertEqual(len(statuses),4);self.assertTrue(all(x['success'] for x in statuses))

if __name__=='__main__':unittest.main()
