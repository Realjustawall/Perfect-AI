"""Safe, read-only local Figma-like JSON token/layout inspection. Does not claim full Figma conversion."""
import sys,json,re
from pathlib import Path

def traverse(n,out,depth=0):
    if not isinstance(n,dict) or depth>40:return
    layout=n.get('layoutMode');name=str(n.get('name','unnamed'))
    if layout in ('HORIZONTAL','VERTICAL'):
        out.append({'name':name,'layout': 'row' if layout=='HORIZONTAL' else 'column','gap':n.get('itemSpacing',0),'padding':{k:n.get('padding'+k,0) for k in ('Top','Bottom','Left','Right')}})
    for child in n.get('children',[]):traverse(child,out,depth+1)

def main(filename):
    data=json.loads(Path(filename).read_text(encoding='utf8'))
    blocks=[];traverse(data,blocks)
    print(json.dumps({'auto_layout_count':len(blocks),'layouts':blocks,'warnings':['Review nested constraints, typography, colors and variants manually.','Sanitize untrusted SVG separately; no source file modified.']},ensure_ascii=False,indent=2))
if __name__=='__main__':main(sys.argv[1])
