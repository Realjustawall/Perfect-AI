"""Deterministic image difference for screenshots at identical size/time/scale."""
import sys,json
from PIL import Image,ImageChops,ImageStat

def diff(a,b,out=None):
    x=Image.open(a).convert('RGB');y=Image.open(b).convert('RGB')
    if x.size!=y.size:raise ValueError('Screenshots must have identical dimensions; do not rescale to hide errors')
    z=ImageChops.difference(x,y);pix=ImageStat.Stat(z)
    mad=sum(pix.mean)/3/255
    if out:z.save(out)
    return {'width':x.width,'height':x.height,'mean_absolute_difference':round(mad,6),'identical':z.getbbox() is None}
if __name__=='__main__':print(json.dumps(diff(*sys.argv[1:4]),indent=2))
