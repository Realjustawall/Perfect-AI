#!/usr/bin/env python3
"""Compare a retained old ZIP against an extended ZIP without writing to either."""
import zipfile,hashlib,argparse,json,sys
p=argparse.ArgumentParser();p.add_argument('--old',required=True);p.add_argument('--new',required=True);args=p.parse_args()
with zipfile.ZipFile(args.old) as old,zipfile.ZipFile(args.new) as new:
 old_names=set(old.namelist());new_names=set(new.namelist())
 missing=sorted(old_names-new_names)
 modified=sorted(f for f in old_names&new_names if hashlib.sha256(old.read(f)).digest()!=hashlib.sha256(new.read(f)).digest())
 result={'previous_files':len(old_names),'new_files':len(new_names),'added_files':len(new_names-old_names),'missing':missing,'modified':modified,'passed':not(missing or modified)}
 print(json.dumps(result,ensure_ascii=False,indent=2))
 sys.exit(0 if result['passed'] else 1)
