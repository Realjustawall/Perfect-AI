---
name: ztx4-color-intelligence-semantic-tokens
description: "Implement semantic tokens for Color Intelligence 3.0 with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Color Intelligence 3.0 / semantic-tokens

## Precise purpose
Emit background/surface/text/secondary/border/action/status/focus tokens by role.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/color-intelligence.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/color-intelligence.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: product intent, user palette constraints, brand evidence, themes and semantic roles.

## Implementation workflow for this technique
1. **Identify specific need:** Emit background/surface/text/secondary/border/action/status/focus tokens by role.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `semantic-tokens` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Emit background/surface/text/secondary/border/action/status/focus tokens by role.
- Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.
- Five alternative palettes with output tokens and explicit scored reasons.; Normal/large text, non-text/focus pairs checked for appropriate contrast.; Color is never sole signifier for state/error/series.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
