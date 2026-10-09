# Color Intelligence 3.0 — deep implementation playbook

**Purpose:** Generate palettes grounded in context using perceptual color, explicit accessibility rules and honest scoring.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Record brand color constraints and semantic intent, not unsupported deterministic psychology claims.
2. Generate five distinct candidates in OKLCH under stable hue/chroma/lightness policies.
3. Gamut-map to output sRGB and optional P3; separate UI fallbacks and per-mode semantic roles.
4. Check WCAG normal/large text, non-text components and focus indicators on actual composite backgrounds.
5. Produce accessible light/dark/high-contrast token tables and score with transparent, non-universal heuristics.

## Inputs / design constraints
Inputs: product intent, user palette constraints, brand evidence, themes and semantic roles.

## Preferred implementation approach
Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

## Representative source template
```css
:root { --color-canvas: #fff; --color-ink: #161616; --color-accent: #315a8e; --color-focus: #0e558d; }
[data-theme='dark'] { --color-canvas: #111; --color-ink: #f3f3f3; --color-accent: #9abce4; --color-focus: #b4d6ff; }
body { background:var(--color-canvas); color:var(--color-ink); }
:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
/* Real foreground/background WCAG contrast is verified by tools/colors.mjs, not assumed. */
```

## Cross-cutting quality gates
1. Five alternative palettes with output tokens and explicit scored reasons.
2. Normal/large text, non-text/focus pairs checked for appropriate contrast.
3. Color is never sole signifier for state/error/series.

## Deep technique reference — all 26 features

### 01. `brief-to-color-strategy`

**Output / operation:** Choose visual temperature and chroma intensity based on evidence, audience and brand requirements.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/brief-to-color-strategy.md) · Skill `$ztx4-color-intelligence-brief-to-color-strategy`
### 02. `color-psychology-cautions`

**Output / operation:** Treat color associations as context-dependent cultural hypotheses, never scientifically universal meanings.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/color-psychology-cautions.md) · Skill `$ztx4-color-intelligence-color-psychology-cautions`
### 03. `oklch-color-conversion`

**Output / operation:** Convert OKLCH to linear sRGB then gamut-map and gamma encode without NaNs.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/oklch-color-conversion.md) · Skill `$ztx4-color-intelligence-oklch-color-conversion`
### 04. `color-gamut-mapping`

**Output / operation:** Reduce chroma until valid sRGB, preserving perceived lightness and hue where possible.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/color-gamut-mapping.md) · Skill `$ztx4-color-intelligence-color-gamut-mapping`
### 05. `display-p3-progressive`

**Output / operation:** Use @supports (color:color(display-p3 ...)) with sRGB fallbacks and gamut checks.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/display-p3-progressive.md) · Skill `$ztx4-color-intelligence-display-p3-progressive`
### 06. `hue-harmony-algorithms`

**Output / operation:** Propose analogous, complementary, split-complementary and triadic hue candidates purposefully.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/hue-harmony-algorithms.md) · Skill `$ztx4-color-intelligence-hue-harmony-algorithms`
### 07. `lightness-hierarchy`

**Output / operation:** Define surface/foreground emphasis using contrast and perceived lightness rather than random luminance.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/lightness-hierarchy.md) · Skill `$ztx4-color-intelligence-lightness-hierarchy`
### 08. `chroma-budget`

**Output / operation:** Use restrained saturation for interface foundations and reserve chroma for meaningful status/accent.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/chroma-budget.md) · Skill `$ztx4-color-intelligence-chroma-budget`
### 09. `five-palette-generator`

**Output / operation:** Produce five materially different candidates and never quietly force a neon default.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/five-palette-generator.md) · Skill `$ztx4-color-intelligence-five-palette-generator`
### 10. `palette-multiobjective-scoring`

**Output / operation:** Score WCAG gating, brand fidelity, distinctiveness, warmth, context and semantic clarity separately.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/palette-multiobjective-scoring.md) · Skill `$ztx4-color-intelligence-palette-multiobjective-scoring`
### 11. `wcag-text-contrast`

**Output / operation:** Compute WCAG 2.x relative luminance contrast at normal and large text sizes.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/wcag-text-contrast.md) · Skill `$ztx4-color-intelligence-wcag-text-contrast`
### 12. `wcag-nontext-contrast`

**Output / operation:** Check UI boundaries and icons at 3:1 where the criterion applies.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/wcag-nontext-contrast.md) · Skill `$ztx4-color-intelligence-wcag-nontext-contrast`
### 13. `focus-ring-contrast`

**Output / operation:** Validate visible focus indicators against adjacent colors in both themes.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/focus-ring-contrast.md) · Skill `$ztx4-color-intelligence-focus-ring-contrast`
### 14. `cvd-protan-deutan-tritan`

**Output / operation:** Simulate common color-vision deficiencies approximately and check redundant cues.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/cvd-protan-deutan-tritan.md) · Skill `$ztx4-color-intelligence-cvd-protan-deutan-tritan`
### 15. `semantic-tokens`

**Output / operation:** Emit background/surface/text/secondary/border/action/status/focus tokens by role.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/semantic-tokens.md) · Skill `$ztx4-color-intelligence-semantic-tokens`
### 16. `dark-mode-tonal-scale`

**Output / operation:** Build dark mode with elevation and luminance separation rather than invert colors blindly.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/dark-mode-tonal-scale.md) · Skill `$ztx4-color-intelligence-dark-mode-tonal-scale`
### 17. `light-mode-tonal-scale`

**Output / operation:** Preserve sufficient legibility on high-reflectance backgrounds and large whitespace.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/light-mode-tonal-scale.md) · Skill `$ztx4-color-intelligence-light-mode-tonal-scale`
### 18. `high-contrast-forced-colors`

**Output / operation:** Respond to forced-colors and prefers-contrast without suppressing focus and form affordances.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/high-contrast-forced-colors.md) · Skill `$ztx4-color-intelligence-high-contrast-forced-colors`
### 19. `css-color-mix`

**Output / operation:** Use color-mix(in oklch,... ) with fallback and verify predictable blending.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/css-color-mix.md) · Skill `$ztx4-color-intelligence-css-color-mix`
### 20. `bootstrap-theme-bridge`

**Output / operation:** Map semantic tokens onto Bootstrap 5.3 custom properties and data-bs-theme.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/bootstrap-theme-bridge.md) · Skill `$ztx4-color-intelligence-bootstrap-theme-bridge`
### 21. `tailwind-v4-theme-bridge`

**Output / operation:** Map to Tailwind v4 @theme and runtime semantic CSS vars without color-class explosion.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/tailwind-v4-theme-bridge.md) · Skill `$ztx4-color-intelligence-tailwind-v4-theme-bridge`
### 22. `chart-categorical-palette`

**Output / operation:** Select categories distinguishable by value/shape/pattern, with no color-only encoding.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/chart-categorical-palette.md) · Skill `$ztx4-color-intelligence-chart-categorical-palette`
### 23. `chart-sequential-diverging`

**Output / operation:** Use perceptually ordered lightness and meaningful zero/neutral midpoint.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/chart-sequential-diverging.md) · Skill `$ztx4-color-intelligence-chart-sequential-diverging`
### 24. `gradient-band-prevention`

**Output / operation:** Choose gamma-aware, subtle gradient stops with fallback for reduced color quality.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/gradient-band-prevention.md) · Skill `$ztx4-color-intelligence-gradient-band-prevention`
### 25. `palette-regression-snapshots`

**Output / operation:** Compare token outputs across modes, pages and components and flag color drift.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/palette-regression-snapshots.md) · Skill `$ztx4-color-intelligence-palette-regression-snapshots`
### 26. `palette-approval-report`

**Output / operation:** Document five candidates, reasons for winning, contrast matrix and assumptions.

**Implementation:** Implementation: propose 5 OKLCH palettes; gamut-map by chroma reduction; calculate WCAG pair contrast; choose transparent multiobjective scores and emit role tokens.

**Proof:** Tests: output sRGB validity, normal text >=4.5:1 / large >=3:1 where applicable, focus/non-text checks, dark/light, color-only meaning avoidance.

[Dedicated recipe](./color-intelligence/recipes/palette-approval-report.md) · Skill `$ztx4-color-intelligence-palette-approval-report`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
