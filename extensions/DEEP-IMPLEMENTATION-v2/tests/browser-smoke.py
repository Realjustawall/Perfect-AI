"""Real Chromium checks for dependency-free responsive example (not for optional R3F/Anime apps)."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json

html=Path(__file__).resolve().parents[1]/'examples'/'responsive-product'/'index.html'
widths=[320,360,390,430,768,1024,1440,1920]
reports=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for width in widths:
        for reduced in (False,True):
            ctx=browser.new_context(viewport={'width':width,'height':780},reduced_motion='reduce' if reduced else 'no-preference')
            page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
            page.set_content(html.read_text(encoding='utf8'),wait_until='load')
            page.locator('#toggle').click()
            assert page.locator('#menu').get_attribute('aria-hidden')=='false'
            page.keyboard.press('Escape')
            assert page.locator('#menu').get_attribute('aria-hidden')=='true'
            page.locator('#direction').click()
            assert page.locator('html').get_attribute('dir')=='ltr'
            page.locator('#theme').click()
            assert 'light' in page.locator('body').get_attribute('class')
            page.locator('#notify').click()
            assert 'موفقیت' in page.locator('#status').inner_text()
            metric=page.evaluate('''() => ({width:innerWidth,scroll:document.documentElement.scrollWidth,
              content:document.querySelector('main').getBoundingClientRect().width,
              heroTitle:document.querySelector('h1').getBoundingClientRect().width,
              controls:[...document.querySelectorAll('button')].filter(b=>getComputedStyle(b).display!=='none' && b.closest('[aria-hidden=false]') || b.closest('[aria-hidden]')===null).every(b=>b.getBoundingClientRect().width>0)})''')
            assert metric['scroll']<=width+1,metric
            assert metric['controls'] and metric['heroTitle']>0 and not errors,(metric,errors)
            if width in (390,1440) and not reduced:
                page.screenshot(path=str(html.parent/f'proof-{width}.png'),full_page=True)
            reports.append({'width':width,'reduced':reduced,'pass':True,'metric':metric,'jsErrors':errors})
            ctx.close()
    browser.close()
print(json.dumps({'cases':len(reports),'passed':sum(r['pass'] for r in reports),'failed':0,'viewportResults':reports},ensure_ascii=False,indent=2))
