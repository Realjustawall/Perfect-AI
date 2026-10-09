from pathlib import Path
from collections import Counter
import json,re,sys
root=Path(__file__).resolve().parents[1]
errors=[]
registry=json.loads((root/'registry-index.json').read_text(encoding='utf-8'))
counts={'components':78,'blocks':23,'charts':15,'animations':63,'backgrounds':44,'templates':30,'sites':6,'design-systems':6,'skills':14}
for group, expected in counts.items():
 values=registry['categories'].get(group,[])
 if len(values)!=expected: errors.append(f'{group}: expected {expected}, got {len(values)}')
 if len(set(values))!=len(values): errors.append(f'{group}: duplicates')
if sum(map(len,registry['categories'].values()))!=279: errors.append('total catalog count not 279')
allskills=list((root/'skills').glob('*/SKILL.md'))
expected=json.loads((root/'omega-manifest.json').read_text(encoding='utf-8'))['local_skills']
if len(allskills)!=expected: errors.append(f'expected {expected} skills, got {len(allskills)}')
for f in allskills:
 text=f.read_text(encoding='utf-8')
 if not text.startswith('---\n'): errors.append(f'{f}: missing YAML frontmatter')
 if not re.search(r'^name: [a-z0-9][a-z0-9-]+$',text,re.M): errors.append(f'{f}: invalid name')
 if not re.search(r'^description: .{30,}',text,re.M): errors.append(f'{f}: missing description')
 if re.search(r'^name: ([^\n]+)',text,re.M).group(1)!=f.parent.name: errors.append(f'{f}: dirname mismatch')
master=(root/'skills/perfect-ai-master/SKILL.md').read_text(encoding='utf-8')
for ref in re.findall(r'`(references/[^`]+\.md)`',master):
 if not (root/'skills/perfect-ai-master'/ref).exists(): errors.append(f'missing {ref}')
cat=(root/'skills/perfect-ai-master/references/07-vibefarsi-full-catalog.md').read_text(encoding='utf-8')
for slugs in registry['categories'].values():
 for slug in slugs:
  if f'`{slug}`' not in cat: errors.append(f'catalog missing: {slug}')
print('validated skills:',len(allskills))
print('catalog counts:', {k:len(v) for k,v in registry['categories'].items()})
print('catalog total:',sum(map(len,registry['categories'].values())))
print('reference docs:',len(list((root/'skills/perfect-ai-master/references').glob('*.md'))))


# Extended checks
from urllib.parse import quote
for cat,slugs in registry['categories'].items():
 for slug in slugs:
  if not (root/'registry/vibefarsi-items'/cat/(slug+'.md')).exists(): errors.append(f'missing per-item card: {cat}/{slug}')
for name in ('16-animejs-api-matrix.md','17-threejs-production-guide.md','18-color-decision-engine.md','19-design-matrix.md','20-test-matrix.md','21-vibefarsi-implementation.md'):
 if not (root/'skills/perfect-ai-master/references'/name).exists(): errors.append('missing extra reference: '+name)
print('implementation cards:',len(list((root/'registry/vibefarsi-items').glob('*/*.md'))))
print('GitHub curated sources:',len(json.loads((root/'github-skills-catalog.json').read_text(encoding='utf-8'))))
print('errors:',len(errors))
for e in errors: print('ERROR:',e)
sys.exit(1 if errors else 0)
