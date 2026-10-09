#!/usr/bin/env python3
"""Generate semantic Tailwind CSS v4 and Bootstrap 5.3 token styles.
Use only approved palette inputs; this does not itself guarantee accessibility.
"""
from __future__ import annotations
import argparse,json,re,pathlib
HEX=re.compile(r'^#[0-9a-fA-F]{6}$')
DEFAULT={'canvas':'#09090b','surface':'#18181b','text':'#fafafa','muted':'#d4d4d8','border':'#71717a','accent':'#e4e4e7','focus':'#fafafa'}
def rgb(h):return tuple(int(h[i:i+2],16)/255 for i in (1,3,5))
def luminosity(h):
 vals=rgb(h);lin=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in vals]
 return .2126*lin[0]+.7152*lin[1]+.0722*lin[2]
def contrast(a,b):
 x,y=sorted((luminosity(a),luminosity(b)),reverse=True)
 return (x+.05)/(y+.05)
def render(d):
 for k in DEFAULT:
  if not HEX.fullmatch(d.get(k,'')):raise ValueError(f'Invalid or missing {k}: expected #RRGGBB')
 tw='@import "tailwindcss";\n@theme {\n'+''.join(f'  --color-zt-{k}: {d[k]};\n' for k in DEFAULT)+'}\n'
 bs=':root, [data-bs-theme="dark"] {\n'+''.join(f'  --zt-{k}: {d[k]};\n' for k in DEFAULT)+f'  --bs-body-bg: {d["canvas"]};\n  --bs-body-color: {d["text"]};\n  --bs-border-color: {d["border"]};\n}}\n'
 return tw,bs
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--palette');p.add_argument('--out',default='.');p.add_argument('--strict',action='store_true');args=p.parse_args()
 d=DEFAULT.copy()
 if args.palette:d.update(json.loads(pathlib.Path(args.palette).read_text(encoding='utf-8')))
 tw,bs=render(d);out=pathlib.Path(args.out);out.mkdir(parents=True,exist_ok=True)
 (out/'tailwind.theme.css').write_text(tw,encoding='utf-8');(out/'bootstrap.theme.css').write_text(bs,encoding='utf-8')
 report={'text_canvas':round(contrast(d['text'],d['canvas']),2),'muted_canvas':round(contrast(d['muted'],d['canvas']),2),'focus_canvas':round(contrast(d['focus'],d['canvas']),2),'border_canvas':round(contrast(d['border'],d['canvas']),2)}
 report['aa_normal_text']=report['text_canvas']>=4.5;report['aa_muted_text']=report['muted_canvas']>=4.5
 (out/'palette-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
 print(json.dumps(report,indent=2))
 if args.strict and not all((report['aa_normal_text'],report['aa_muted_text'])):raise SystemExit('Text contrast failed WCAG AA 4.5:1')
