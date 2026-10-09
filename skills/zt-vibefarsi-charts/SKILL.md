---
name: zt-vibefarsi-charts
description: VibeFarsi chart system: production-level RTL, Persian digits, meaningful alt tables. Use when implementing, reviewing or testing vibefarsi chart system for React, Vite, Next.js or Perfect_AI projects.
---

# VibeFarsi chart system

## When to activate
Use on tasks involving **RTL, Persian digits, meaningful alt tables**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Look up exact slug in registry-index.json and per-item implementation specs.
2. Dry-run `npx vibefarsi add <slug> --dry-run` in a compatible React + Tailwind v4 project.
3. Install chosen official component through CLI after verifying file diffs and dependencies; no MCP.
4. Adapt semantic tokens, Persian text, RTL logical properties and animations without double ownership.
5. Test mobile/keyboard/validation/reduced-motion; keep upstream license notes.

## Task-specific requirements
- Scope: **RTL, Persian digits, meaningful alt tables**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model RTL, Persian digits, meaningful alt tables as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- Official slug resolves; files installed without overwrite; observed keyboard and RTL behavior correct.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/07-vibefarsi-full-catalog.md`
- `../perfect-ai-master/references/21-vibefarsi-implementation.md`
