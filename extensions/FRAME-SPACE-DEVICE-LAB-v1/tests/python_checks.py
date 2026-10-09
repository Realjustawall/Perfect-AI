import tempfile,struct,json,unittest,sys
from pathlib import Path
from PIL import Image
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
import importlib.util

def load(file):
 spec=importlib.util.spec_from_file_location(file.replace('-','_'),str(Path(__file__).resolve().parents[1]/'tools'/file));m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m
scan=load('glb-inspect.py');diff=load('visual-root-cause.py')
class Tests(unittest.TestCase):
 def test_glb(self):
  data=json.dumps({'asset':{'version':'2.0'},'meshes':[]}).encode();data+=b' ' * (-len(data)%4)
  chunk=struct.pack('<I4s',len(data),b'JSON')+data
  buf=struct.pack('<4sII',b'glTF',2,12+len(chunk))+chunk
  with tempfile.TemporaryDirectory() as d:
   f=Path(d)/'m.glb';f.write_bytes(buf)
   self.assertEqual(scan.inspect_glb(f)['meshes'],0)
 def test_glb_rejects_corrupt(self):
  with tempfile.TemporaryDirectory() as d:
   f=Path(d)/'bad.glb';f.write_bytes(b'notglb')
   with self.assertRaises(ValueError):scan.inspect_glb(f)
 def test_png_diff_and_layout(self):
  with tempfile.TemporaryDirectory() as d:
   a=Path(d)/'a.png';b=Path(d)/'b.png';Image.new('RGB',(20,20),'white').save(a)
   img=Image.new('RGB',(20,20),'white')
   for x in range(10):
    for y in range(10):img.putpixel((x,y),(0,0,0))
   img.save(b)
   report=diff.inspect(a,b);self.assertEqual(report['changedPixelRatio'],.25)
if __name__=='__main__': unittest.main()
