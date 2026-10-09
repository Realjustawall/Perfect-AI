import unittest, tempfile, pathlib, importlib.util
ROOT=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('splat_inspect',ROOT/'tools'/'inspect-splat.py')
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
class SplatTests(unittest.TestCase):
 def test_valid_capture(self):
  with tempfile.TemporaryDirectory() as d:
   p=pathlib.Path(d)/'x.splat';p.write_bytes(b'\x00'*96)
   result=mod.inspect(p);self.assertEqual(result['splats'],3)
 def test_reject_wrong_length(self):
  with tempfile.TemporaryDirectory() as d:
   p=pathlib.Path(d)/'x.splat';p.write_bytes(b'\x00'*31)
   with self.assertRaises(ValueError):mod.inspect(p)
 def test_reject_wrong_format(self):
  with tempfile.TemporaryDirectory() as d:
   p=pathlib.Path(d)/'x.glb';p.write_bytes(b'\x00'*32)
   with self.assertRaises(ValueError):mod.inspect(p)
if __name__=='__main__':unittest.main()
