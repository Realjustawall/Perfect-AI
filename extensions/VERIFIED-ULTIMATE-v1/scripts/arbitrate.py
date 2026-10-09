#!/usr/bin/env python3
"""Evidence-based arbiter: never acts on project files."""
import argparse,json,re,collections
from pathlib import Path
SEVERITY={'critical':4,'high':3,'medium':2,'low':1}
def norm(s):return re.sub(r'\s+',' ',str(s).lower()).strip()
def arbitrate(items):
 grouped=collections.defaultdict(list)
 for x in items:
  for field in ('role','component','issue','action','severity','evidence'): 
   if field not in x:raise ValueError('missing field '+field)
  if x['severity'] not in SEVERITY:raise ValueError('unknown severity')
  if not x['evidence'] or not isinstance(x['evidence'],list) or not all(isinstance(e,str) and e.strip() for e in x['evidence']):raise ValueError('evidence required')
  grouped[(norm(x['component']),norm(x['issue']))].append(x)
 issues=[]; conflicts=[]; accepted=[]
 for (component,issue), group in sorted(grouped.items()):
  actions=collections.defaultdict(list)
  for x in group:actions[norm(x['action'])].append(x['role'])
  maxsev=max(group,key=lambda x:SEVERITY[x['severity']])['severity']
  r={'component':component,'issue':issue,'severity':maxsev,'roles':sorted(set(x['role'] for x in group)),'evidence':sorted(set(e for x in group for e in x['evidence'])),'actions':list(actions),'status':'requires-review' if len(actions)>1 else 'supported-by-evidence'}
  issues.append(r)
  if len(actions)>1:conflicts.append(r)
  else:accepted.append(r)
 return {'issues':issues,'conflicts':conflicts,'supported':accepted,'automatic_edits_allowed':False,'next_step':'human/lead arbitration for conflicts before any edit'}
def main():
 p=argparse.ArgumentParser();p.add_argument('file');p.add_argument('--output');a=p.parse_args();x=json.loads(Path(a.file).read_text(encoding='utf-8'));o=arbitrate(x)
 s=json.dumps(o,ensure_ascii=False,indent=2)
 if a.output:Path(a.output).write_text(s,encoding='utf-8')
 else:print(s)
if __name__=='__main__':main()
