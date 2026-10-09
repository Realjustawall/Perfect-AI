import importlib.util, unittest, tempfile, json, pathlib
BASE=pathlib.Path(__file__).resolve().parents[1]
def load(name):
 spec=importlib.util.spec_from_file_location(name,BASE/'scripts'/f'{name}.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);return mod
router=load('skill_router');tokens=load('token_tools');arb=load('arbitrate');telemetry=load('telemetry_report')
class ToolTests(unittest.TestCase):
 def test_router(self):
  q=[{'name':'three-scroll','description':'3d scroll anime animation','path':'one'},{'name':'financial','description':'finance accounting','path':'two'}]
  a=router.route({'items':q},'3d scroll hero','three',2)
  self.assertEqual(a[0]['name'],'three-scroll')
 def test_persian_feature(self):self.assertIn('scroll',router.features('انیمیشن اسکرول سه بعدی'))
 def test_token_alias(self):
  f=tokens.flatten({'a':{'$type':'color','$value':{'colorSpace':'srgb','components':[0.1,0.1,0.1]}},'b':{'$value':'{a}'}})
  v=tokens.resolved(f);self.assertEqual(v['a'],v['b']);self.assertIn('--zt-b',tokens.to_css(v))
 def test_token_cycle(self):
  with self.assertRaises(ValueError):tokens.resolved(tokens.flatten({'a':{'$type':'color','$value':'{b}'},'b':{'$type':'color','$value':'{a}'}}))
 def test_evidence_conflict(self):
  a=[{'role':'X','component':'hero','issue':'contrast','action':'increase','severity':'high','evidence':['pic']},{'role':'Y','component':'hero','issue':'contrast','action':'decrease','severity':'high','evidence':['trace']}]
  result=arb.arbitrate(a);self.assertEqual(len(result['conflicts']),1);self.assertFalse(result['automatic_edits_allowed'])
 def test_missing_evidence(self):
  with self.assertRaises(ValueError):arb.arbitrate([{'role':'x','component':'h','issue':'i','action':'a','severity':'high','evidence':[]}])
 def test_quantile(self):self.assertEqual(telemetry.quantile([1,2,3,4]),3.25)
 def test_sample_gate(self):
  x=telemetry.report([{'metric':'LCP','value':1800,'release':'x'}]);self.assertEqual(x['cohorts'][0]['status'],'insufficient-samples')
if __name__=='__main__':unittest.main()
