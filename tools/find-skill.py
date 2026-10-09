#!/usr/bin/env python3
import json,sys,pathlib
root=pathlib.Path(__file__).resolve().parents[1]
query=' '.join(sys.argv[1:]).casefold()
if not query: print('Usage: python tools/find-skill.py <words>');sys.exit(2)
a=json.loads((root/'patterns/implementation-atlas-index.json').read_text())
queries=query.split()
found=[r for r in a if all(k in (' '.join(str(v) for v in r.values())).lower() for k in queries)]
for r in found[:35]:print(f'${r["id"]} | {r["title"]} | {r["pattern"]}')
print(f'Found {len(found)} matches (showing first {min(35,len(found))})')
