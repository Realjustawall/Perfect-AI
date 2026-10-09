import unittest, json, pathlib, sys, tempfile, struct
HERE=pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0,str(HERE/'tools'))
from quality_gate import evaluate
from token_check import verify
from glb_inspect import inspect

class VerifiedTools(unittest.TestCase):
 def test_missing_evidence_rejected(self):
  r=evaluate({'checks':{'build':{'status':'pass','evidence':['build.log']}}});self.assertIn('browser',r['missing']);self.assertEqual(r['status'],'fail')
 def test_notrun_rejected(self):
  r=evaluate({'checks':{'build':{'status':'not-run'}}},['build']);self.assertEqual(r['status'],'fail')
 def test_pass_with_evidence(self):
  r=evaluate({'checks':{'build':{'status':'pass','evidence':['build.log']}}},['build']);self.assertEqual(r['status'],'pass')
 def test_token_reference(self):
  source=json.loads((HERE/'examples/style-dictionary/tokens/source.json').read_text());self.assertEqual(verify(source)['errors'],[])
 def test_token_cycle(self):
  x={'a':{'$value':'{b}','$type':'color'},'b':{'$value':'{a}','$type':'color'}};self.assertTrue(verify(x)['errors'])
 def test_glb_fixture(self):
  payload=json.dumps({'asset':{'version':'2.0'},'nodes':[{'name':'cube'}],'meshes':[]}).encode();payload+=b' '*((-len(payload))%4)
  length=20+len(payload)
  with tempfile.TemporaryDirectory() as d:
   p=pathlib.Path(d)/'valid.glb';p.write_bytes(struct.pack('<4sII',b'glTF',2,length)+struct.pack('<I4s',len(payload),b'JSON')+payload)
   self.assertEqual(inspect(p)['counts']['nodes'],1)
 def test_invalid_glb(self):
  with tempfile.TemporaryDirectory() as d:
   p=pathlib.Path(d)/'bad.glb';p.write_bytes(b'BAD');
   with self.assertRaises(ValueError):inspect(p)
if __name__=='__main__':unittest.main()
