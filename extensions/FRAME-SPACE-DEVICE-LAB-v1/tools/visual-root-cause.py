"""Evidence-based PNG and layout diff. Requires Pillow. Never invent source filenames."""
import json,sys,math,argparse
from pathlib import Path
from PIL import Image,ImageChops

def area(r):return max(0,r['width'])*max(0,r['height'])
def intersect(a,b):
 w=max(0,min(a['x']+a['width'],b['x']+b['width'])-max(a['x'],b['x']))
 h=max(0,min(a['y']+a['height'],b['y']+b['height'])-max(a['y'],b['y']))
 return w*h
def inspect(baseline,current,before=None,after=None,threshold=30):
 b=Image.open(baseline).convert('RGB');c=Image.open(current).convert('RGB')
 if b.size!=c.size:raise ValueError('Images differ in pixel dimensions; match viewport/DPR before testing')
 import numpy as np
 ba=np.asarray(b,dtype=np.int16);ca=np.asarray(c,dtype=np.int16)
 mask=np.max(np.abs(ba-ca),axis=2)>threshold
 yy,xx=np.nonzero(mask)
 changeRect={'x':int(xx.min()),'y':int(yy.min()),'width':int(xx.max()-xx.min()+1),'height':int(yy.max()-yy.min()+1)} if len(xx) else None
 result={'baseline':str(baseline),'current':str(current),'viewportPixels':list(b.size),'changedPixelRatio':round(float(mask.mean()),6),'changedPixels':int(mask.sum()),'threshold':threshold,'changedBounds':changeRect,'suspects':[],'warning':'Attribution is heuristic; source paths are only reported from explicit mapping.'}
 if before and after:
  aa=json.loads(Path(after).read_text());bb=json.loads(Path(before).read_text())
  if aa.get('viewport')!=bb.get('viewport'):result['layoutWarning']='Viewport metadata differs; compare with care'
  bn={n['selector']:n for n in bb['nodes']};an={n['selector']:n for n in aa['nodes']}
  for selector,a in an.items():
   old=bn.get(selector)
   if not old:continue
   changes={k:{'before':old['style'].get(k),'after':v} for k,v in a['style'].items() if old['style'].get(k)!=v}
   geometry=sum(abs(a['rect'][k]-old['rect'][k]) for k in ['x','y','width','height'])
   if not changes and geometry<.5:continue
   overlap=intersect(a['rect'],changeRect) if changeRect else 0
   score=round(geometry*2 + 5*len(changes) + 30*(overlap/(area(a['rect'])+1)),2)
   result['suspects'].append({'selector':selector,'source':a.get('source') if a.get('source')==old.get('source') else None,'score':score,'geometryDelta':round(geometry,2),'styleChanges':changes,'rectBefore':old['rect'],'rectAfter':a['rect']})
  result['suspects'].sort(key=lambda x:x['score'],reverse=True)
  result['suspects']=result['suspects'][:30]
 return result

def main():
 p=argparse.ArgumentParser();p.add_argument('--baseline',required=True);p.add_argument('--current',required=True);p.add_argument('--before-layout');p.add_argument('--after-layout');p.add_argument('--out',default='reports/causes.json');p.add_argument('--threshold',type=int,default=30);a=p.parse_args()
 r=inspect(a.baseline,a.current,a.before_layout,a.after_layout,a.threshold)
 o=Path(a.out);o.parent.mkdir(parents=True,exist_ok=True);o.write_text(json.dumps(r,indent=2,ensure_ascii=False)+'\n',encoding='utf8');print(json.dumps({'changedPixelRatio':r['changedPixelRatio'],'suspectCount':len(r['suspects']),'out':str(o)},indent=2))
if __name__=='__main__':
 try:main()
 except Exception as e:print('ERROR:',e,file=sys.stderr);sys.exit(1)
