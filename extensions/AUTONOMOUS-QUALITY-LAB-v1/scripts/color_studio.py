#!/usr/bin/env python3
"""Render 5 semantic palettes on actual interactive component preview; WCAG checks."""
import argparse,colorsys,html,json,pathlib,sys

def hexrgb(h):
    h=h.strip().lstrip('#')
    if len(h)!=6 or any(c not in '0123456789abcdefABCDEF' for c in h):raise ValueError('Need 6-digit hex')
    return tuple(int(h[i:i+2],16)/255 for i in (0,2,4))
def hexcolor(rgb):return '#'+''.join(f'{round(max(0,min(1,c))*255):02X}' for c in rgb)
def linear(c):return c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4
def luminance(s):
    c=hexrgb(s);return sum(v*l for v,l in zip((.2126,.7152,.0722),map(linear,c)))
def contrast(a,b):
    l1,l2=sorted((luminance(a),luminance(b)),reverse=True);return round((l1+.05)/(l2+.05),2)
def mix(a,b,t):return hexcolor(tuple(x*(1-t)+y*t for x,y in zip(hexrgb(a),hexrgb(b))))
def make(base):
    return [
      {'name':'Monochrome','bg':'#0A0B0C','surface':'#17181B','text':'#F7F7F7','accent':'#E8E8E8'},
      {'name':'Brand dark','bg':'#0B1016','surface':'#19202A','text':'#F6F8FB','accent':base},
      {'name':'Brand light','bg':'#F8F9FC','surface':'#FFFFFF','text':'#14171F','accent':mix(base,'#000000',.25)},
      {'name':'Soft neutral','bg':'#EFEDE9','surface':'#FFFFFF','text':'#262527','accent':mix(base,'#333333',.32)},
      {'name':'Deep ink','bg':'#141217','surface':'#27232B','text':'#FFFFFF','accent':mix(base,'#FFFFFF',.24)},
    ]
def render(brand,out):
    if not brand.get('approved'):raise ValueError('Identity must be approved')
    base=(brand.get('palette') or {}).get('primary','#808080')
    try:hexrgb(base)
    except ValueError:base='#808080'
    dest=pathlib.Path(out);dest.mkdir(parents=True,exist_ok=True)
    results=[]
    locked=(brand.get('palette') or {}).get('locked',[])
    for i,p in enumerate(make(base)):
        # Preserve approved accent hue if the brand locks the exact primary color.
        # The variant may still change neutral surfaces and foreground colors.
        if isinstance(locked,list) and any(str(v).lower()==base.lower() for v in locked):
            p['accent']=base
        # The button label must be legible on accent; choose white/black dynamically.
        p['onAccent']='#0D0D0D' if contrast(p['accent'],'#0D0D0D')>=contrast(p['accent'],'#FFFFFF') else '#FFFFFF'
        pairs={'body':contrast(p['text'],p['bg']),'card':contrast(p['text'],p['surface']),'cta':contrast(p['onAccent'],p['accent'])}
        violations=[k for k,v in pairs.items() if v<4.5]
        p['scores']={'WCAG_AA_text_pairs':pairs,'violations':violations}
        page=f'''<!doctype html><html lang="fa" dir="rtl"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(brand.get('name','Brand'))} — {p['name']}</title>
<style>:root{{--bg:{p['bg']};--surface:{p['surface']};--text:{p['text']};--accent:{p['accent']};--on:{p['onAccent']}}}*{{box-sizing:border-box}}body{{font:16px/1.7 system-ui,sans-serif;margin:0;background:var(--bg);color:var(--text)}}header{{padding:1.2rem clamp(1rem,4vw,5rem);border-bottom:1px solid color-mix(in srgb,var(--text) 16%,transparent);display:flex;align-items:center;justify-content:space-between}}main{{max-width:1100px;margin:auto;padding:clamp(1rem,4vw,5rem)}}h1{{font-size:clamp(2rem,6vw,5rem);line-height:1.18;max-width:15ch}}.grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:1rem}}.card{{padding:1.4rem;border-radius:16px;background:var(--surface);border:1px solid color-mix(in srgb,var(--text) 12%,transparent)}}a,button{{color:var(--on);background:var(--accent);border:0;border-radius:9px;padding:.7rem 1.2rem;font:inherit;cursor:pointer}}input{{background:var(--surface);border:1px solid var(--text);border-radius:7px;color:var(--text);padding:.6rem}}:focus-visible{{outline:3px solid var(--accent);outline-offset:3px}}</style>
<header><strong>{html.escape(brand.get('name','Brand'))}</strong><span>{p['name']}</span></header><main><h1>طراحی هدفمند و دقیق</h1><p>مقایسهٔ واقعی متن، کارت، فرم و دکمه برای تصمیم‌گیری رنگی.</p><button>شروع کنید</button><section class="grid" aria-label="نمونهٔ کامپوننت‌ها"><div class="card"><h2>کارت محصول</h2><p>رنگ متن و سطح با کنتراست قابل سنجش</p><button>جزئیات</button></div><div class="card"><h2>فرم</h2><label>ایمیل <input type="email" placeholder="email@example.com"></label></div><div class="card"><h2>حالت انتخاب</h2><p>نمونهٔ رنگ فعال و غیرفعال</p><button>انتخاب</button></div></section></main></html>'''
        (dest/f'palette-{i+1}.html').write_text(page,encoding='utf-8')
        results.append(p)
    data={'brand':brand.get('name'),'palettes':results,'criteria':'WCAG 4.5:1 for normal text; subjective visual identity requires human review.','rendered_components':['header','hero','CTA','product card','form','state card']}
    (dest/'palettes.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return data
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--brand',required=True);p.add_argument('--out',required=True);a=p.parse_args()
    data=render(json.loads(pathlib.Path(a.brand).read_text('utf-8')),a.out)
    print(json.dumps([{'name':v['name'],**v['scores']} for v in data['palettes']],indent=2))
