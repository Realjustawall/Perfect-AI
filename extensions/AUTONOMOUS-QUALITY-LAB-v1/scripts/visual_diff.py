#!/usr/bin/env python3
"""Calculate transparent pixel-diff statistics. Never assume that one score equals quality."""
from PIL import Image, ImageChops, ImageStat
import json,argparse,pathlib,sys

def compare(before,after,pixel_threshold=18):
    aa=Image.open(before).convert('RGB');bb=Image.open(after).convert('RGB')
    if aa.size!=bb.size:
        return {'status':'incomparable','reason':'Different viewport image dimensions','baseline_size':aa.size,'candidate_size':bb.size}
    import numpy as np
    a=np.asarray(aa,dtype=np.int16);b=np.asarray(bb,dtype=np.int16)
    d=np.abs(a-b);changed=(d.max(axis=2)>=pixel_threshold)
    return {'status':'ok','width':aa.width,'height':aa.height,'changed_pct':round(float(changed.mean()*100),3),
      'mean_abs_rgb_error':round(float(d.mean()),3),'max_channel_error':int(d.max()),
      'threshold':pixel_threshold,'note':'A large visual difference may be intentional; screenshots need human or brand-rule review.'}

def main():
    p=argparse.ArgumentParser();p.add_argument('before');p.add_argument('after');p.add_argument('--threshold',type=int,default=18);p.add_argument('--json');a=p.parse_args()
    r=compare(a.before,a.after,a.threshold)
    s=json.dumps(r,indent=2);print(s)
    if a.json:pathlib.Path(a.json).write_text(s+'\n',encoding='utf-8')
    return 0 if r['status']=='ok' else 2
if __name__=='__main__':sys.exit(main())
