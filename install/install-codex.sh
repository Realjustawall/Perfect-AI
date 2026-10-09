#!/usr/bin/env bash
set -euo pipefail
project="${1:-$PWD}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
target="$project/.agents/skills"
[[ -d "$project" ]] || { echo "Missing project directory: $project" >&2; exit 1; }
mkdir -p "$target"
shopt -s nullglob
for path in "$root"/skills/*/; do
  [[ -f "$path/SKILL.md" ]] || continue
  name="$(basename "$path")"
  if [[ -e "$target/$name" ]]; then echo "SKIP existing: $name"; continue; fi
  cp -R "$path" "$target/$name"
  echo "INSTALLED: $name"
done
printf 'Restart Codex, then invoke $perfect-ai-master.\n'
