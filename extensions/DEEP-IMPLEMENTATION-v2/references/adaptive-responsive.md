# Adaptive Responsive Engine 3.0 — deep implementation playbook

**Purpose:** Make components reflow based on their own available space, user settings and device capability.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Start content at 320 CSS px, zoom 400%, long Persian strings and keyboard-only operation.
2. Choose intrinsic CSS Grid/Flex, minmax and clamp; apply container queries only where behavior changes.
3. Use logical properties and test dir=rtl/ltr separately; never mirror logos or physics.
4. Handle 100svh/dvh, safe areas, virtual keyboard, orientation and split-view layouts.
5. Test viewport, narrow nested container, reduced-motion, no-WebGL and high text-spacing scenarios.

## Inputs / design constraints
Inputs: component min content width, RTL/LTR strings, container dimensions, viewport and input modality.

## Preferred implementation approach
Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

## Representative source template
```css
.responsive-shell { inline-size: 100%; max-inline-size: 80rem; margin-inline: auto; padding-inline: clamp(1rem, 4cqi, 4rem); }
.panel-container { container: component / inline-size; }
.panel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); gap: clamp(.75rem, 2cqi, 1.5rem); }
@container component (inline-size < 34rem) { .panel-grid { grid-template-columns: minmax(0, 1fr); } }
main { min-inline-size: 0; }
@media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration: .01ms !important; scroll-behavior: auto !important; } }
```

## Cross-cutting quality gates
1. No horizontal scroll from 320 CSS px except purposely scrollable regions.
2. 400% zoom and 200% text remain usable and focusable.
3. RTL/LTR, touch, keyboard, reduced-motion and viewport changes retain task completion.

## Deep technique reference — all 26 features

### 01. `container-query-layout`

**Output / operation:** Build @container inline-size variants independent of device breakpoint.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/container-query-layout.md) · Skill `$ztx4-adaptive-responsive-container-query-layout`
### 02. `intrinsic-grid`

**Output / operation:** Use repeat(auto-fit,minmax(min(100%,...))) and allow long words to wrap without overflow.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/intrinsic-grid.md) · Skill `$ztx4-adaptive-responsive-intrinsic-grid`
### 03. `fluid-type-clamp`

**Output / operation:** Build modular fluid type scale with rem and clamp and test 400% zoom reflow.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/fluid-type-clamp.md) · Skill `$ztx4-adaptive-responsive-fluid-type-clamp`
### 04. `fluid-space-tokens`

**Output / operation:** Scale section/element spacing with clamp and sensible min/max.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/fluid-space-tokens.md) · Skill `$ztx4-adaptive-responsive-fluid-space-tokens`
### 05. `rtl-logical-properties`

**Output / operation:** Prefer inline-start/end, margin-inline and text-align:start over left/right assumptions.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/rtl-logical-properties.md) · Skill `$ztx4-adaptive-responsive-rtl-logical-properties`
### 06. `bidi-mixed-text`

**Output / operation:** Wrap filenames, numbers, URLs and English names with bdi and dir=auto when necessary.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/bidi-mixed-text.md) · Skill `$ztx4-adaptive-responsive-bidi-mixed-text`
### 07. `foldable-viewport-segments`

**Output / operation:** Avoid hinge with viewport segment APIs behind CSS @supports/@media and single-screen fallback.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/foldable-viewport-segments.md) · Skill `$ztx4-adaptive-responsive-foldable-viewport-segments`
### 08. `ultrawide-content-bounds`

**Output / operation:** Use max-inline-size and grid rails, not unreadably wide lines on 2560+ viewports.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/ultrawide-content-bounds.md) · Skill `$ztx4-adaptive-responsive-ultrawide-content-bounds`
### 09. `portrait-landscape-reflow`

**Output / operation:** Test height constraints and horizontal device rotation without clipped CTA.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/portrait-landscape-reflow.md) · Skill `$ztx4-adaptive-responsive-portrait-landscape-reflow`
### 10. `safearea-notch`

**Output / operation:** Use env(safe-area-inset-*) and proper viewport-fit, preserve minimum tap target.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/safearea-notch.md) · Skill `$ztx4-adaptive-responsive-safearea-notch`
### 11. `svh-lvh-dvh`

**Output / operation:** Use small/dynamic viewport units purposely and avoid jumpy fixed-height mobile hero.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/svh-lvh-dvh.md) · Skill `$ztx4-adaptive-responsive-svh-lvh-dvh`
### 12. `virtual-keyboard`

**Output / operation:** Keep focused input and submit button visible with viewport changes.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/virtual-keyboard.md) · Skill `$ztx4-adaptive-responsive-virtual-keyboard`
### 13. `pointer-hover-capability`

**Output / operation:** Use (hover:hover) and (pointer:fine) only for enhancements; touch is fully functional.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/pointer-hover-capability.md) · Skill `$ztx4-adaptive-responsive-pointer-hover-capability`
### 14. `keyboard-focus-order`

**Output / operation:** Ensure DOM focus follows visual hierarchy across reordering and drawers.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/keyboard-focus-order.md) · Skill `$ztx4-adaptive-responsive-keyboard-focus-order`
### 15. `zoom-400-reflow`

**Output / operation:** Meet WCAG reflow expectations in equivalent 320 CSS pixel layout at 400% zoom.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/zoom-400-reflow.md) · Skill `$ztx4-adaptive-responsive-zoom-400-reflow`
### 16. `font-scale-200`

**Output / operation:** Test increased text size and line-spacing overrides with no overlap.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/font-scale-200.md) · Skill `$ztx4-adaptive-responsive-font-scale-200`
### 17. `nested-sidebar-container`

**Output / operation:** Test identical card in narrow sidebar and full-width main content.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/nested-sidebar-container.md) · Skill `$ztx4-adaptive-responsive-nested-sidebar-container`
### 18. `carousel-touch-gesture`

**Output / operation:** Use directional gestures with keyboard and visible previous/next alternatives.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/carousel-touch-gesture.md) · Skill `$ztx4-adaptive-responsive-carousel-touch-gesture`
### 19. `3d-framing-mobile`

**Output / operation:** Adapt camera FOV/distance/content safety area, not simply shrink WebGL canvas.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/3d-framing-mobile.md) · Skill `$ztx4-adaptive-responsive-3d-framing-mobile`
### 20. `gpu-quality-profiles`

**Output / operation:** Select low/medium/high visual detail based on measured FPS and data/power settings.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/gpu-quality-profiles.md) · Skill `$ztx4-adaptive-responsive-gpu-quality-profiles`
### 21. `image-art-direction`

**Output / operation:** Use picture/source sizes and alternative crops to preserve subject across sizes.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/image-art-direction.md) · Skill `$ztx4-adaptive-responsive-image-art-direction`
### 22. `layout-shift-prevention`

**Output / operation:** Reserve image/media dimensions and avoid dynamic injected-height jumping.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/layout-shift-prevention.md) · Skill `$ztx4-adaptive-responsive-layout-shift-prevention`
### 23. `reduced-motion-mode`

**Output / operation:** Remove nonessential motion while maintaining layout, state feedback and content.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/reduced-motion-mode.md) · Skill `$ztx4-adaptive-responsive-reduced-motion-mode`
### 24. `reduced-data-mode`

**Output / operation:** Avoid unnecessary high-resolution video, 3D assets and animated textures.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/reduced-data-mode.md) · Skill `$ztx4-adaptive-responsive-reduced-data-mode`
### 25. `container-overflow-detection`

**Output / operation:** Automate overflow checks for body and nested responsive containers.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/container-overflow-detection.md) · Skill `$ztx4-adaptive-responsive-container-overflow-detection`
### 26. `responsive-bilingual-content`

**Output / operation:** Verify Persian/English text growth, RTL layout and localized number formatting.

**Implementation:** Implementation: intrinsic layout first, then container queries; clamp typographic scale; logical CSS; safe-area/svh fallback; change 3D framing not just canvas width.

**Proof:** Tests: 320..1920 width, narrow sidebar and main, 200% text/400% zoom, foldable hinge fallback, no overflow, keyboard and touch.

[Dedicated recipe](./adaptive-responsive/recipes/responsive-bilingual-content.md) · Skill `$ztx4-adaptive-responsive-responsive-bilingual-content`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [mdn-fold](https://developer.mozilla.org/en-US/docs/Web/API/Viewport_segments_API/Using)
- [wcag](https://www.w3.org/TR/WCAG22/)
