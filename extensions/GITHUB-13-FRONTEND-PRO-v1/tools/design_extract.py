#!/usr/bin/env python3
"""Offline preliminary CSS token inventory. NEVER claimed to be a full CSS parser."""
import argparse,re,pathlib,html,json
EXT={'.css','.scss','.sass','.less'}
VAR=re.compile(r'(--[a-zA-Z0-9_-]+)\s*:\s*([^;{}]+)\s*;')
FONT=re.compile(r'font-family\s*:\s*([^;{}]+)\s*;')
SKIP={'node_modules','.git','dist','build','.next','coverage','vendor'}
def extract(project,max_files=2500):
 project=pathlib.Path(project).resolve()
 if not project.is_dir():raise ValueError('Expected project directory')
 matches=[];fonts=[];count=0
 for path in project.rglob('*'):
  if not path.is_file() or path.suffix.lower() not in EXT or set(path.relative_to(project).parts)&SKIP:continue
  if path.stat().st_size>2_000_000:continue
  count+=1
  if count>max_files:break
  content=path.read_text(encoding='utf-8',errors='replace')
  for m in VAR.finditer(content):
   matches.append({'name':m.group(1),'value':m.group(2).strip(),'file':str(path.relative_to(project)),'line':content.count('\n',0,m.start())+1})
  for m in FONT.finditer(content):
   fonts.append({'family':m.group(1).strip(),'file':str(path.relative_to(project)),'line':content.count('\n',0,m.start())+1})
 return {'project':str(project),'tokens':matches,'fonts':fonts,'files_scanned':min(count,max_files),'limits':['preliminary regex inventory','CSS selector scoping not resolved','JS config / computed styles not resolved']}
def render(data):
 a=['# DESIGN.md — extracted candidate tokens','', '**Status: unverified inventory (not approved brand identity).**','',f'Files scanned: {data["files_scanned"]}','', '| Token | Value | Source |','|---|---|---|']
 for x in data['tokens'][:400]:a.append(f'| `{x["name"]}` | `{x["value"].replace("|","\\|")}` | `{x["file"]}:{x["line"]}` |')
 a+=['','## Fonts (requires locale/license verification)','']
 for x in data['fonts'][:100]:a.append(f'- `{x["family"]}` — {x["file"]}:{x["line"]}')
 a+=['','## Required next step','Review cascade/theme scope and computed values in a browser; fill in actual brand brief; check RTL/LTR.']
 return '\n'.join(a)+'\n'
def main():
 p=argparse.ArgumentParser();p.add_argument('--project',required=True);p.add_argument('--output',required=True);p.add_argument('--json');ns=p.parse_args();data=extract(ns.project);pathlib.Path(ns.output).write_text(render(data),encoding='utf8');
 if ns.json:pathlib.Path(ns.json).write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf8')
 print(json.dumps({'files':data['files_scanned'],'tokens':len(data['tokens']),'fonts':len(data['fonts'])}))
if __name__=='__main__': main()
