---
name: ztx4-design-intelligence-design-variant-comparison
description: "Implement design variant comparison for Design Intelligence Engine with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Design Intelligence Engine / design-variant-comparison

## Precise purpose
Make comparable screenshots at identical content/viewport settings and select with documented rationale.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/design-intelligence.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/design-intelligence.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: brief.json, source assets, existing screenshot(s), audience/goal constraints.

## Implementation workflow for this technique
1. **Identify specific need:** Make comparable screenshots at identical content/viewport settings and select with documented rationale.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `design-variant-comparison` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Make comparable screenshots at identical content/viewport settings and select with documented rationale.
- Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.
- Decision record cites brief constraints and labels assumptions.; Three style candidates differ in actual composition, not just hue.; Only needed skills are loaded and reason for selection is recorded.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [storybook](https://storybook.js.org/docs)
