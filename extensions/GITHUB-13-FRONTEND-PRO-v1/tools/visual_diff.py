#!/usr/bin/env python3
"""PNG diff evidence; requires pip install Pillow. No auto-approve baselines."""
import argparse,json,pathlib
from PIL import Image,ImageChops,ImageEnhance

def compare(before,after,heatmap,threshold=16):
 a=Image.open(before).convert('RGB');b=Image.open(after).convert('RGB')
 if a.size != b.size:
  return {'status':'failed','reason':'size_mismatch','before_size':list(a.size),'after_size':list(b.size)}
 d=ImageChops.difference(a,b);mask=d.convert('L').point(lambda x:255 if x>threshold else 0)
 count=mask.histogram()[255];total=a.width*a.height
 ImageEnhance.Contrast(d).enhance(4).save(heatmap)
 return {'status':'passed' if count==0 else 'differences_found','total_pixels':total,'changed_pixels':count,'changed_ratio':round(count/total,6),'threshold':threshold,'heatmap':str(heatmap)}
def main():
 p=argparse.ArgumentParser();p.add_argument('--before',required=True);p.add_argument('--after',required=True);p.add_argument('--heatmap',required=True);p.add_argument('--report',required=True);p.add_argument('--threshold',type=int,default=16);n=p.parse_args()
 data=compare(n.before,n.after,n.heatmap,n.threshold);pathlib.Path(n.report).write_text(json.dumps(data,indent=2),encoding='utf8');print(json.dumps(data))
if __name__=='__main__':main()
