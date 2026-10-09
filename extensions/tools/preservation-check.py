"""Verify original archive members are preserved byte-for-byte (payload) in enhanced ZIP."""
import argparse,zipfile,hashlib,json

def verify(old,new):
 with zipfile.ZipFile(old) as oz, zipfile.ZipFile(new) as nz:
  om={i.filename:i for i in oz.infolist() if not i.is_dir()}
  nm={i.filename:i for i in nz.infolist() if not i.is_dir()}
  missing=list(om.keys()-nm.keys()); changed=[]
  for path in sorted(om.keys()&nm.keys()):
   if om[path].file_size != nm[path].file_size or hashlib.sha256(oz.read(path)).digest() != hashlib.sha256(nz.read(path)).digest(): changed.append(path)
  return {'old_files':len(om),'new_files':len(nm),'added':len(nm.keys()-om.keys()),'missing':missing,'changed':changed,'zip_crc_old':oz.testzip(),'zip_crc_new':nz.testzip(),'pass':not missing and not changed}
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('base_zip');p.add_argument('new_zip');a=p.parse_args();r=verify(a.base_zip,a.new_zip);print(json.dumps(r,ensure_ascii=False,indent=2));raise SystemExit(0 if r['pass'] else 1)
