#!/usr/bin/env python3
"""Review evidence report against mandatory quality contract; fail if 'not-run'."""
import argparse, json, sys, pathlib
DEFAULT=['build','component','browser','responsive','a11y','asset','performance','security']
def evaluate(report, required=DEFAULT):
 checks=report.get('checks') or {}; missing=[];failed=[];unverified=[]
 for key in required:
  item=checks.get(key,{})
  if not item: missing.append(key);continue
  status=item.get('status')
  if status=='fail':failed.append(key)
  elif status!='pass':unverified.append(key)
  elif not item.get('evidence'):unverified.append(key)
 return {'status':'pass' if not(missing or failed or unverified) else 'fail','missing':missing,'failed':failed,'unverified':unverified,'checked':len(required)}
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--report',required=True);ap.add_argument('--required',nargs='*',default=DEFAULT);a=ap.parse_args()
 report=json.loads(pathlib.Path(a.report).read_text(encoding='utf-8'))
 output=evaluate(report,a.required);print(json.dumps(output,ensure_ascii=False,indent=2));sys.exit(0 if output['status']=='pass' else 1)
