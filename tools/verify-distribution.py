#!/usr/bin/env python3
"""Verify the published Perfect AI snapshot and its unchanged source ZIP."""
from pathlib import Path
import hashlib, io, json, sys, zipfile

ROOT = Path(__file__).resolve().parents[1]

def main():
    manifest = json.loads((ROOT / 'distribution-manifest.json').read_text(encoding='utf-8'))
    errors = []
    for name, expected in manifest['files_sha256'].items():
        p = ROOT / name
        if not p.is_file():
            errors.append('MISSING ' + name)
        elif hashlib.sha256(p.read_bytes()).hexdigest() != expected:
            errors.append('CHANGED ' + name)
    skill_paths = sorted(str(p.relative_to(ROOT)).replace('\\', '/') for p in ROOT.rglob('SKILL.md') if '.git' not in p.parts)
    ids = {Path(p).parent.name for p in skill_paths}
    if len(skill_paths) != manifest['skills']['total'] or len(ids) != manifest['skills']['unique_ids']:
        errors.append('Skill inventory mismatch')
    chunks = []
    for part in manifest['archive']['parts']:
        p = ROOT / part['path']
        if not p.is_file():
            errors.append('MISSING archive part ' + part['path'])
            continue
        data = p.read_bytes()
        if len(data) != part['size'] or hashlib.sha256(data).hexdigest() != part['sha256']:
            errors.append('Invalid archive part ' + part['path'])
        chunks.append(data)
    archive = b''.join(chunks)
    if len(archive) != manifest['archive']['bytes'] or hashlib.sha256(archive).hexdigest() != manifest['archive']['sha256']:
        errors.append('Original ZIP size/hash mismatch')
    else:
        with zipfile.ZipFile(io.BytesIO(archive)) as z:
            if z.testzip() is not None:
                errors.append('ZIP CRC mismatch')
            files = [i for i in z.infolist() if not i.is_dir()]
            if len(files) != manifest['archive']['files']:
                errors.append('ZIP file count mismatch')
            # Compare every archived payload to the published source; custom entry-point docs are preserved separately.
            remap = {'README.md': 'docs/archive/README.uploaded.md', 'README-FA.md': 'docs/archive/README-FA.uploaded.md'}
            for entry in files:
                name = entry.filename.removeprefix('Perfect-AI-main/')
                path = ROOT / remap.get(name, name)
                if not path.is_file() or hashlib.sha256(path.read_bytes()).digest() != hashlib.sha256(z.read(entry)).digest():
                    errors.append('Uploaded payload mismatch ' + name)
    for error in errors[:30]:
        print(error)
    print(f'Perfect AI: {len(manifest["files_sha256"])} repository files, {len(skill_paths)} skills, exact source ZIP checked; {len(errors)} errors')
    return bool(errors)

if __name__ == '__main__':
    sys.exit(main())
