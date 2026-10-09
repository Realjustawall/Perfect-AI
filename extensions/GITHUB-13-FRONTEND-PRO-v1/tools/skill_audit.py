#!/usr/bin/env python3
import pathlib,sys,re,json
root=pathlib.Path(__file__).resolve().parents[1]
files=sorted((root/'skills').glob('*/SKILL.md'));issues=[];names=set()
for f in files:
 text=f.read_text(encoding='utf8');first=text.split('---',2)
 if len(first)<3 or not text.startswith('---'):issues.append(f'{f}: missing YAML frontmatter');continue
 m=re.search(r'^name:\s*(\S+)',first[1],re.M)
 if not m:issues.append(f'{f}: missing name');continue
 name=m.group(1)
 if name in names:issues.append(f'{f}: duplicate name')
 if name!=f.parent.name:issues.append(f'{f}: path/name mismatch')
 if 'description:' not in first[1]:issues.append(f'{f}: missing description')
 names.add(name)
print(json.dumps({'skill_count':len(files),'unique_names':len(names),'issues':issues},indent=2))
sys.exit(1 if issues else 0)
