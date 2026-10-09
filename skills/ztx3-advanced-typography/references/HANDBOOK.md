# Advanced Typography Engine — production engineering reference

Treat type as layout geometry. Select native readable Persian and Latin families for content, variable axes for hierarchy, fluid type ramps, language-specific tracking, line breaking, metrics-aligned fallbacks, bidi isolation and user override support. Implement CSS-only and animated text without breaking selection or screen reader reading order.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. font-pairing

**Mechanism:** Choose Persian/Latin faces by x-height, stroke modulation and visual tone.

**Failure pressure:** Do not assume one font renders both scripts well.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 2. variable-font-axes

**Mechanism:** Use wght/wdth/opsz within supported range and font-variation-settings only when needed.

**Failure pressure:** Avoid fake synthetic bold.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 3. fluid-type-scale

**Mechanism:** Use clamp() with lower/upper sizes and comfortable body minimums.

**Failure pressure:** No microscopic text on mobile.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 4. line-length-rhythm

**Mechanism:** Use ch-based line measure, optical spacing and baseline grids.

**Failure pressure:** Avoid squeezed Persian paragraphs.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 5. persian-shaping

**Mechanism:** Check join forms, half-spaces, diacritics and numeral choice.

**Failure pressure:** Do not letter-space Persian body text indiscriminately.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 6. latin-bidi-isolation

**Mechanism:** Use bdi, dir=ltr for code/URLs and unicode-bidi isolate as required.

**Failure pressure:** No reversed mixed-script version numbers.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 7. responsive-heading-wrap

**Mechanism:** Control text-wrap balance and avoid clipping at 320px.

**Failure pressure:** Do not force nowrap for oversized headings.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 8. kinetic-glyph-animation

**Mechanism:** Animate grapheme-safe spans while preserving one accessible source.

**Failure pressure:** Avoid letter-by-letter screen reader noise.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 9. text-mask-reveal

**Mechanism:** Use clip-path/mask animation with static readable fallback.

**Failure pressure:** No invisible headline when animation fails.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 10. 3d-typography

**Mechanism:** Render visual text meshes only as decoration with DOM equivalent.

**Failure pressure:** Avoid canvas-only critical CTAs.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 11. font-loading-metrics

**Mechanism:** Preload critical WOFF2 only, define fallback metrics and display strategy.

**Failure pressure:** No unlicensed font redistribution.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

### 12. optical-type-review

**Mechanism:** Compare baseline, perceived weight, cap-height, Arabic ligatures and condensed extremes.

**Failure pressure:** Pixel ratios alone do not prove good pairing.

**Execution:** Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

**Acceptance:** Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.
