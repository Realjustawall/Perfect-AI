#!/usr/bin/env bash
# NO MCP. default prints planned commands; --execute is explicit opt-in.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT="${1:-.}"; MODE="${2:---dry-run}"
if [[ "$MODE" != "--execute" && "$MODE" != "--dry-run" ]]; then echo "Usage: $0 project [--execute|--dry-run]"; exit 2; fi
[[ -d "$PROJECT" ]] || { echo "Missing project: $PROJECT"; exit 2; }
python3 - "$ROOT/registry-index.json" "$PROJECT" "$MODE" <<'PY'
import json,sys,subprocess,pathlib
index=pathlib.Path(sys.argv[1]); proj=pathlib.Path(sys.argv[2]).resolve(); execute=sys.argv[3]=='--execute'
items=[slug for slugs in json.loads(index.read_text())['categories'].values() for slug in slugs]
print(f'VibeFarsi official CLI NO MCP: {len(items)} slugs in {proj}; execute={execute}. Back up first.')
commands=[['npx','--yes','vibefarsi@latest','init','--dry-run'], ['npx','--yes','vibefarsi@latest','init']]
for s in items: commands.extend((['npx','--yes','vibefarsi','add',s,'--dry-run'],['npx','--yes','vibefarsi','add',s]))
if not execute:
 for c in commands: print('[PLAN]',' '.join(c))
else:
 fails=[]
 for i,c in enumerate(commands):
  print('[RUN]',' '.join(c),flush=True)
  try: result=subprocess.run(c,cwd=proj,check=False)
  except OSError as e: print(e);result=None
  if result is None or result.returncode:
   if i<2: raise SystemExit('Init failed; stop to avoid incorrect project mutation')
   fails.append(c[4]);print('FAILED:',c[4]);
   # Do not attempt the real add if its dry run failed
   if c[-1]=='--dry-run': commands[i+1]=['true']
 (proj/'vibefarsi-install-failures.txt').write_text('\n'.join(fails))
 print('Failures:',len(fails))
PY
