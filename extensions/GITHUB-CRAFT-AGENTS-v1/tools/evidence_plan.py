#!/usr/bin/env python3
"""Turns structured evidence into SAFE new, read-only implementation handoff plans."""
import json,argparse,pathlib,re
REQUIRED=['title','evidence','impact','acceptance']
def slug(s):return re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')[:60] or 'issue'
def make_plans(entries,out):
 o=pathlib.Path(out);o.mkdir(parents=True,exist_ok=True);made=[]
 for i,e in enumerate(entries,1):
  missing=[k for k in REQUIRED if not isinstance(e.get(k),str) or not e[k].strip()]
  if missing:raise ValueError('Missing required fields '+str(missing))
  fname=f'{i:02d}-{slug(e["title"])}.md';p=o/fname
  if p.exists():raise FileExistsError(str(p))
  content=f'# {e["title"]}\n\n## Evidence\n{e["evidence"]}\n\n## User impact\n{e["impact"]}\n\n## Acceptance\n{e["acceptance"]}\n\n## Risk and tests\n{e.get("tests","Add independent unit, browser and regression checks; rollback if failed.")}\n\n**ADVISORY ONLY — this file does not authorize edits to source code.**\n'
  p.write_text(content,encoding='utf8');made.append(str(p))
 return made
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--input',required=True);p.add_argument('--output',required=True);a=p.parse_args();doc=json.loads(pathlib.Path(a.input).read_text(encoding='utf8'))
 if not isinstance(doc,list):raise SystemExit('Expected JSON array of findings')
 print(json.dumps(make_plans(doc,a.output),indent=2))
