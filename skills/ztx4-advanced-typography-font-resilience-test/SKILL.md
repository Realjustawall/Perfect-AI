---
name: ztx4-advanced-typography-font-resilience-test
description: "Implement font resilience test for Advanced Typography Engine with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Advanced Typography Engine / font-resilience-test

## Precise purpose
Test missing fonts, slow networks and user-customized fonts for overlap.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/advanced-typography.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/advanced-typography.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: FA/EN copy, actual font files/licenses, fallback metrics and visual hierarchy.

## Implementation workflow for this technique
1. **Identify specific need:** Test missing fonts, slow networks and user-customized fonts for overlap.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `font-resilience-test` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Test missing fonts, slow networks and user-customized fonts for overlap.
- Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.
- Persian joins/diacritics remain intact; Latin terms isolated.; 400% zoom and missing-font fallbacks are readable.; Kinetic typography retains accessible original text and reduced-motion version.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
