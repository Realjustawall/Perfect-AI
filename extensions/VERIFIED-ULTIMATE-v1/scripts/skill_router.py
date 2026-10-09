#!/usr/bin/env python3
"""Deterministic, local skill routing. Never executes a skill's contents."""
import argparse, collections, json, math, re, sys, zipfile
from pathlib import Path

ALIASES={
  '3d':['three','r3f','webgpu','glb','gltf','shader','سه بعدی','مدل','camera','scene'],
  'scroll':['scroll','اسکرول','scrub','pin','timeline','lenis'],
  'responsive':['responsive','container','mobile','rtl','ریسپانسیو','موبایل'],
  'color':['brand','palette','token','theme','رنگ','هویت'],
  'testing':['playwright','test','ci','qa','تست','browser','مرورگر'],
  'motion':['motion','animation','gsap','anime','انیمیشن'],
  'performance':['gpu','web vitals','fps','lcp','inp','cls','بهینه'],
  'agent':['arbitration','critic','review','agent','ایجنت','نقد']
}
STOP={'the','with','and','for','from','this','that','use','site','website','مهارت','برای','این','یه','باید','با','و','در','از'}

def tokens(s): return set(t for t in re.findall(r'[\w\-]+',str(s).lower(),re.UNICODE) if len(t)>1 and t not in STOP)
def features(task):
 t=task.lower()
 return {k for k,words in ALIASES.items() if any(w in t for w in words)}
def score(item,task,framework=''):
 q=tokens(task); f=features(task); title=item['name'].lower(); desc=item.get('description','').lower(); title_tokens=tokens(title); all_tokens=title_tokens|tokens(desc)
 hits=q & all_tokens
 val=7*len(hits & title_tokens)+2*len(hits-title_tokens)
 for category in f:
  if any(w in (title+' '+desc) for w in ALIASES[category]): val+=3
 if framework and framework.lower() in (title+' '+desc): val+=5
 # Intent-specific architecture should beat arbitrary example combinations.
 focus = {'3d':('scene-constraint','gpu-compat','3d','three','r3f'),
          'scroll':('cinematic-timeline','scroll','animation'),
          'responsive':('responsive','mobile-motion','container'),
          'motion':('cinematic-timeline','motion','anime'),
          'color':('design-tokens','color','brand'),
          'agent':('agent-arbitration','multiagent'),
          'testing':('cross-browser-ci','visual-benchmark','testing'),
          'performance':('production-telemetry','mobile-motion','gpu-compat')}
 for category in f:
  if any(term in title for term in focus[category]): val+=2
 # Prefer engine-level modules before narrow page/framework example skills.
 if title.startswith('ztu-') and len(f)>0:val+=7
 if not framework and ('ztfx-bs-' in title or 'ztfx-tw-' in title):val-=5
 if 'master' in title: val-=3 # avoid absorbing budget unless clearly requested
 # Penalize overly broad matches and favor task-specific runnable skills.
 val-=max(0,len(all_tokens)-45)*.05
 return round(val,3), sorted(hits)
def route(index,task,framework,top):
 ranked=[]; seen=set()
 for item in index['items']:
  name=item['name']; val,hits=score(item,task,framework)
  if val<=0 or name in seen:continue
  seen.add(name);ranked.append((val,name,item,hits))
 ranked.sort(key=lambda v:(-v[0],v[1]))
 return [{'name':x[1],'score':x[0],'path':x[2]['path'],'matching_terms':x[3]} for x in ranked[:top]]
def main():
 ap=argparse.ArgumentParser(); sub=ap.add_subparsers(dest='action',required=True)
 p=sub.add_parser('route');p.add_argument('--index',required=True);p.add_argument('--task',required=True);p.add_argument('--framework',default='');p.add_argument('--top',type=int,default=8);p.add_argument('--explain',action='store_true')
 p=sub.add_parser('build-index');p.add_argument('--zip',required=True);p.add_argument('--output',required=True)
 a=ap.parse_args()
 if a.action=='build-index':
  with zipfile.ZipFile(a.zip) as z:
   items=[]
   for n in z.namelist():
    if not n.endswith('/SKILL.md'):continue
    s=z.read(n).decode('utf-8','replace');m=re.search('^name: (.+)$',s,re.M);d=re.search('^description: (.+)$',s,re.M)
    items.append({'name':m.group(1).strip('" ') if m else Path(n).parent.name,'description':d.group(1).strip('" ') if d else '', 'path':n})
  Path(a.output).write_text(json.dumps({'schema':1,'skill_count':len(items),'items':items},ensure_ascii=False,indent=2),encoding='utf-8');print(len(items));return
 idx=json.loads(Path(a.index).read_text(encoding='utf-8'));print(json.dumps({'task':a.task,'features':sorted(features(a.task)),'candidates':route(idx,a.task,a.framework,max(1,min(a.top,30))),'considered':len(idx['items'])},ensure_ascii=False,indent=2))
if __name__=='__main__': main()
