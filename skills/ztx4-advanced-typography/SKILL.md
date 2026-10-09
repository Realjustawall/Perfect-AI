---
name: ztx4-advanced-typography
description: "Deep implementation master for Advanced Typography Engine with 18 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Advanced Typography Engine

Create fluent bilingual, responsive and accessible type systems, including controlled typographic motion.

## Mandatory sequence
1. Audit content scripts, languages and actual font licensing/files.
2. Choose fallback stacks for Arabic-script shaping and Latin numeric metrics; ensure missing glyphs are covered.
3. Set a fluid rem-based modular type scale with line length and diacritic/ascender safety.
4. Keep DOM reading order and bidi isolation correct before decorative letter animation.
5. Test with long Persian/English text, 200% text and 400% zoom.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/advanced-typography.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: FA/EN copy, actual font files/licenses, fallback metrics and visual hierarchy.

Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

## Acceptance gates
1. Persian joins/diacritics remain intact; Latin terms isolated.
2. 400% zoom and missing-font fallbacks are readable.
3. Kinetic typography retains accessible original text and reduced-motion version.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
