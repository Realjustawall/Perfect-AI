---
name: ztx14-best-motion-svg-path-and-viewbox
description: Create SVG line-drawing and camera-like framing effects while preserving viewBox, hit regions, labels, and layout stability.
---

# Animate SVG drawing and viewBox safely

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Isometric diagram reveals, route pulses, line-draw illustrations, and SVG camera framing.

## Procedure
1. Keep the `viewBox` coordinate system stable and ensure the SVG has explicit dimensions or a predictable responsive container.
2. For line drawing, prefer supported path-length animation rather than repeatedly rewriting path geometry.
3. Animate `viewBox` only when the whole scene is intended to zoom/pan; use a separate camera transform if that is the engine’s established model.
4. Keep interaction hit regions separate from decorative stroke paths; the visible line may be too thin to target reliably.
5. Check stroke scaling, line caps, text baselines, and clipping at small viewport sizes.
6. Disable or simplify large zoom/pan movement for reduced-motion users.

## Avoid
- Do not rebuild path strings every frame when a transform or dash offset can achieve the result.
- Do not let a decorative overlay capture pointer events unexpectedly.
- Do not mix viewBox updates with a second camera transform without a coordinate contract.

## Acceptance checks
- [ ] SVG scales at tested breakpoints without clipped geometry.
- [ ] Hit testing still targets semantic objects.
- [ ] The final drawing state is deterministic.

## Primary references
- https://motion.dev/docs/react-svg-animation
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
- https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
