#!/usr/bin/env python3
"""Recompute checksums for the original ZIP entries in the augmented archive."""
import sys,json,zipfile,hashlib,pathlib

def verify(archive):
    with zipfile.ZipFile(archive) as z:
        manifest=json.loads(z.read(next(x for x in z.namelist() if x.endswith('POWERHOUSE-PRESERVATION.json'))))
        missing=[];changed=[]
        for name,sha in manifest['previous_entry_sha256'].items():
            try:data=z.read(name)
            except KeyError:missing.append(name);continue
            if hashlib.sha256(data).hexdigest()!=sha:changed.append(name)
        return {'files_checked':len(manifest['previous_entry_sha256']),'missing':missing,'changed':changed,'pass':not missing and not changed,'crc_pass':z.testzip() is None}
if __name__=='__main__':
    r=verify(pathlib.Path(sys.argv[1]));print(json.dumps(r,indent=2));sys.exit(0 if r['pass'] and r['crc_pass'] else 2)
