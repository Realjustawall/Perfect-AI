#!/usr/bin/env python3
"""Compare original and additive ZIP members by SHA256; all prior paths and bytes must match."""
import argparse,hashlib,json,zipfile
p=argparse.ArgumentParser();p.add_argument('original');p.add_argument('updated');a=p.parse_args()
with zipfile.ZipFile(a.original) as old,zipfile.ZipFile(a.updated) as new:
 old_members={name:hashlib.sha256(old.read(name)).hexdigest() for name in old.namelist() if not name.endswith('/')}
 new_names=set(new.namelist());missing=sorted(set(old_members)-new_names)
 changed=[n for n,h in old_members.items() if n in new_names and hashlib.sha256(new.read(n)).hexdigest()!=h]
 extras=len([n for n in new.namelist() if n not in old_members and not n.endswith('/')])
 result={'previous_files':len(old_members),'missing':missing,'changed':changed,'new_files':extras,'zip_crc_ok':new.testzip() is None}
 print(json.dumps(result,ensure_ascii=False,indent=2))
 raise SystemExit(0 if not missing and not changed and result['zip_crc_ok'] else 1)
