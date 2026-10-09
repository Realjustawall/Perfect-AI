---
name: ztx4-visual-reverse-uncertainty-register
description: "Implement uncertainty register for Visual Reverse Engineering with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Visual Reverse Engineering / uncertainty-register

## Precise purpose
Document all unseen source details, inferred motion curves and remaining mismatch.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/visual-reverse.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/visual-reverse.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: user-supplied or permitted reference, screenshots/recordings, viewport states and asset rights.

## Implementation workflow for this technique
1. **Identify specific need:** Document all unseen source details, inferred motion curves and remaining mismatch.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `uncertainty-register` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Document all unseen source details, inferred motion curves and remaining mismatch.
- Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.
- Reference evidence logged by viewport/interaction state.; Inferred unknown geometry/code called out rather than claimed exact.; Screenshot comparisons reproducible under same font/viewport/time.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [playwright](https://playwright.dev/docs/test-snapshots)
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
