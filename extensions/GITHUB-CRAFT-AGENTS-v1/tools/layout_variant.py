#!/usr/bin/env python3
"""Deterministically explores divergent designs without inventing test results."""
import argparse,random,json,pathlib
STYLES=[
 {'name':'editorial','grid':'asymmetric 12-column','type':'high-contrast display serif + neutral sans','motion':'restrained reveal','hero':'oversized left title, off-axis image'},
 {'name':'utilitarian','grid':'dense functional dashboard','type':'modular sans','motion':'instant state feedback','hero':'task-first split-screen'},
 {'name':'immersive','grid':'full bleed with floating annotation','type':'restrained grotesk','motion':'camera-driven scene','hero':'three-dimensional stage with independent semantic HTML'},
 {'name':'brutalist','grid':'intentional asymmetric borders','type':'heavy condensed display','motion':'snappy block transforms','hero':'high-contrast editorial text wall'},
 {'name':'soft','grid':'airy containers and rounded surfaces','type':'humanist sans','motion':'gentle fades','hero':'soft editorial card cluster'},
]
def variants(seed,n=3):
 rng=random.Random(seed);indexes=rng.sample(list(range(len(STYLES))),min(n,len(STYLES)))
 return [{'id':i+1,**STYLES[idx]} for i,idx in enumerate(indexes)]
def main():
 p=argparse.ArgumentParser();p.add_argument('--seed',type=int,default=42);p.add_argument('--count',type=int,default=3);p.add_argument('--out',required=True);a=p.parse_args();out=pathlib.Path(a.out)
 if out.exists():raise SystemExit('Destination exists, refusing overwrite')
 out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps({'seed':a.seed,'variants':variants(a.seed,a.count)},indent=2,ensure_ascii=False),encoding='utf8')
if __name__=='__main__':main()
