#!/usr/bin/env python3
"""Platform-agnostic frame-time percentile budget policy; suggests, never enforces budgets."""
import argparse,json,statistics,pathlib,sys

def choose(samples,kind='mobile',min_dpr=.75,max_dpr=2.0):
    if not samples:raise ValueError('samples required')
    if any((not 0<x<1000) for x in samples):raise ValueError('invalid frame time')
    ordered=sorted(samples);p95=ordered[min(len(ordered)-1,int((len(ordered)-1)*.95))]
    target_ms=16.67 if kind=='desktop' else 24.0
    ratio=min(1.0,target_ms/max(p95,1))
    return {'p95_ms':round(p95,2),'suggested_dpr':round(max(min_dpr,min(max_dpr,1.7*ratio**.5)),2),
      'postprocessing':'full' if ratio>.9 else ('lite' if ratio>.7 else 'off'),
      'particle_fraction':round(max(.15,min(1.0,ratio)),2),
      'lod':'high' if ratio>.9 else ('medium' if ratio>.65 else 'low'),
      'recommendation':'Preserve core motion with cheaper representation; disable optional decorative layers first.',
      'disclaimer':'FPS targets are heuristics. Validate on target real hardware and battery/network profiles.'}
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--frames',required=True,help='JSON array or file path containing frame times in ms');p.add_argument('--device',choices=['mobile','desktop'],default='mobile');a=p.parse_args()
    s=pathlib.Path(a.frames);values=json.loads(s.read_text()) if s.is_file() else json.loads(a.frames)
    print(json.dumps(choose(values,a.device),indent=2))
