#!/usr/bin/env python3
"""Browser smoke runner; requires pip install playwright and playwright install chromium firefox webkit.
Run with a local HTTP server; never claims a missing browser passed. Output JSON evidence.
"""
import argparse,json,pathlib
from playwright.sync_api import sync_playwright
p=argparse.ArgumentParser();p.add_argument('--url',default='http://127.0.0.1:4173/examples/showcase/');p.add_argument('--out',default='.browser-evidence');p.add_argument('--browsers',default='chromium,firefox,webkit');args=p.parse_args();out=pathlib.Path(args.out);out.mkdir(parents=True,exist_ok=True)
reports=[]
with sync_playwright() as pw:
 for browser_name in args.browsers.split(','):
  try:
   browser=getattr(pw,browser_name).launch(headless=True)
  except Exception as e:
   reports.append({'browser':browser_name,'status':'NOT_RUN','reason':str(e)[:350]});continue
  for width in (360,390,768,1440):
   for reduced in (False,True):
    p=browser.new_page(viewport={'width':width,'height':850},reduced_motion='reduce' if reduced else 'no-preference');errors=[];p.on('pageerror',lambda err:errors.append(str(err)))
    case={'browser':browser_name,'width':width,'reducedMotion':reduced}
    try:
     resp=p.goto(args.url,wait_until='load',timeout=15000);p.locator('.labs').wait_for(timeout=5000);case.update({'status':'PASS' if resp and resp.ok and p.locator('article.lab').count()==12 and not p.evaluate('document.documentElement.scrollWidth>window.innerWidth+2') and not errors else 'FAIL','errors':errors,'panels':p.locator('article.lab').count()})
     p.screenshot(path=str(out/f'{browser_name}-{width}-{reduced}.png'),full_page=True)
    except Exception as e:case.update({'status':'NOT_RUN' if 'ERR_BLOCKED_BY_ADMINISTRATOR' in str(e) else 'FAIL','reason':str(e)[:300]})
    reports.append(case);p.close()
  browser.close()
(out/'report.json').write_text(json.dumps(reports,indent=2));print(json.dumps(reports,indent=2));raise SystemExit(1 if any(x['status']=='FAIL' for x in reports) else 0)
