#!/usr/bin/env python3
"""DTCG (2025.10) alias resolver and safe CSS exporter for color/dimension tokens."""
import argparse,json,re,sys
from pathlib import Path
P = re.compile(r'^\{([a-zA-Z0-9_\-]+(?:\.[a-zA-Z0-9_\-]+)*)\}$')
def flatten(data,prefix=(),type_=None):
 out={}
 for key,val in data.items():
  if key.startswith('$'): continue
  if isinstance(val,dict):
   path=prefix+(key,)
   if '$value' in val: out['.'.join(path)]={'value':val['$value'],'type':val.get('$type',type_)}
   else: out.update(flatten(val,path,val.get('$type',type_)))
 return out
def resolved(flat):
 state={}; values={}
 def get(k):
  if k not in flat: raise ValueError('unknown reference: '+k)
  if state.get(k)=='busy':raise ValueError('token alias cycle at '+k)
  if state.get(k)=='done':return values[k]
  state[k]='busy';v=flat[k]['value'];tp=flat[k]['type']
  if isinstance(v,str) and (m:=P.match(v)):
   ref=m.group(1);v,rt=get(ref);tp=tp or rt
   if tp!=rt:raise ValueError('alias type mismatch '+k)
  if tp not in ('color','dimension','fontFamily','duration','number','fontWeight','cubicBezier'):
   raise ValueError('unsupported or missing explicit type '+k+': '+str(tp))
  if tp=='color':
   if not isinstance(v,dict) or v.get('colorSpace')!='srgb' or not isinstance(v.get('components'),list) or len(v['components'])!=3 or any(not isinstance(x,(float,int)) or x<0 or x>1 for x in v['components']):
    raise ValueError('color must be DTCG sRGB object '+k)
  if tp in ('dimension','duration') and (not isinstance(v,dict) or not isinstance(v.get('value'),(int,float)) or v.get('unit') not in (('px','rem') if tp=='dimension' else ('ms','s'))):raise ValueError('dimension/duration invalid '+k)
  values[k]=(v,tp);state[k]='done';return values[k]
 for k in flat:get(k)
 return values
def to_css(values):
 result=[':root {']
 for name,(v,tp) in sorted(values.items()):
  if tp=='color': css='rgb('+ ' '.join(f'{round(c*255)}' for c in v['components'])+')'
  elif tp in ('dimension','duration'):css=f'{v["value"]}{v["unit"]}'
  elif tp=='number':css=str(v)
  elif tp=='fontWeight':css=str(v)
  elif tp=='fontFamily': css=', '.join(json.dumps(a) for a in (v if isinstance(v,list) else [v]))
  else:continue
  result.append(f'  --zt-{name.replace(".","-")}: {css};')
 return '\n'.join(result+['}'])+'\n'
def main():
 ap=argparse.ArgumentParser();ap.add_argument('action',choices=['validate','css']);ap.add_argument('file');ap.add_argument('--output');a=ap.parse_args()
 x=json.loads(Path(a.file).read_text(encoding='utf-8'));f=flatten(x);v=resolved(f)
 if a.action=='css':
  css=to_css(v)
  if a.output:Path(a.output).write_text(css,encoding='utf-8')
  else:print(css)
 else:print(json.dumps({'valid':True,'tokens':len(v),'names':list(v)},ensure_ascii=False))
if __name__=='__main__':main()
