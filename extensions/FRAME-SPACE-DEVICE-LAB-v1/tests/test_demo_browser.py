"""Browser smoke on standalone HTML; DOES NOT substitute real mobile/Three.js tests."""
from pathlib import Path
import json,sys
from playwright.sync_api import sync_playwright
root=Path(__file__).parents[1]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 for width in [360,768,1440]:
  page=browser.new_page(viewport={'width':width,'height':844})
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content((root/'examples/motion-testbed.html').read_text(encoding='utf-8'),wait_until='domcontentloaded')
  page.evaluate('window.__ZT_MOTION_DEBUG__.seek(.5)')
  value=page.locator('.orb').evaluate('(el)=>getComputedStyle(el).transform')
  assert value!='none',f'orb not moving at {width}'
  assert page.evaluate('document.documentElement.scrollWidth<=window.innerWidth+1'),f'horizontal overflow {width}'
  page.evaluate('window.__ZT_MOTION_DEBUG__.seek(1)')
  page.screenshot(path=str(root/f'examples/proof-{width}.png'))
  assert not errors,f'Javascript errors: {errors}'
  print(f'BROWSER PASS viewport={width} debug seek at .5/1 and no overflow')
  page.close()
 browser.close()
