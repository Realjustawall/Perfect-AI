# Advanced Typography Engine — deep implementation playbook

**Purpose:** Create fluent bilingual, responsive and accessible type systems, including controlled typographic motion.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Audit content scripts, languages and actual font licensing/files.
2. Choose fallback stacks for Arabic-script shaping and Latin numeric metrics; ensure missing glyphs are covered.
3. Set a fluid rem-based modular type scale with line length and diacritic/ascender safety.
4. Keep DOM reading order and bidi isolation correct before decorative letter animation.
5. Test with long Persian/English text, 200% text and 400% zoom.

## Inputs / design constraints
Inputs: FA/EN copy, actual font files/licenses, fallback metrics and visual hierarchy.

## Preferred implementation approach
Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

## Representative source template
```html
<h1 lang="fa" dir="rtl">با <bdi dir="ltr">Perfect_AI</bdi> طراحی کنید</h1>
```
```css
h1 { font-size: clamp(2rem, 1.2rem + 3vw, 5.5rem); line-height: 1.2; overflow-wrap: anywhere; }
.prose { max-inline-size: 70ch; line-height: 1.8; font-synthesis: none; }
[lang=fa] { letter-spacing: normal; }
```

## Cross-cutting quality gates
1. Persian joins/diacritics remain intact; Latin terms isolated.
2. 400% zoom and missing-font fallbacks are readable.
3. Kinetic typography retains accessible original text and reduced-motion version.

## Deep technique reference — all 18 features

### 01. `persian-latin-font-pairing`

**Output / operation:** Match x-height, perceived stroke, script coverage and weight families between Persian/Latin.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/persian-latin-font-pairing.md) · Skill `$ztx4-advanced-typography-persian-latin-font-pairing`
### 02. `font-license-loading`

**Output / operation:** Self-host only licensed formats with correct preload/crossorigin and font-display.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/font-license-loading.md) · Skill `$ztx4-advanced-typography-font-license-loading`
### 03. `variable-font-axes`

**Output / operation:** Use font-variation-settings and real wght/wdth/opsz axes when font supports them.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/variable-font-axes.md) · Skill `$ztx4-advanced-typography-variable-font-axes`
### 04. `optical-sizing`

**Output / operation:** Enable font-optical-sizing where the font supports opsz; compare legibility in tiny captions.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/optical-sizing.md) · Skill `$ztx4-advanced-typography-optical-sizing`
### 05. `fluid-modular-scale`

**Output / operation:** Use clamp/rem fluid type levels with stable hierarchy at all widths.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/fluid-modular-scale.md) · Skill `$ztx4-advanced-typography-fluid-modular-scale`
### 06. `max-line-measure`

**Output / operation:** Limit long-form line length per script and break overlong tokens.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/max-line-measure.md) · Skill `$ztx4-advanced-typography-max-line-measure`
### 07. `line-height-and-diacritics`

**Output / operation:** Avoid clipping Persian diacritics and adjust glyph-safe vertical rhythm.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/line-height-and-diacritics.md) · Skill `$ztx4-advanced-typography-line-height-and-diacritics`
### 08. `letter-spacing-script-safety`

**Output / operation:** Avoid Latin-style letter spacing that damages Arabic-script joining.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/letter-spacing-script-safety.md) · Skill `$ztx4-advanced-typography-letter-spacing-script-safety`
### 09. `figures-numeral-localization`

**Output / operation:** Implement localized numeral display while keeping IDs/URLs machine-readable.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/figures-numeral-localization.md) · Skill `$ztx4-advanced-typography-figures-numeral-localization`
### 10. `bidi-isolate-code`

**Output / operation:** Use bdi and dir=auto for mixed filenames, paths, Latin brands and numbers.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/bidi-isolate-code.md) · Skill `$ztx4-advanced-typography-bidi-isolate-code`
### 11. `kinetic-type-word`

**Output / operation:** Animate word spans with semantic full string preserved for screen readers.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/kinetic-type-word.md) · Skill `$ztx4-advanced-typography-kinetic-type-word`
### 12. `kinetic-type-char`

**Output / operation:** Use accessible duplicate/source text and avoid tearing Arabic ligatures into unusable chars.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/kinetic-type-char.md) · Skill `$ztx4-advanced-typography-kinetic-type-char`
### 13. `text-masking`

**Output / operation:** Create overflow/mask reveal without hiding focus or essential copy.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/text-masking.md) · Skill `$ztx4-advanced-typography-text-masking`
### 14. `3d-extruded-typography`

**Output / operation:** Generate SDF/extruded text meshes with correct font atlas, bounds and DOM equivalent.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/3d-extruded-typography.md) · Skill `$ztx4-advanced-typography-3d-extruded-typography`
### 15. `font-fallback-metric`

**Output / operation:** Use size-adjust/ascent-override where justified to prevent CLS.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/font-fallback-metric.md) · Skill `$ztx4-advanced-typography-font-fallback-metric`
### 16. `svg-type-path`

**Output / operation:** Animate text on SVG path while retaining accessible plain text fallback.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/svg-type-path.md) · Skill `$ztx4-advanced-typography-svg-type-path`
### 17. `editorial-layout`

**Output / operation:** Build asymmetric editorial type hierarchy preserving reading sequence and touch access.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/editorial-layout.md) · Skill `$ztx4-advanced-typography-editorial-layout`
### 18. `font-resilience-test`

**Output / operation:** Test missing fonts, slow networks and user-customized fonts for overlap.

**Implementation:** Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

**Proof:** Tests: long RTL/Latin mixed strings, glyph coverage, 400% zoom, font missing, CLS, diacritic clipping, screen-reader reading order.

[Dedicated recipe](./advanced-typography/recipes/font-resilience-test.md) · Skill `$ztx4-advanced-typography-font-resilience-test`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
