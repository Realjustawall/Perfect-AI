#!/usr/bin/env python3
from pathlib import Path
import hashlib,re,json,sys
root=Path(__file__).resolve().parents[1];old=Path('/mnt/data/Perfect_AI_OMEGA_Codex_Skills')
skills=list((root/'skills').glob('*/SKILL.md'))
previous=list(old.glob('skills/*/SKILL.md')) if old.exists() else []
patterns=list((root/'patterns/implementation-atlas').glob('*/*.md'))
prior_patterns=list((root/'skills/perfect-ai-master/patterns/responsive').glob('*.md'))
references=list((root/'skills/perfect-ai-master/references/expert-atlas').glob('*.md'))
prior_refs=[p for p in (root/'skills/perfect-ai-master/references').glob('*.md') if p.name!='51-ultimate-color-design-reasoning.md']
old_specs=list((root/'skills/perfect-ai-master/registry/vibefarsi-items').rglob('*.md'))
git_guides=list((root/'skills').glob('ztg-*/SKILL.md'))
legacy=list((root/'legacy-archives').glob('*.zip'))
assert len(skills)==803,('skills',len(skills))
assert len(patterns)==576,('new patterns',len(patterns))
assert len(prior_patterns)==30,('old patterns',len(prior_patterns))
assert len(references)==144,('expert reference chapters',len(references))
assert len(prior_refs)==49,('old references',len(prior_refs))
assert len(old_specs)==279,('prior vibefarsi specs',len(old_specs))
assert len(git_guides)==40,('git integration guides',len(git_guides))
assert len(legacy)==6,('previous archives',len(legacy))
assert len(set(x.parent.name for x in skills))==len(skills)
for f in skills:
 data=f.read_text()
 assert data.startswith('---\n'),f
 assert f'\nname: {f.parent.name}\n' in data,f
 assert 'description:' in data,f
 assert len(data)>350,f
for f in patterns:
 s=f.read_text()
 for section in ('## Why and when','## Technique implementation','## Responsive + RTL acceptance matrix','## Definition of done'):
  assert section in s,(f,section)
 assert len(s)>2600,(f,len(s))
for f in references:assert f.stat().st_size>2000,f
old_master=old/'skills/perfect-ai-master/SKILL.md'
assert '## TITAN extension' in (root/'skills/perfect-ai-master/SKILL.md').read_text()
assert (root/'skills/perfect-ai-master/SKILL.md').read_text().startswith(old_master.read_text()) if old_master.exists() else True
if old.exists():
  originals=list(old.rglob('*'))
  originals=[x for x in originals if x.is_file()]
  missing=[];changed=[]
  for p in originals:
    q=root/p.relative_to(old)
    if not q.exists():missing.append(str(p))
    elif hashlib.sha256(p.read_bytes()).digest()!=hashlib.sha256(q.read_bytes()).digest():changed.append(str(q.relative_to(root)))
  assert not missing,missing
  assert set(changed)=={'README.md','skills/perfect-ai-master/SKILL.md'},changed
else:changed=['base comparison unavailable after archive extraction']
summary={'skills':len(skills),'new_patterns':len(patterns),'prior_patterns':len(prior_patterns),'total_patterns':len(patterns)+len(prior_patterns),'prior_expert_references':len(prior_refs),'new_expert_references':len(references)+1,'total_expert_references':len(prior_refs)+len(references)+1,'vibefarsi_specs':len(old_specs),'github_research_skills':len(git_guides),'legacy_zips':len(legacy),'preservation_changed_only':changed}
print('PASS — all TITAN archive structure and preservation checks')
print(json.dumps(summary,ensure_ascii=False,indent=2))
