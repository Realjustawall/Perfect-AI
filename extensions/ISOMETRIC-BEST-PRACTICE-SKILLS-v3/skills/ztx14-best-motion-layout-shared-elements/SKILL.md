---
name: ztx14-best-motion-layout-shared-elements
description: Use layout animation for reorder, resize, and shared-element transitions without manually animating competing position values.
---

# Animate layout changes and shared visual identity

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Lists, tabs, selected object details, cards moving between regions, and UI that changes layout after selection.

## Procedure
1. First make the semantic state and final layout correct without animation.
2. Use Motion layout animation when an element’s position/size changes as a consequence of normal layout.
3. Use a stable shared `layoutId` for a visual element that transitions between two mutually exclusive locations.
4. Group related layout changes if measurement and animation must be coordinated.
5. Inspect transformed ancestors, overflow clipping, borders, and scaled containers; these often cause visual distortion or clipping.
6. Use reduced-motion policy to remove or simplify spatial movement while preserving the final state.

## Avoid
- Do not manually animate `top/left/width/height` at the same time as a layout engine controls the element.
- Do not reuse one `layoutId` for multiple simultaneously mounted unrelated elements.
- Do not add layout animation when a simple opacity transition is clearer and cheaper.

## Acceptance checks
- [ ] Final DOM layout is correct independent of motion.
- [ ] No duplicate shared IDs or overlapping transition owners.
- [ ] Reduced-motion produces the same semantic result.

## Primary references
- https://motion.dev/docs/react-layout-animations
- https://motion.dev/docs/react

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
