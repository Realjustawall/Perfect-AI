import json,tempfile,pathlib,sys,unittest
here=pathlib.Path(__file__).resolve().parents[1]/'scripts'
sys.path.insert(0,str(here))
from choose_reviewers import choose
from mobile_budget import choose as budget
from color_studio import make,contrast,render
from agent_review import validate_brand
from quality_scan import scan
class SkillsTests(unittest.TestCase):
    def test_site_roles(self):self.assertIn('checkout',choose('ecommerce'))
    def test_3d_roles(self):self.assertIn('3d_placement',choose('3d-experience'))
    def test_accessibility_always(self):self.assertIn('accessibility',choose('landing'))
    def test_brand_approval(self):self.assertIn('approved',validate_brand({'name':'Demo'}))
    def test_color_range(self):self.assertEqual(len(make('#303030')),5)
    def test_color_wcag(self):self.assertGreater(contrast('#FFFFFF','#000000'),20)
    def test_budget_downshift(self):self.assertLess(budget([32]*80)['particle_fraction'],1)
    def test_budget_error(self):
        with self.assertRaises(ValueError):budget([])
    def test_palette_render(self):
        with tempfile.TemporaryDirectory() as d:
            data=render({'approved':True,'name':'Example','palette':{'primary':'#555555'}},d)
            self.assertEqual(len(data['palettes']),5)
            self.assertTrue((pathlib.Path(d)/'palette-5.html').exists())
    def test_quality_scan(self):
        with tempfile.TemporaryDirectory() as d:
            (pathlib.Path(d)/'main.js').write_text('window.addEventListener("scroll",fn)')
            self.assertTrue(scan(d)['findings'])
if __name__=='__main__':unittest.main()
