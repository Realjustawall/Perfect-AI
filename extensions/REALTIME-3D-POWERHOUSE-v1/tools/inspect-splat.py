#!/usr/bin/env python3
"""Analyze known 32-byte record .splat format without loading into GPU."""
import argparse,json,pathlib,hashlib

def inspect(path):
    p=pathlib.Path(path)
    if p.suffix.lower()!='.splat':raise ValueError('Only .splat legacy 32-byte record format is supported')
    size=p.stat().st_size
    if size<32 or size%32:raise ValueError('Record count invalid (bytes not multiple of 32)')
    h=hashlib.sha256()
    with p.open('rb') as f:
        for chunk in iter(lambda:f.read(1024*1024),b''):h.update(chunk)
    return {'path':str(p),'bytes':size,'splats':size//32,'sha256':h.hexdigest(),'format':'legacy .splat', 'note':'Structural size test only; cannot prove positions/opacity valid'}
if __name__=='__main__':
    a=argparse.ArgumentParser();a.add_argument('file');args=a.parse_args()
    try:print(json.dumps(inspect(args.file),indent=2))
    except Exception as e:a.exit(2,f'ERROR: {e}\n')
