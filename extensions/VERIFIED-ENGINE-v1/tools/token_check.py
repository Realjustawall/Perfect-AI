#!/usr/bin/env python3
"""Validate DTCG tokens, aliases and self/cyclic references without external packages."""
import pathlib, json, re, sys, argparse
PAT=re.compile(r'^\{([a-zA-Z0-9_.-]+)\}$')
def flatten(obj,prefix=''):
 result={}
 for k,v in obj.items():
  key=f'{prefix}.{k}' if prefix else k
  if isinstance(v,dict) and '$value' in v: result[key]=v
  elif isinstance(v,dict): result.update(flatten(v,key))
 return result
def verify(data):
 tokens=flatten(data);bad=[]
 for name,t in tokens.items():
  if '$type' not in t: bad.append(f'{name}:missing $type')
  v=t['$value']
  if isinstance(v,str) and (m:=PAT.match(v)):
   dest=m.group(1)
   if dest not in tokens:bad.append(f'{name}:missing reference {dest}')
   else:
    seen={name};cur=dest
    while cur in tokens:
     if cur in seen:bad.append(f'{name}:cycle');break
     seen.add(cur);x=tokens[cur]['$value'];n=PAT.match(x) if isinstance(x,str) else None
     if not n:break
     cur=n.group(1)
 return {'tokens':len(tokens),'errors':sorted(set(bad))}
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('file');a=ap.parse_args()
 res=verify(json.loads(pathlib.Path(a.file).read_text(encoding='utf-8')))
 print(json.dumps(res,ensure_ascii=False,indent=2));sys.exit(1 if res['errors'] else 0)
