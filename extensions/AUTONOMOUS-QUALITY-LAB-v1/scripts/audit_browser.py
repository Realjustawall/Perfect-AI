#!/usr/bin/env python3
"""Browser evidence collector: local by default, deterministic matrix; no edits."""
import argparse, json, pathlib, re, sys, time, hashlib, statistics, shutil
from urllib.parse import urlparse

VIEWPORTS = [320,360,390,430,768,1024,1440,1920]
SCROLL_STEPS = [0.0, .33, .68, 1.0]

def collect(url, output, widths=VIEWPORTS, modes=('no-preference','reduce'), steps=SCROLL_STEPS,
            screenshot=True, mobile=True, timeout=30000, allow_remote=False, html_file=None):
    from playwright.sync_api import sync_playwright
    dest=pathlib.Path(output);dest.mkdir(parents=True,exist_ok=True)
    loc=urlparse(url)
    if not html_file and (loc.scheme not in ('http','https') or (not allow_remote and (loc.hostname or '').lower() not in ('127.0.0.1','localhost','::1'))):
        raise ValueError('Only http(s) local URLs are permitted by default; explicit --allow-remote required')
    results=[];errors=[];cases=0
    with sync_playwright() as p:
        try:
            browser=p.chromium.launch(headless=True, args=['--disable-dev-shm-usage'])
        except Exception:
            system_chromium=shutil.which('chromium') or shutil.which('chromium-browser')
            if not system_chromium:raise
            browser=p.chromium.launch(headless=True, executable_path=system_chromium,args=['--no-sandbox','--disable-dev-shm-usage'])
        try:
            for width in widths:
                for mode in modes:
                    is_mobile=mobile and width<=430
                    context=browser.new_context(viewport={'width':width,'height':800 if width<768 else 900},
                         device_scale_factor=1, is_mobile=is_mobile,has_touch=is_mobile,
                         reduced_motion=mode,color_scheme='dark')
                    page=context.new_page();page_errors=[];request_failures=[]
                    page.on('pageerror',lambda e:page_errors.append(str(e)))
                    page.on('requestfailed',lambda req: request_failures.append(req.url))
                    if html_file:
                        # Offline fixture mode: does not test real server/network behavior.
                        page.set_content(pathlib.Path(html_file).read_text('utf-8'),wait_until='domcontentloaded',timeout=timeout)
                    else:
                        page.goto(url,wait_until='domcontentloaded',timeout=timeout)
                    page.evaluate('document.fonts.ready')
                    page.wait_for_timeout(200)
                    metrics=page.evaluate('''() => ({
                      scrollWidth: document.documentElement.scrollWidth,
                      clientWidth: document.documentElement.clientWidth,
                      height: document.documentElement.scrollHeight,
                      fontStatus: document.fonts.status,
                      direction: getComputedStyle(document.documentElement).direction,
                      h1Visible: [...document.querySelectorAll('h1')].some(x=>{const r=x.getBoundingClientRect();return r.width>0&&r.height>0}),
                      canvasCount:document.querySelectorAll('canvas').length,
                      animations:document.getAnimations().length,
                      reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches
                    })''')
                    if metrics['scrollWidth']>metrics['clientWidth']+2:
                        errors.append({'code':'horizontal-overflow','width':width,'motion':mode,'pixels':metrics['scrollWidth']-metrics['clientWidth'],'severity':'high'})
                    if not metrics['h1Visible']:
                        errors.append({'code':'missing-visible-h1','width':width,'motion':mode,'severity':'medium'})
                    for step in steps:
                        page.evaluate('''p=>{window.scrollTo({top:Math.max(0,(document.documentElement.scrollHeight-innerHeight)*p),behavior:'instant'});window.__ZT_TEST_SEEK_PROGRESS?.(p)}''',step)
                        page.wait_for_timeout(130)
                        stem=f'w{width}-{mode}-s{round(step*100):03d}'
                        if screenshot:page.screenshot(path=str(dest/(stem+'.png')),full_page=False,animations='disabled')
                        cases+=1
                        results.append({'case':stem,'width':width,'motion':mode,'scroll':step,
                             'y':page.evaluate('scrollY'),'title':page.title()})
                    if page_errors:
                        errors.append({'code':'pageerror','width':width,'motion':mode,'details':page_errors[:12],'severity':'high'})
                    if request_failures:
                        errors.append({'code':'requestfailed','width':width,'motion':mode,'details':request_failures[:12],'severity':'low'})
                    results.append({'type':'viewport_metrics','width':width,'motion':mode,**metrics})
                    context.close()
        finally:browser.close()
    report={'schema':'ztx7-browser-audit/v1','url':url,'cases':cases,'failures':errors,'observations':results,
      'limitations':['Emulation does not prove performance on real mobile hardware.',
                     'Screenshots do not validate unexposed WebGL object/world coordinates.',
                     'Screenshot animations=disabled is not sufficient to freeze custom Canvas/WebGL loops.'],
      'status':'fail' if errors else 'pass'}
    (dest/'audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return report

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--url',required=True);p.add_argument('--out',required=True)
    p.add_argument('--allow-remote',action='store_true');p.add_argument('--no-screenshots',action='store_true')
    p.add_argument('--quick',action='store_true');p.add_argument('--html-file',help='Offline HTML fixture; does not prove local server routing');p.add_argument('--widths',nargs='*',type=int)
    a=p.parse_args()
    widths=a.widths or ([390,1440] if a.quick else VIEWPORTS)
    rep=collect(a.url,a.out,widths=widths,allow_remote=a.allow_remote,screenshot=not a.no_screenshots,html_file=a.html_file)
    print(json.dumps({'status':rep['status'],'cases':rep['cases'],'failures':len(rep['failures'])},indent=2))
    return 0 if rep['status']=='pass' else 2
if __name__=='__main__':sys.exit(main())
