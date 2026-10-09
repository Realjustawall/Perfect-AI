import unittest,sys,pathlib,json,tempfile,importlib.util
ROOT=pathlib.Path(__file__).resolve().parents[1]
def module(name):
 f=ROOT/'tools'/f'{name}.py';spec=importlib.util.spec_from_file_location(name,f);mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);return mod
route=module('route');layout=module('layout_variant');plan=module('evidence_plan');checker=module('validate_pack');sync=module('sync_upstreams')
class Tests(unittest.TestCase):
 def test_01_valid_skills(self):self.assertTrue(checker.validate(ROOT)['passed'])
 def test_02_router_react(self):self.assertEqual(route.route('React shadcn dashboard with dialog','react')['selected'][0]['skill'],'ztgc-shadcn-ui-workflow')
 def test_03_router_remotion(self):self.assertIn('ztgc-remotion-production',[x['skill'] for x in route.route('remotion video mp4','react')['selected']])
 def test_04_router_no_nonsense(self):self.assertEqual(route.route('completely unrelated words','none')['selected'],[])
 def test_05_layout_determinism(self):self.assertEqual(layout.variants(42),layout.variants(42))
 def test_06_layout_divergence(self):self.assertEqual(len(set(v['grid'] for v in layout.variants(42))),3)
 def test_07_plan_safety(self):
  with tempfile.TemporaryDirectory() as td:
   input=[{'title':'Broken Dialog Focus','evidence':'src/a.tsx:20 missing focus restoration','impact':'keyboard user gets lost','acceptance':'Escape restores focus'}]
   made=plan.make_plans(input,td);self.assertEqual(len(made),1)
   self.assertTrue(pathlib.Path(made[0]).exists())
   with self.assertRaises(FileExistsError):plan.make_plans(input,td)
 def test_08_plan_requires_evidence(self):
  with tempfile.TemporaryDirectory() as td:
   with self.assertRaises(ValueError):plan.make_plans([{'title':'Missing'}],td)
 def test_09_license_block(self):self.assertIn('blocked',sync.plan('remotion'))
 def test_10_license_doctor(self):self.assertIn('blocked',sync.plan('doctor'))
 def test_11_license_manifest(self):
  j=json.loads((ROOT/'SOURCE-MANIFEST.json').read_text(encoding='utf8'));self.assertEqual(len(j['sources']),9)
 def test_12_utf8(self):self.assertIn('RTL',(ROOT/'README.md').read_text(encoding='utf8')+' '+(ROOT/'README-FA.md').read_text(encoding='utf8'))
 def test_13_name_uniqueness(self):self.assertEqual(len(list((ROOT/'skills').glob('*/SKILL.md'))),37)
 def test_14_no_mcp_runtime(self):self.assertNotIn('mcp__', (ROOT/'install/install-windows.ps1').read_text())
 def test_15_offline_picker(self):
  html=(ROOT/'examples/prototype-picker/index.html').read_text(encoding='utf8');self.assertIn('aria-pressed',html);self.assertNotIn('<script src="https:',html)
if __name__=='__main__':unittest.main(verbosity=2)
