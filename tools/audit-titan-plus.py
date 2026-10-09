from pathlib import Path
import json,hashlib,sys,zipfile,re
root=Path(__file__).resolve().parents[1]
old=Path('/mnt/data/Perfect_AI_TITAN_Codex_Skills')
new_skills=list(root.glob('skills/ztf-*/SKILL.md'))+list(root.glob('skills/ztfx-*/SKILL.md'))
orig_skills=list(root.glob('skills/ztp-*/SKILL.md'))
pat=list(root.glob('frameworks/patterns/*/*/*.md'))
ref=list(root.glob('frameworks/references/*/*.md'))+list(root.glob('frameworks/handbooks/*.md'))
assert len(pat)>=500,(len(pat),'missing patterns')
assert len(ref)>=100,(len(ref),'missing refs')
assert len(new_skills)>=500,(len(new_skills),'missing skills')
all_skills=list(root.glob('skills/*/SKILL.md'))
assert len(all_skills)>=1300,len(all_skills)
assert len(set(p.parent.name for p in all_skills))==len(all_skills)
for x in all_skills:
 data=x.read_text(encoding='utf-8')
 assert data.startswith('---\n') and f'\nname: {x.parent.name}\n' in data and '\ndescription:' in data, x
 if x in new_skills:assert len(data)>700,(x,len(data))
missing=[];changed=[]
if old.exists():
 for p in old.rglob('*'):
  if not p.is_file():continue
  q=root/p.relative_to(old)
  if not q.exists():missing.append(str(p.relative_to(old)))
  elif hashlib.sha256(p.read_bytes()).digest()!=hashlib.sha256(q.read_bytes()).digest():changed.append(str(p.relative_to(old)))
 assert not missing and not changed,(missing[:6],changed[:6])
summary={'all_skills':len(all_skills),'new_skills':len(new_skills),'new_patterns':len(pat),'new_references':len(ref),'old_file_missing':len(missing),'old_file_modified':len(changed),'old_preservation_checked':old.exists()}
print('PASS',json.dumps(summary,ensure_ascii=False))
