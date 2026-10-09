"""Compute basic reference vs rendered image mismatch; requires PIL for actual image inspection."""
import argparse,json
from PIL import Image,ImageChops,ImageStat

def compare(a,b):
 x,y=Image.open(a).convert('RGB'),Image.open(b).convert('RGB')
 if x.size!=y.size:return {'compatible':False,'reference':x.size,'rendered':y.size,'problem':'Match viewport dimensions before comparing'}
 diff=ImageChops.difference(x,y)
 stats=ImageStat.Stat(diff)
 return {'compatible':True,'width':x.width,'height':x.height,'mean_abs_channel_error':round(sum(stats.mean)/3,3), 'note':'Raw pixel metric is sensitive to font rendering and GPU; pair with semantic and human review.'}
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('reference');p.add_argument('rendered');a=p.parse_args();print(json.dumps(compare(a.reference,a.rendered),indent=2))
