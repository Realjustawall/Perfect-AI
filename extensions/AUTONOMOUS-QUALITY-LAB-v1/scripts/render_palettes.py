#!/usr/bin/env python3
"""Produce 5 actual Chromium screenshots of generated semantic palette pages."""
import argparse,json,pathlib,shutil,sys
from playwright.sync_api import sync_playwright

def render(folder,out):
    folder=pathlib.Path(folder).resolve();dest=pathlib.Path(out).resolve();dest.mkdir(parents=True,exist_ok=True)
    if not (folder/'palettes.json').is_file():raise ValueError('Call color_studio.py first to generate palettes.json')
    summary=[]
    with sync_playwright() as p:
        try:browser=p.chromium.launch(headless=True)
        except Exception:
            exe=shutil.which('chromium') or shutil.which('chromium-browser')
            if not exe:raise
            browser=p.chromium.launch(headless=True,executable_path=exe,args=['--no-sandbox'])
        try:
            for i in range(1,6):
                html=folder/f'palette-{i}.html'
                if not html.exists():raise FileNotFoundError(html)
                for width in (390,1440):
                    page=browser.new_page(viewport={'width':width,'height':870})
                    page.set_content(html.read_text('utf-8'))
                    page.evaluate('document.fonts.ready')
                    screenshot=dest/f'palette-{i}-w{width}.png'
                    page.screenshot(path=str(screenshot),full_page=True)
                    metrics=page.evaluate('''() => ({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+2, font:document.fonts.status})''')
                    summary.append({'palette':i,'width':width,'screenshot':str(screenshot),'metrics':metrics})
                    page.close()
        finally:browser.close()
    (dest/'render-results.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return summary
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--palettes',required=True);p.add_argument('--out',required=True);a=p.parse_args()
    v=render(a.palettes,a.out);print(json.dumps({'screenshots':len(v),'overflows':sum(x['metrics']['overflow'] for x in v)}))
