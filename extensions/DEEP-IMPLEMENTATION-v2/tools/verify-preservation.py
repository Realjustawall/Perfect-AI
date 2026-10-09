#!/usr/bin/env python3
"""Compares two ZIPs by path and decompressed byte SHA256. No modifications."""
import sys,json,zipfile,hashlib
from pathlib import Path

def hashes(z):
    return {i.filename:hashlib.sha256(z.read(i)).hexdigest() for i in z.infolist() if not i.is_dir()}

def main(a,b):
    with zipfile.ZipFile(a) as old,zipfile.ZipFile(b) as new:
        prior=hashes(old);latter=hashes(new);missing=sorted(set(prior)-set(latter));changed=sorted(k for k,h in prior.items() if k in latter and h!=latter[k]);added=sorted(set(latter)-set(prior));bad=new.testzip()
    report={'old':len(prior),'new_total':len(latter),'new_added':len(added),'missing':missing,'changed':changed,'zip_crc_bad':bad,'preserved':not(missing or changed or bad)}
    print(json.dumps(report,indent=2,ensure_ascii=False));return 0 if report['preserved'] else 1
if __name__=='__main__':
    if len(sys.argv)!=3:raise SystemExit('usage: python verify-preservation.py old.zip new.zip')
    raise SystemExit(main(Path(sys.argv[1]),Path(sys.argv[2])))
