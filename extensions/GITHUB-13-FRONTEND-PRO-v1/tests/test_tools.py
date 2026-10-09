import unittest,tempfile,pathlib,sys,importlib.util
TOOLS=pathlib.Path(__file__).resolve().parents[1]/'tools'
def load(name):
 spec=importlib.util.spec_from_file_location(name,TOOLS/f'{name}.py');module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
class Tests(unittest.TestCase):
 def test_css_vars_and_fonts(self):
  with tempfile.TemporaryDirectory() as x:
   root=pathlib.Path(x);(root/'main.css').write_text(':root { --brand-bg: #000; font-family: Vazirmatn; }',encoding='utf8')
   d=load('design_extract').extract(root)
   self.assertEqual(d['tokens'][0]['name'],'--brand-bg');self.assertEqual(d['fonts'][0]['family'],'Vazirmatn')
 def test_vendor_dir_excluded(self):
  with tempfile.TemporaryDirectory() as x:
   root=pathlib.Path(x);(root/'node_modules').mkdir();(root/'node_modules'/'x.css').write_text('--old:bad;')
   self.assertEqual(load('design_extract').extract(root)['tokens'],[])
 def test_visual_diff_png(self):
  from PIL import Image
  with tempfile.TemporaryDirectory() as x:
   root=pathlib.Path(x);a=root/'a.png';b=root/'b.png';d=root/'diff.png'
   Image.new('RGB',(8,8),(0,0,0)).save(a);Image.new('RGB',(8,8),(255,255,255)).save(b)
   r=load('visual_diff').compare(a,b,d)
   self.assertEqual(r['changed_pixels'],64);self.assertTrue(d.exists())
 def test_skill_audit(self):
  import subprocess
  p=subprocess.run([sys.executable,str(TOOLS/'skill_audit.py')],capture_output=True,text=True)
  self.assertEqual(p.returncode,0,p.stdout+p.stderr)
if __name__=='__main__':unittest.main()
