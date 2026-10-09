#!/usr/bin/env python3
"""Read-only heuristic static scan with exact file paths; not replacement for ESLint/TypeScript."""
import argparse,json,pathlib,re,sys
PATTERNS={
 'unscoped-scroll-event':re.compile(r'addEventListener\s*\(\s*[\'\"]scroll[\'\"]'),
 'possible-text-wipe':re.compile(r'innerHTML\s*='),
 'uncontrolled-loop':re.compile(r'setInterval\s*\('),
 'non-semantic-button':re.compile(r'<div[^>]*onClick=',re.I),
 'new-renderer-per-frame':re.compile(r'requestAnimationFrame[\s\S]{0,180}new\s+THREE\.WebGLRenderer',re.I)
}
def scan(root):
    root=pathlib.Path(root).resolve();issues=[]
    for ext in ('*.js','*.ts','*.tsx','*.jsx','*.html'):
        for file in root.rglob(ext):
            if any(s in file.parts for s in ('node_modules','.git','dist','.next','build')):continue
            try:t=file.read_text('utf-8')
            except (UnicodeError,OSError):continue
            if t.count('\n')>900:issues.append({'file':str(file.relative_to(root)),'line':1,'rule':'large-file','severity':'advisory','message':'Review split by responsibility'})
            for code,pattern in PATTERNS.items():
                for m in list(pattern.finditer(t))[:8]:
                    issues.append({'file':str(file.relative_to(root)),'line':t.count('\n',0,m.start())+1,'rule':code,'severity':'advisory','message':'Inspect context; regex is not proof of defect'})
    return {'status':'advisory','findings':issues,'disclaimer':'Regex matches require human or AST-aware review; no automatic edits.'}
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('root');p.add_argument('--out');a=p.parse_args();r=scan(a.root);txt=json.dumps(r,ensure_ascii=False,indent=2)
    if a.out:pathlib.Path(a.out).write_text(txt+'\n',encoding='utf-8')
    print(txt)
