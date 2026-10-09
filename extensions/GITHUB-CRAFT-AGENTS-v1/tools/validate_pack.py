#!/usr/bin/env python3
"""Validate new extension's skill front matter, names and provenance; offline."""
import argparse,pathlib,re,json,sys
PAT=re.compile(r'^name:\s*([a-z0-9-]+)\s*$',re.M)
def validate(root):
 root=pathlib.Path(root);issues=[];names={};found=list(root.glob('skills/*/SKILL.md'))
 for p in found:
  s=p.read_text(encoding='utf8');match=PAT.search(s)
  if not s.startswith('---\n') or not match:issues.append(f'{p}: missing frontmatter/name');continue
  name=match.group(1)
  if name!=p.parent.name:issues.append(f'{p}: frontmatter name {name} does not match directory')
  if name in names:issues.append(f'Duplicate name {name}: {p}, {names[name]}')
  names[name]=str(p)
  if not re.search(r'^description:\s*.+',s,re.M):issues.append(f'{p}: missing description')
  if len(s)<1100:issues.append(f'{p}: suspiciously short ({len(s)} chars)')
 main=json.loads((root/'SOURCE-MANIFEST.json').read_text(encoding='utf8'))
 for x in main['sources']:
  if x['main'] not in names:issues.append('Missing primary '+x['main'])
 # Distinct roles: nine main + 27 specialized + master.
 if len(found)!=37:issues.append(f'Expected 37 skill files, found {len(found)}')
 return {'skills':len(found),'issues':issues,'passed':not issues}
if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('--root',default='.');v=a.parse_args();r=validate(v.root);print(json.dumps(r,indent=2));sys.exit(0 if r['passed'] else 1)
