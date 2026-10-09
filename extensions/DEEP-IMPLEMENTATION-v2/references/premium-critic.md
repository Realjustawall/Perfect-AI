# Premium Design Critic — deep implementation playbook

**Purpose:** Review real rendered evidence to detect shallow templates and improve clarity, brand and delight without hallucinating benchmarks.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Inspect screenshots, interaction recordings and source requirements at the same viewport.
2. Grade distinct criteria with evidence and known tradeoffs instead of one vague score.
3. Run anti-cliché review: unnecessary blobs, equally weighted cards, missing content hierarchy and excessive motion.
4. Propose 2–3 targeted, testable design revisions with before/after snapshots.
5. Require functional/a11y regression after applying visual critique.

## Inputs / design constraints
Inputs: target brief, rendered screenshots/recordings, interaction QA and brand evidence.

## Preferred implementation approach
Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

## Representative source template
```json
{"criterion":"visual-hierarchy","evidence":"mobile-390.png: primary CTA below decorative hero and requires excessive scroll","severity":"high","fix":"move action next to value proposition","verify":"rerun mobile screenshot + keyboard tab order"}
```

## Cross-cutting quality gates
1. Each critique includes screenshot evidence and severity.
2. Rejected clichés explained relative to product brief.
3. Recommended redesign tested for regressions.

## Deep technique reference — all 17 features

### 01. `brand-fidelity-review`

**Output / operation:** Verify logo, spacing, voice and color alignment with provided identity evidence.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/brand-fidelity-review.md) · Skill `$ztx4-premium-critic-brand-fidelity-review`
### 02. `visual-hierarchy-critique`

**Output / operation:** Check visual priority matches user task and primary action, not random decoration.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/visual-hierarchy-critique.md) · Skill `$ztx4-premium-critic-visual-hierarchy-critique`
### 03. `anti-ai-template-audit`

**Output / operation:** Flag clichéd gradients, glass cards, repetitive symmetry and generic imagery without evidence.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/anti-ai-template-audit.md) · Skill `$ztx4-premium-critic-anti-ai-template-audit`
### 04. `composition-balance`

**Output / operation:** Assess mass, alignment, whitespace, asymmetry and focal points across breakpoints.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/composition-balance.md) · Skill `$ztx4-premium-critic-composition-balance`
### 05. `color-taste-review`

**Output / operation:** Inspect palette coherence, neutral role distribution and restrained use of chroma.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/color-taste-review.md) · Skill `$ztx4-premium-critic-color-taste-review`
### 06. `typography-quality`

**Output / operation:** Assess letter shaping, bilingual rhythm, headline display and readable long-form measures.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/typography-quality.md) · Skill `$ztx4-premium-critic-typography-quality`
### 07. `motion-meaning-critique`

**Output / operation:** Ensure every movement clarifies state/navigation or adds intentional atmosphere.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/motion-meaning-critique.md) · Skill `$ztx4-premium-critic-motion-meaning-critique`
### 08. `3d-value-critique`

**Output / operation:** Confirm 3D helps narrative and does not obstruct content or accessibility.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/3d-value-critique.md) · Skill `$ztx4-premium-critic-3d-value-critique`
### 09. `content-credibility`

**Output / operation:** Reject fake testimonials, fabricated logos, impossible claims and placeholder claims.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/content-credibility.md) · Skill `$ztx4-premium-critic-content-credibility`
### 10. `cta-clarity`

**Output / operation:** Check that primary action is obvious, correct and placed where user can act.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/cta-clarity.md) · Skill `$ztx4-premium-critic-cta-clarity`
### 11. `mobile-specific-aesthetics`

**Output / operation:** Critique independent mobile composition, not only scaled desktop.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/mobile-specific-aesthetics.md) · Skill `$ztx4-premium-critic-mobile-specific-aesthetics`
### 12. `reduced-motion-quality`

**Output / operation:** Confirm reduced-motion output still looks deliberate and premium.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/reduced-motion-quality.md) · Skill `$ztx4-premium-critic-reduced-motion-quality`
### 13. `error-state-design`

**Output / operation:** Evaluate empty/loading/error as carefully as success state.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/error-state-design.md) · Skill `$ztx4-premium-critic-error-state-design`
### 14. `consistency-governance`

**Output / operation:** Check tokens, radius and animation duration across pages.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/consistency-governance.md) · Skill `$ztx4-premium-critic-consistency-governance`
### 15. `pixel-diff-with-judgment`

**Output / operation:** Use visual diff as evidence not aesthetic truth; account for acceptable differences.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/pixel-diff-with-judgment.md) · Skill `$ztx4-premium-critic-pixel-diff-with-judgment`
### 16. `prioritized-redesign`

**Output / operation:** Produce a fix plan with severity, effort and user impact estimate labeled subjective.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/prioritized-redesign.md) · Skill `$ztx4-premium-critic-prioritized-redesign`
### 17. `design-signoff-report`

**Output / operation:** Record evaluated states, strengths, verified issues and remaining unknowns.

**Implementation:** Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

**Proof:** Tests: no fabricated evaluation evidence, before/after diff, functional/accessibility regression and independent mobile treatment.

[Dedicated recipe](./premium-critic/recipes/design-signoff-report.md) · Skill `$ztx4-premium-critic-design-signoff-report`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [playwright](https://playwright.dev/docs/test-snapshots)
