---
name: ztx4-color-intelligence
description: "Deep implementation master for Color Intelligence 3.0 with 26 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Color Intelligence 3.0

Generate palettes grounded in context using perceptual color, explicit accessibility rules and honest scoring.

## Mandatory sequence
1. Record brand color constraints and semantic intent, not unsupported deterministic psychology claims.
2. Generate five distinct candidates in OKLCH under stable hue/chroma/lightness policies.
3. Gamut-map to output sRGB and optional P3; separate UI fallbacks and per-mode semantic roles.
4. Check WCAG normal/large text, non-text components and focus indicators on actual composite backgrounds.
5. Produce accessible light/dark/high-contrast token tables and score with transparent, non-universal heuristics.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/color-intelligence.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: product intent, user palette constraints, brand evidence, themes and semantic roles.

Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

## Acceptance gates
1. Five alternative palettes with output tokens and explicit scored reasons.
2. Normal/large text, non-text/focus pairs checked for appropriate contrast.
3. Color is never sole signifier for state/error/series.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
