from playwright.sync_api import sync_playwright
from pathlib import Path
html=(Path(__file__).resolve().parents[1]/'examples/offline-lab/index.html').read_text(encoding='utf-8')
success=0; issues=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for width in [320,360,390,430,768,1024,1440,1920]:
  for motion in ['no-preference','reduce']:
   page=browser.new_page(viewport={'width':width,'height':850},reduced_motion=motion)
   errors=[];page.on('pageerror', lambda error:errors.append(str(error)))
   try:
    page.set_content(html,wait_until='load');page.wait_for_timeout(120)
    page.evaluate('scrollTo(0,document.documentElement.scrollHeight*.46)');page.wait_for_timeout(100)
    mid=page.evaluate('parseFloat(document.documentElement.style.getPropertyValue("--progress"))')
    page.evaluate('scrollTo(0,0)');page.wait_for_timeout(90)
    start=page.evaluate('parseFloat(document.documentElement.style.getPropertyValue("--progress"))')
    assert mid>=start, (width,motion,mid,start)
    page.locator('#language').click();page.wait_for_timeout(80)
    assert page.locator('html').get_attribute('lang')=='en'
    assert page.locator('html').get_attribute('dir')=='ltr'
    overflow=page.evaluate('Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-innerWidth')
    assert overflow<=2,(width,motion,overflow)
    assert not errors,errors
    success+=1
   except Exception as ex:issues.append((width,motion,str(ex)[:160]))
   finally:page.close()
 browser.close()
print('Chromium cases passed:',success,'/16')
print('Failures:',issues[:10])
if issues:raise SystemExit(1)
