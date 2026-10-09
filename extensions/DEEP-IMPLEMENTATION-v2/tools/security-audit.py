"""Heuristic only. Flag suspicious instructions; human review required; no execution."""
from pathlib import Path
import re,json,sys
RULES={
 'remote shell':r'(?:curl|wget)\s+[^\n]+\|\s*(?:bash|sh|powershell)',
 'destructive filesystem':r'(?:rm\s+-rf\s+/|Remove-Item[^\n]+-Recurse[^\n]+-Force)',
 'credential access':r'(?:\.ssh[/\\]|\.aws[/\\]|\.env\b|id_rsa)',
 'instructions injection':r'ignore\s+(?:all\s+)?(?:previous|above|system)\s+instructions',
 'suspicious eval':r'(?:eval\(|new\s+Function\(|child_process\.exec\()',
}
def audit(root):
 results=[]
 for p in sorted(Path(root).rglob('*')):
  if not p.is_file() or p.suffix.lower() not in ('.md','.js','.ts','.json','.py','.ps1','.mjs','.txt'):continue
  if p.stat().st_size>2_000_000:continue
  s=p.read_text(encoding='utf8',errors='replace')
  for typ,pat in RULES.items():
   for m in list(re.finditer(pat,s,re.I))[:8]:results.append({'file':str(p),'finding':typ,'offset':m.start(),'severity':'review','proof':m.group(0)[:110]})
 return results
if __name__=='__main__':
 if len(sys.argv)<2:raise SystemExit('usage: python security-audit.py path')
 report=audit(sys.argv[1]);print(json.dumps({'findings':report,'summary':'Heuristic findings are not confirmed exploits.'},ensure_ascii=False,indent=2));raise SystemExit(0)
