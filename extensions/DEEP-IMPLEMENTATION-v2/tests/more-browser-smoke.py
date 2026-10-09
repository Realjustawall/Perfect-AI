from pathlib import Path
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for item in ('examples/gpu-techniques/water-heightfield.html','examples/accessible-interactions/keyboard-reorder.html','examples/type-studies/bilingual.html'):
        c=b.new_context(viewport={'width':390,'height':800})
        page=c.new_page();err=[];page.on('pageerror',lambda e:err.append(str(e)))
        page.set_content((r/item).read_text(encoding='utf8'),wait_until='load')
        assert page.locator('h1').is_visible()
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
        if 'water' in item:
            page.locator('#pulse').click();page.locator('#pause').click()
            assert page.locator('#pause').inner_text()=='ادامه'
        if 'keyboard-reorder' in item:
            before=page.locator('li').first.inner_text()
            page.locator('li').first.locator('[data-down]').click()
            after=page.locator('li').first.inner_text()
            assert before!=after
            assert page.locator('[role=status]').inner_text()
        if 'bilingual' in item:
            page.get_by_role('button').click();assert page.locator('html').get_attribute('dir')=='ltr'
        assert not err,err
        print('BROWSER_EXAMPLE_OK',item)
        c.close()
    b.close()
