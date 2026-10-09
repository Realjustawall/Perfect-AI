---
name: ztu-router
description: "Select the smallest relevant set of existing/new skills by goal, repository, capabilities, confidence, dependencies and conflicts."
---
# Intelligent Skill Router 3.0 — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Select the smallest relevant set of existing/new skills by goal, repository, capabilities, confidence, dependencies and conflicts.

## When to invoke
Every nontrivial Codex task in this large skill pack.

## Exact workflow
1. Run `python scripts/skill_router.py build-index --zip <original.zip> --output skill-index.json` once, or use the bundled index.
2. Inspect project package manifests, language and frameworks locally; no remote calls.
3. `python scripts/skill_router.py route --index skill-index.json --task "..." --top 8 --framework threejs --explain`.
4. Include only relevant SKILL.md, resolve declared `requires`, reject name conflicts, record why skipped.
5. Produce evidence and rerank after tests; do not greedily load thousands of files.

## Acceptance criteria
- Returns ranked candidates with score and reasons.
- No inaccessible or arbitrary path execution.
- Stable deterministic output and configurable cap.
- Persian and English task queries work.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/router-implementation.md`
- `../../examples/router/README.md`

## Official references
- https://playwright.dev/docs/test-projects
