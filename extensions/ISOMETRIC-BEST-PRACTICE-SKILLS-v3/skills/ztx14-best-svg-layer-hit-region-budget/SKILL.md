---
name: ztx14-best-svg-layer-hit-region-budget
description: Keep large SVG scenes responsive by separating decorative geometry from stable interaction targets and limiting unnecessary live nodes.
---

# Optimize SVG layer count and semantic hit regions

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Large isometric worlds, SVG dashboards, dense diagrams, complex outlines, and object picking that slows as scene complexity grows.

## Procedure
1. Profile first to learn whether hit testing, DOM node count, path complexity, rendering, or application state is the dominant cost.
2. Separate visible decorative paths from semantic interaction wrappers or hit regions; let decoration opt out of pointer targeting when appropriate.
3. Avoid one high-frequency React component per decorative vertex when the geometry can be represented as a single path or a stable set of layers.
4. Use stable object IDs to connect a hit region to its semantic object rather than inferring identity from SVG child order.
5. Keep keyboard focus targets and touch targets large enough even when the visible outline is thin.
6. Measure before considering canvas/WebGL; migrating renderers changes accessibility, hit testing, and debugging requirements.

## Avoid
- Do not make every path independently interactive by default.
- Do not solve tiny targets by arbitrarily broad overlays that block neighboring objects.
- Do not reduce node count by removing semantic labels or accessible actions.

## Acceptance checks
- [ ] The number of interactive nodes reflects actual objects, not each decorative fragment.
- [ ] Picking remains deterministic where objects overlap.
- [ ] Accessibility and hit testing are retested after geometry optimizations.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointer-events
- https://developer.chrome.com/docs/devtools/performance

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
