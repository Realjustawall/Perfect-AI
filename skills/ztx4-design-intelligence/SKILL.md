---
name: ztx4-design-intelligence
description: "Deep implementation master for Design Intelligence Engine with 20 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Design Intelligence Engine

Turn a product brief into evidence-backed visual and implementation choices, not default AI aesthetics.

## Mandatory sequence
1. Extract goals, user tasks, region, content, brand assets, constraints and unknowns; record source of each claim.
2. Generate at least three distinct visual directions and score user-task fit, brand fidelity, readability, performance and novelty independently.
3. Choose an information architecture, semantic palette, bilingual type stack, responsive system and single owner per animated property.
4. Rank only relevant installed skills; output a decision record and why rejected options failed.
5. Render 320/390/768/1440 screenshots and ask a critic to challenge repeated hero/card/grid tropes.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/design-intelligence.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: brief.json, source assets, existing screenshot(s), audience/goal constraints.

Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

## Acceptance gates
1. Decision record cites brief constraints and labels assumptions.
2. Three style candidates differ in actual composition, not just hue.
3. Only needed skills are loaded and reason for selection is recorded.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [storybook](https://storybook.js.org/docs)
