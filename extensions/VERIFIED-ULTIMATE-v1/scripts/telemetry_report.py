#!/usr/bin/env python3
"""Analyze privacy-minimized Web Vitals events with cohort sample-size safeguards."""
import argparse,json,math,statistics,collections
from pathlib import Path
METRICS={'LCP':2500,'INP':200,'CLS':0.1};MIN_SAMPLES=30

def quantile(values,q=.75):
 v=sorted(values)
 if not v:return None
 i=(len(v)-1)*q; low=math.floor(i);high=math.ceil(i)
 return round(v[low]+(v[high]-v[low])*(i-low),4)
def report(rows):
 bins=collections.defaultdict(list)
 for v in rows:
  if v.get('metric') not in METRICS or not isinstance(v.get('value'),(int,float)) or not math.isfinite(v['value']) or v['value']<0:continue
  release=str(v.get('release','unknown'))[:64];site=str(v.get('route','generic'))[:64];tier=str(v.get('tier','unknown'))[:32]
  bins[(release,site,tier,v['metric'])].append(v['value'])
 out=[]
 for (release,route,tier,metric),values in sorted(bins.items()):
  count=len(values);p75=quantile(values)
  out.append({'release':release,'route':route,'tier':tier,'metric':metric,'n':count,'p75':p75,'budget':METRICS[metric],'status':('insufficient-samples' if count<MIN_SAMPLES else 'within-budget' if p75<=METRICS[metric] else 'over-budget')})
 return {'minimum_cohort_samples':MIN_SAMPLES,'cohorts':out,'warning':'Synthetic data is not production telemetry; interpret only actual consented RUM for release decisions.'}
def main():
 p=argparse.ArgumentParser();p.add_argument('file');p.add_argument('--output');a=p.parse_args()
 rows=[json.loads(line) for line in Path(a.file).read_text(encoding='utf-8').splitlines() if line.strip()]
 result=json.dumps(report(rows),ensure_ascii=False,indent=2)
 if a.output:Path(a.output).write_text(result,encoding='utf-8')
 else:print(result)
if __name__=='__main__':main()
