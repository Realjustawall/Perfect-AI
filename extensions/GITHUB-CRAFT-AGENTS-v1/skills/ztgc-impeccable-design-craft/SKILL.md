---
name: ztgc-impeccable-design-craft
description: "Impeccable Design Craft specialist for Perfect_AI; use for Lead iterative design audits and improvements without gratuitous redesigns or overwriting unrelated changes."
---

# Impeccable Design Craft — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [pbakaus/impeccable](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Lead iterative design audits and improvements without gratuitous redesigns or overwriting unrelated changes.

## Actual procedure
1. Inventory routes, UI states, responsive widths, semantic landmarks, existing design tokens and constraints; capture baseline screenshots.
2. Score typography hierarchy, density, alignment, color contrast, information scent, component consistency, motion rhythm and original visual direction with evidence attached to component paths.
3. Use an explicit mode chosen from audit, critique, polish, distill, bolder, quiet, accessibility, responsive; never run contradictory modes simultaneously.
4. Choose 3 highest-impact problems, change narrowly, then compare the same viewport/state and rollback a regression.
5. Protect product identity and RTL content; keep before/after screenshots and unresolved issues.

## Acceptance gates
- [ ] No forced trendy gradients or universal hero pattern
- [ ] Design constraints are traced to actual source files
- [ ] No regression in keyboard usability, contrast and mobile layout

## Terminal workflow (verify commands on installed version)
```powershell
npx impeccable skills install  # OPTIONAL: installs ORIGINAL upstream with user review
npx playwright test  # use existing project test tooling when configured
```

## Licensing, external tools and provenance
- Upstream: https://github.com/pbakaus/impeccable
- Upstream source SHA: `b9d82965dd59a45596c5b63a1cf4207168a272a7` (the inspected main skill, not the new original work).
- License noted at inspection: **Apache-2.0**.
- Dependencies: Optional: npx impeccable skills install (manual upstream installer).
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-impeccable-design-critique-evidence` — Locate issues by route/viewport/component; attach pixel example, user impact, fix proposal and severity; distinguish style preference from accessibility failure.
- `ztgc-impeccable-polish-no-regressions` — Polish typography, alignment and spacing in small patches; forbid changing flows or copy unnecessarily; A/B compare at fixed state.
- `ztgc-impeccable-brand-and-layout-director` — Derive brand principle, motion intent, composition grid, typography scale, and design anti-pattern budget; review design consistency across routes.
