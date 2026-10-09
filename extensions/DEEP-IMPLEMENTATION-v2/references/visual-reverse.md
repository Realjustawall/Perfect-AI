# Visual Reverse Engineering — deep implementation playbook

**Purpose:** Reconstruct behavior from permitted references while distinguishing observable evidence from missing proprietary implementation.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Obtain reference screenshots or access with user permission; record viewport, font readiness and state.
2. Capture a state matrix for top/quarter/middle/bottom scroll, hover, focus, menu and reduced motion.
3. Measure boxes, spacing, radii, font metrics, SVG paths and dynamic transform changes from evidence.
4. Rebuild independent structure; do not claim unknown source code or assets are identical.
5. Compare deterministic screenshots, compute differences, triage and iterate until agreed tolerance.

## Inputs / design constraints
Inputs: user-supplied or permitted reference, screenshots/recordings, viewport states and asset rights.

## Preferred implementation approach
Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

## Representative source template
```js
// Collect layout evidence only on pages you may inspect.
const evidence = [...document.querySelectorAll('header, main, section, h1, button')].map(el=>{
 const rect=el.getBoundingClientRect();const css=getComputedStyle(el);
 return {tag:el.tagName, box:{x:rect.x,y:rect.y,w:rect.width,h:rect.height},font:css.fontFamily,color:css.color};
});
```

## Cross-cutting quality gates
1. Reference evidence logged by viewport/interaction state.
2. Inferred unknown geometry/code called out rather than claimed exact.
3. Screenshot comparisons reproducible under same font/viewport/time.

## Deep technique reference — all 16 features

### 01. `reference-capture-matrix`

**Output / operation:** Capture 8 viewports and interaction states with identical DPR and fonts.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/reference-capture-matrix.md) · Skill `$ztx4-visual-reverse-reference-capture-matrix`
### 02. `dom-measurement`

**Output / operation:** Collect boundingClientRect, computed style and text metrics for permitted DOM references.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/dom-measurement.md) · Skill `$ztx4-visual-reverse-dom-measurement`
### 03. `font-identification`

**Output / operation:** Identify font via CSS/network asset manifest or measured fallback, respecting licenses.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/font-identification.md) · Skill `$ztx4-visual-reverse-font-identification`
### 04. `spacing-grid-extraction`

**Output / operation:** Derive recurring spacing/column constraints with robust median estimates.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/spacing-grid-extraction.md) · Skill `$ztx4-visual-reverse-spacing-grid-extraction`
### 05. `scroll-frame-recording`

**Output / operation:** Sample normalized scroll progress, fixed/sticky transforms and animation keyframes.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/scroll-frame-recording.md) · Skill `$ztx4-visual-reverse-scroll-frame-recording`
### 06. `webgl-canvas-inspection`

**Output / operation:** Compare image frames; do not assume hidden geometry/code from rendered pixels.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/webgl-canvas-inspection.md) · Skill `$ztx4-visual-reverse-webgl-canvas-inspection`
### 07. `animation-timebase-analysis`

**Output / operation:** Identify scroll vs time driven stages via controlled pause/rewind.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/animation-timebase-analysis.md) · Skill `$ztx4-visual-reverse-animation-timebase-analysis`
### 08. `3d-camera-inference`

**Output / operation:** Approximate camera/projection using landmark ratios; label unknown depth as estimated.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/3d-camera-inference.md) · Skill `$ztx4-visual-reverse-3d-camera-inference`
### 09. `asset-manifest-with-rights`

**Output / operation:** Track filenames, locations and permission/licenses for every retained/reproduced asset.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/asset-manifest-with-rights.md) · Skill `$ztx4-visual-reverse-asset-manifest-with-rights`
### 10. `deterministic-screenshot-diff`

**Output / operation:** Align viewport/fonts/transitions and compare with threshold, mask only justified dynamic regions.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/deterministic-screenshot-diff.md) · Skill `$ztx4-visual-reverse-deterministic-screenshot-diff`
### 11. `ssim-and-perceptual-diff`

**Output / operation:** Combine pixel RMSE/SSIM with structured layout checks; avoid scoring on one metric.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/ssim-and-perceptual-diff.md) · Skill `$ztx4-visual-reverse-ssim-and-perceptual-diff`
### 12. `dom-vs-visual-diff`

**Output / operation:** Separate semantic DOM/keyboard problems from image-level visual mismatch.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/dom-vs-visual-diff.md) · Skill `$ztx4-visual-reverse-dom-vs-visual-diff`
### 13. `iteration-backlog`

**Output / operation:** Rank changes by perceptual impact and functional risk, validate each fix in screenshots.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/iteration-backlog.md) · Skill `$ztx4-visual-reverse-iteration-backlog`
### 14. `independent-reconstruction`

**Output / operation:** Produce a technically independent implementation while documenting visual inspiration.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/independent-reconstruction.md) · Skill `$ztx4-visual-reverse-independent-reconstruction`
### 15. `copyright-boundaries`

**Output / operation:** Never silently redistribute proprietary visual code/assets or assert permission unverified.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/copyright-boundaries.md) · Skill `$ztx4-visual-reverse-copyright-boundaries`
### 16. `uncertainty-register`

**Output / operation:** Document all unseen source details, inferred motion curves and remaining mismatch.

**Implementation:** Implementation: measure layout, sample scroll/time states, document observed vs inferred, build independent semantic DOM, perform deterministic screenshot diff.

**Proof:** Tests: same DPR/fonts/viewport/time, pixel difference and layout deviation, reverse scroll, keyboard, record unknown proprietary details.

[Dedicated recipe](./visual-reverse/recipes/uncertainty-register.md) · Skill `$ztx4-visual-reverse-uncertainty-register`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [playwright](https://playwright.dev/docs/test-snapshots)
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
