#!/usr/bin/env python3
"""Verify the current Perfect AI package (JustAWall), not obsolete historical checksums."""
import hashlib,json,sys,zipfile,pathlib

def check(z):
    root='Perfect-AI/'
    manifest=json.loads(z.read(root+'PERFECT-AI-CURRENT-SHA256.json'))
    found=set(z.namelist())
    expected=set(root+p for p in manifest['sha256']) | {root+p for p in manifest['excluded_from_hashes']}
    if found!=expected:
        raise ValueError(f'Unexpected file paths: missing={len(expected-found)}, extra={len(found-expected)}')
    for rel,digest in manifest['sha256'].items():
        if hashlib.sha256(z.read(root+rel)).hexdigest()!=digest:
            raise ValueError(f'Integrity mismatch: {rel}')
    print(f'PASS Perfect AI by JustAWall: {len(found)} files verified')

if __name__=='__main__':
    if len(sys.argv)!=2:raise SystemExit('Usage: python verify-perfect-ai.py <Perfect-AI.zip>')
    with zipfile.ZipFile(sys.argv[1]) as z:
        if z.testzip() is not None:raise SystemExit('ZIP CRC failure')
        check(z)
