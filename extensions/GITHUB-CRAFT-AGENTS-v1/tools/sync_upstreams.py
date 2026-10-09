#!/usr/bin/env python3
"""OPTIONAL licensed-GitHub skill staging, NEVER auto writes existing files.

Requires explicit --execute. No MCP, no git clone, no code execution, no hidden hooks.
"""
import argparse,json,pathlib,hashlib,os,urllib.request,urllib.parse,sys,time
ALLOWED={
 'impeccable':('pbakaus/impeccable','.agents/skills/impeccable','LICENSE',['NOTICE.md']),
 'emil':('emilkowalski/skills','skills','LICENSE',[]),
 'taste':('Leonxlnx/taste-skill','skills','LICENSE',[]),
 'shadcn':('shadcn-ui/ui','skills/shadcn','LICENSE.md',[]),
 'browser':('vercel-labs/agent-browser','skills/agent-browser','LICENSE',[]),
 'improve':('shadcn/improve','skills/improve','LICENSE.md',[]),
}
BLOCKED={'doctor':'Modified-MIT license has AI-related restrictions; vendor only after separate legal review', 'remotion':'No clear root license found for remotion-dev/skills; do not vendor without permission'}
MAX_SINGLE=280000;MAX_FILES=500;MAX_TOTAL=12000000

def request(url):
 req=urllib.request.Request(url,headers={'User-Agent':'PerfectAI-Source-Stager/1.0','Accept':'application/vnd.github+json',**({'Authorization':'Bearer '+os.environ['GITHUB_TOKEN']} if os.environ.get('GITHUB_TOKEN') else {})})
 with urllib.request.urlopen(req,timeout=22) as resp:return resp.read()
def safe_path(s):
 parts=pathlib.PurePosixPath(s).parts
 return bool(parts) and '..' not in parts and not s.startswith('/') and '\\' not in s

def plan(repo_name):
 if repo_name in BLOCKED:return {'repo':repo_name,'blocked':BLOCKED[repo_name]}
 r,p,lic,notices=ALLOWED[repo_name]
 return {'repo':repo_name,'source':f'https://github.com/{r}/tree/HEAD/{p}','source_dir':p,'license':lic,'license_extra':notices,'requires_internet':True,'execute_required':True}

def stage(repo_name,dest):
 repo,prefix,license_file,notices=ALLOWED[repo_name]
 base=pathlib.Path(dest).resolve();name=repo_name+'-official-source'
 target=base/name
 if target.exists():raise FileExistsError(f'Destination exists (never overwrite): {target}')
 # One nested destination per vendor to avoid modifying previous files.
 info=json.loads(request(f'https://api.github.com/repos/{repo}'))
 branch=info['default_branch'];commit=json.loads(request(f'https://api.github.com/repos/{repo}/git/ref/heads/{urllib.parse.quote(branch)}'))['object']['sha']
 tree=json.loads(request(f'https://api.github.com/repos/{repo}/git/trees/{commit}?recursive=1'))
 if tree.get('truncated'):raise ValueError('Repository tree was truncated; fail closed')
 allfiles=[x for x in tree['tree'] if x['type']=='blob' and (x['path'].startswith(prefix+'/') or x['path'] in [license_file,*notices])]
 allfiles=[x for x in allfiles if x['path'].lower().endswith(('.md','.txt','.json','.yaml','.yml','.js','.mjs','.cjs','.ts','.tsx','.sh','.cmd','.ps1','.css','.svg','.png'))]
 if len(allfiles)>MAX_FILES:raise ValueError('Source subtree too large; stage manually from upstream installer')
 if sum(x.get('size',0) for x in allfiles)>MAX_TOTAL:raise ValueError('Aggregate source too large')
 data=[]
 for x in allfiles:
  path=x['path'];sz=x.get('size',0)
  if not safe_path(path) or sz>MAX_SINGLE:raise ValueError('Unsafe path or oversized file '+path)
  # Source files are fetched but not executed, even if script extensions.
  url=f'https://raw.githubusercontent.com/{repo}/{commit}/{urllib.parse.quote(path,safe="/")}'
  content=request(url)
  if len(content)>MAX_SINGLE:raise ValueError('Content too large '+path)
  data.append((path,content))
 # Safety: only start writing after ALL requests & validations succeeded.
 target.mkdir(parents=True,exist_ok=False)
 manifest={'repository':repo,'commit':commit,'files':[],'warning':'Official upstream source staged, not executed or auto-installed; review license and trust before use.'}
 for path,blob in data:
  out=target/path;out.parent.mkdir(parents=True,exist_ok=True)
  out.write_bytes(blob)
  manifest['files'].append({'path':path,'sha256':hashlib.sha256(blob).hexdigest(),'bytes':len(blob)})
 (target/'SOURCE-PROVENANCE.json').write_text(json.dumps(manifest,indent=2),encoding='utf8')
 return {'staged':len(data),'destination':str(target),'commit':commit}

def main():
 ap=argparse.ArgumentParser();ap.add_argument('--repo',required=True,choices=sorted(ALLOWED|BLOCKED));ap.add_argument('--dest',default='.perfect-ai-external-sources');ap.add_argument('--execute',action='store_true');args=ap.parse_args()
 p=plan(args.repo)
 if p.get('blocked'):
  print(json.dumps(p,indent=2));sys.exit(2)
 if not args.execute:p['status']='DRY_RUN_NO_DOWNLOAD';print(json.dumps(p,indent=2));return
 print(json.dumps(stage(args.repo,args.dest),indent=2))
if __name__=='__main__':main()
