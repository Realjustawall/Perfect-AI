"""Static red-flag scanner; not a security certification or a malware detector."""
from pathlib import Path
import sys,re,json
RULES={
 'pipe-remote-shell':r'(?:curl|wget)\s+[^\n]+\|\s*(?:sh|bash|powershell|iex)',
 'credential-references':r'(?:AWS_SECRET|OPENAI_API_KEY|\.ssh/id_rsa|\.aws/credentials|secrets\.json)',
 'destructive-shell':r'(?:rm\s+-rf|Remove-Item\s+[^\n]+-Recurse|format\s+[A-Z]:)',
 'disable-security':r'(?:Set-MpPreference\s+-DisableRealtimeMonitoring|--no-sandbox)',
}
def scan(text):return [{'id':k,'snippet':m.group(0)[:180]} for k,p in RULES.items() for m in re.finditer(p,text,re.I)]
if __name__=='__main__':
 if len(sys.argv)<2:print('Usage: python skill-trust-audit.py PATH-TO-SKILL.md');raise SystemExit(2)
 p=Path(sys.argv[1]);res={'source':str(p),'warnings':scan(p.read_text(encoding='utf-8',errors='replace')),'disclaimer':'Human review required; scanner flags patterns only.'};print(json.dumps(res,indent=2));raise SystemExit(1 if res['warnings'] else 0)
