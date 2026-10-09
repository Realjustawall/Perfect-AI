# Color Intelligence 3.0 — production engineering reference

Translate brand attributes to constrained palette objectives, not simplistic color psychology claims. Build OKLCH neutral ramp and accents using gamut mapping into sRGB; generate 5 alternatives with role tokens. Calculate contrast for every foreground/background pair (WCAG 2.2 text and UI), CVD simulation, light/dark parity, forced-colors mode and P3 support. Recommend by explicit weighted score plus human review.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. brief-to-color-objectives

**Mechanism:** Map readability, tone, brand, medium, audience and disallowed hue constraints.

**Failure pressure:** No demographic claims from color alone.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 2. oklch-gamut-mapping

**Mechanism:** Convert OKLCH through linear sRGB, clamp chroma via binary search rather than channel clip.

**Failure pressure:** Report when requested colors are out of gamut.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 3. five-palette-candidates

**Mechanism:** Generate neutral, analogous, split-complementary, tonal and brand-restricted options.

**Failure pressure:** Output palette rationale, not only swatches.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 4. semantic-token-contract

**Mechanism:** Define surface/text/border/action/focus/success/warning/error independently of hue.

**Failure pressure:** Never map meaning to color alone.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 5. wcag-contrast

**Mechanism:** Check normal text 4.5:1, large text 3:1, relevant UI parts 3:1 where WCAG applies.

**Failure pressure:** Do not treat AAA as default minimum.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 6. cvd-simulation

**Mechanism:** Simulate protanopia, deuteranopia and tritanopia approximations, plus grayscale.

**Failure pressure:** Avoid relying solely on simulation as accessibility proof.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 7. p3-progressive

**Mechanism:** Write sRGB fallback then @supports color(display-p3 ...) enhancement.

**Failure pressure:** Never ship P3-only essential contrast.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 8. dark-light-theme

**Mechanism:** Maintain equivalent hierarchy and clear system/user preference handling.

**Failure pressure:** No flash of unreadable theme on hydration.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 9. hue-distribution

**Mechanism:** Budget accents according to function, visual weight and local context.

**Failure pressure:** Avoid six saturated accents at once.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 10. perceptual-distance

**Mechanism:** Measure ΔE-like separation with OKLab for distinguishable role pairs.

**Failure pressure:** Contrast ratio alone does not ensure hue discrimination.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 11. neutral-monochrome

**Mechanism:** Build cold/warm/true gray ramps without unintended colorful gradients.

**Failure pressure:** Respect hard black-and-white mandate.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 12. color-scoring

**Mechanism:** Rank palettes by contrast, identity, cohesion, distinctiveness and surface behavior.

**Failure pressure:** Surface heuristic scores as estimates not objective quality.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

### 13. color-tokens-export

**Mechanism:** Export CSS, Tailwind @theme, Bootstrap variables and accessible usage examples.

**Failure pressure:** Do not silently overwrite existing token files.

**Execution:** Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

**Acceptance:** Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

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
