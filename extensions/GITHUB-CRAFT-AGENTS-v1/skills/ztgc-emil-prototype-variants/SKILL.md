---
name: ztgc-emil-prototype-variants
description: "Emil Prototype Variants specialist for Perfect_AI; use for Create genuinely divergent component prototypes with a fast visual picker, user selection and implementation promotion."
---

# Emil Prototype Variants — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [emilkowalski/skills](https://github.com/emilkowalski/skills/blob/main/skills/prototype/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Create genuinely divergent component prototypes with a fast visual picker, user selection and implementation promotion.

## Actual procedure
1. Get component goal, brand direction, accessibility constraints and target platform before exploration.
2. Produce three variants with different information architecture and interaction grammar, not merely different colors.
3. Place all prototypes behind a switcher in one local demo; ensure each has real keyboard, hover, focus and mobile states.
4. Ask a human to select; save decision rationale and export only the chosen variant to production.
5. Remove prototype-only CSS and controls from production integration; preserve originals and include rollback.

## Acceptance gates
- [ ] All variants functional and visually distinguishable
- [ ] No variant silently replaced by automated subjective scoring
- [ ] No external images or CDN required for demo

## Terminal workflow (verify commands on installed version)
```powershell
python -m http.server 8000  # from examples/prototype-picker directory
```

## Licensing, external tools and provenance
- Upstream: https://github.com/emilkowalski/skills
- Upstream source SHA: `dbcc1a23c66933f7372c0aacbce2b0d7cc6100b6` (the inspected main skill, not the new original work).
- License noted at inspection: **MIT**.
- Dependencies: React or vanilla CSS/HTML; local visual picker; no MCP.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-prototype-variant-design-divergence` — Build editorial, utilitarian, and immersive UI solutions with structural not merely palette differences.
- `ztgc-prototype-variant-picker-interaction` — Implement keyboard-accessible picker and persist choice only with explicit user action; capture variant metadata.
- `ztgc-prototype-variant-promotion-gate` — Before promoting a variant, run RTL, mobile, keyboard, reduced-motion and contrast checks; no overwrite without authorization.
