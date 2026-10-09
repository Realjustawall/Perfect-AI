# Design Intelligence Engine — deep implementation playbook

**Purpose:** Turn a product brief into evidence-backed visual and implementation choices, not default AI aesthetics.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Extract goals, user tasks, region, content, brand assets, constraints and unknowns; record source of each claim.
2. Generate at least three distinct visual directions and score user-task fit, brand fidelity, readability, performance and novelty independently.
3. Choose an information architecture, semantic palette, bilingual type stack, responsive system and single owner per animated property.
4. Rank only relevant installed skills; output a decision record and why rejected options failed.
5. Render 320/390/768/1440 screenshots and ask a critic to challenge repeated hero/card/grid tropes.

## Inputs / design constraints
Inputs: brief.json, source assets, existing screenshot(s), audience/goal constraints.

## Preferred implementation approach
Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

## Representative source template
```json
{"goal":"explain a 3D creative tool","evidence":{"brandPalette":"user specified monochrome"},"unknowns":["commercial audience age group"],"alternatives":["editorial mono","technical schematic","cinematic mono"],"decision":{"layout":"editorial mono","engine":"Three.js + CSS","skills":["ztx4-adaptive-responsive-container-query-layout"]}}
```

## Cross-cutting quality gates
1. Decision record cites brief constraints and labels assumptions.
2. Three style candidates differ in actual composition, not just hue.
3. Only needed skills are loaded and reason for selection is recorded.

## Deep technique reference — all 20 features

### 01. `brief-normalization`

**Output / operation:** Convert messy project input to typed goals, constraints, languages and unknowns without inventing facts.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/brief-normalization.md) · Skill `$ztx4-design-intelligence-brief-normalization`
### 02. `brand-evidence-extraction`

**Output / operation:** Audit actual logos, wordmarks, typography, color use and tone; mark inference as inference.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/brand-evidence-extraction.md) · Skill `$ztx4-design-intelligence-brand-evidence-extraction`
### 03. `personas-with-evidence`

**Output / operation:** Describe user jobs, cognitive load, device and access needs without claiming invented user research.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/personas-with-evidence.md) · Skill `$ztx4-design-intelligence-personas-with-evidence`
### 04. `industry-archetype-resistant`

**Output / operation:** Differentiate sites of the same business category via content, typography and hierarchy, not neon gradients.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/industry-archetype-resistant.md) · Skill `$ztx4-design-intelligence-industry-archetype-resistant`
### 05. `visual-direction-proposals`

**Output / operation:** Generate three materially different layout and mood concepts using the same functional requirements.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/visual-direction-proposals.md) · Skill `$ztx4-design-intelligence-visual-direction-proposals`
### 06. `visual-style-scoring`

**Output / operation:** Score readability, distinctiveness, brand recognition, complexity, coherence and accessibility separately.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/visual-style-scoring.md) · Skill `$ztx4-design-intelligence-visual-style-scoring`
### 07. `site-map-from-jobs`

**Output / operation:** Build information architecture around customer journeys and measurable primary actions.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/site-map-from-jobs.md) · Skill `$ztx4-design-intelligence-site-map-from-jobs`
### 08. `copy-density-planning`

**Output / operation:** Reserve realistic content length for Persian and English without placeholder lorem ipsum.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/copy-density-planning.md) · Skill `$ztx4-design-intelligence-copy-density-planning`
### 09. `font-pairing-decision`

**Output / operation:** Pick Persian/Latin font families with real weights, metrics, licenses and fallbacks.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/font-pairing-decision.md) · Skill `$ztx4-design-intelligence-font-pairing-decision`
### 10. `palette-routing`

**Output / operation:** Generate, contrast-check and rank palettes under explicit user constraints.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/palette-routing.md) · Skill `$ztx4-design-intelligence-palette-routing`
### 11. `motion-engine-ownership`

**Output / operation:** Choose among CSS, Anime.js, GSAP, Motion, Rive, Theatre.js and Three.js per property ownership.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/motion-engine-ownership.md) · Skill `$ztx4-design-intelligence-motion-engine-ownership`
### 12. `three-d-necessity-test`

**Output / operation:** Require a communicative role, accessibility fallback and GPU budget before adding WebGL.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/three-d-necessity-test.md) · Skill `$ztx4-design-intelligence-three-d-necessity-test`
### 13. `skill-shortlist-ranking`

**Output / operation:** Rank relevant installed SKILL.md by task, prerequisites and conflicts rather than load all files.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/skill-shortlist-ranking.md) · Skill `$ztx4-design-intelligence-skill-shortlist-ranking`
### 14. `anti-template-guard`

**Output / operation:** Detect generic symmetric three-card layouts, oversized gradient blob heroes and unearned glassmorphism.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/anti-template-guard.md) · Skill `$ztx4-design-intelligence-anti-template-guard`
### 15. `creative-divergence`

**Output / operation:** Propose nonstandard compositions while retaining obvious affordances and learnability.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/creative-divergence.md) · Skill `$ztx4-design-intelligence-creative-divergence`
### 16. `design-decision-record`

**Output / operation:** Produce ADR with alternatives, evidence, constraints, selected solution and verification gates.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/design-decision-record.md) · Skill `$ztx4-design-intelligence-design-decision-record`
### 17. `system-conflict-arbitration`

**Output / operation:** Resolve conflicting CSS frameworks, animators and layout conventions explicitly.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/system-conflict-arbitration.md) · Skill `$ztx4-design-intelligence-system-conflict-arbitration`
### 18. `design-variant-comparison`

**Output / operation:** Make comparable screenshots at identical content/viewport settings and select with documented rationale.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/design-variant-comparison.md) · Skill `$ztx4-design-intelligence-design-variant-comparison`
### 19. `content-first-hierarchy`

**Output / operation:** Prioritize value proposition, proof and action with measurable prominence.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/content-first-hierarchy.md) · Skill `$ztx4-design-intelligence-content-first-hierarchy`
### 20. `iterative-redesign-gate`

**Output / operation:** Block shipping until critical design, technical and accessibility findings are resolved.

**Implementation:** Implementation: collect unknowns and evidence; compare >=3 visual directions with multi-axis weighted scoring; persist a design-decision JSON, skill shortlist and rejected clichés.

**Proof:** Tests: deterministic selection for the same brief, 3 contrasting briefs, transparency of unknown assumptions, mobile and bilingual screenshot parity.

[Dedicated recipe](./design-intelligence/recipes/iterative-redesign-gate.md) · Skill `$ztx4-design-intelligence-iterative-redesign-gate`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [storybook](https://storybook.js.org/docs)
