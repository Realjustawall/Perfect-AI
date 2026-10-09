#!/usr/bin/env python3
"""Perfect AI rebrand release integrity verification — by JustAWall."""
import hashlib, json, pathlib, sys
root = pathlib.Path(__file__).resolve().parents[1]
manifest=json.loads((root/'PERFECT-AI-CURRENT-SHA256.json').read_text(encoding='utf-8'))
expected=manifest['sha256']; errors=[]
for relative,digest in expected.items():
    p=root/relative
    if not p.is_file():errors.append('MISSING '+relative);continue
    actual=hashlib.sha256(p.read_bytes()).hexdigest()
    if actual!=digest:errors.append('CHANGED '+relative)
actual_set={p.relative_to(root).as_posix() for p in root.rglob('*') if p.is_file()}
expected_set=set(expected)|set(manifest['excluded_from_hashes'])
extra=sorted(actual_set-expected_set)
for x in extra:errors.append('UNEXPECTED '+x)
for e in errors[:40]:print(e)
print(f'Perfect AI (JustAWall): validated {len(expected)} payload files, {len(errors)} errors')
sys.exit(bool(errors))
