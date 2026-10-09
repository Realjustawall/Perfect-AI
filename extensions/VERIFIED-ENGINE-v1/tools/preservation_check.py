#!/usr/bin/env python3
"""Byte-level comparison of original ZIP members against additive ZIP; no extraction."""
import argparse,hashlib,json,zipfile,sys

def compare(old,new):
 with zipfile.ZipFile(old) as a,zipfile.ZipFile(new) as b:
  oldset=set(a.namelist());newset=set(b.namelist());missing=sorted(oldset-newset);changed=[]
  for name in sorted(oldset&newset):
   if hashlib.sha256(a.read(name)).digest()!=hashlib.sha256(b.read(name)).digest():changed.append(name)
  return {'old':len(oldset),'new':len(newset),'added':len(newset-oldset),'missing':missing,'changed':changed,'preserved':not missing and not changed}
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('old');ap.add_argument('new');a=ap.parse_args()
 res=compare(a.old,a.new);print(json.dumps(res,ensure_ascii=False,indent=2));sys.exit(0 if res['preserved'] else 1)
