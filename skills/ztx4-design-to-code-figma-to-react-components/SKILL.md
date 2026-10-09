---
name: ztx4-design-to-code-figma-to-react-components
description: "Implement figma to react components for Design-to-Code Pipeline (offline) with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Design-to-Code Pipeline (offline) / figma-to-react-components

## Precise purpose
Create semantic React composition and preserve focus/label relationships.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/design-to-code.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/design-to-code.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: local Figma JSON or exported images/SVG, tokens and rights; no MCP.

## Implementation workflow for this technique
1. **Identify specific need:** Create semantic React composition and preserve focus/label relationships.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: normalize local layers, reconstruct auto layout as Flex/Grid, map semantics and tokens, generate TSX/CSS with responsive/RTL constraints.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `figma-to-react-components` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Create semantic React composition and preserve focus/label relationships.
- Tests: parse invalid exports safely, no executable unsafe SVG, no absolute-layout dependence, screenshot comparison and keyboard affordances.
- No MCP required; only local files are read.; Exported code uses semantic layout and responds beyond design artboard size.; Sanitize imported SVG and verify licensing.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
- [storybook](https://storybook.js.org/docs)
