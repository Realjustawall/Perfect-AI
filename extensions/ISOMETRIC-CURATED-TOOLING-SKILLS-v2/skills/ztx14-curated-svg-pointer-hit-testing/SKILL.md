---
name: ztx14-curated-svg-pointer-hit-testing
description: Debug SVG and projected-geometry hit testing by separating visible outlines from semantic interaction hit regions.
---

# Reliable pointer picking for SVG and isometric figures

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Investigate in this order
1. Identify whether picking is native SVG hit testing or Isometric engine picking. Avoid adding a second picking system before identifying the existing one.
2. Check the rendered SVG `viewBox`, CSS transforms, element bounding box, `pointer-events`, stroke widths, and whether transparent shapes block input.
3. If thin line art is hard to target, add or reuse a transparent, explicitly labeled hit region rather than making the visible stroke misleadingly thick.
4. Keep hit region and visual geometry in the same coordinate transform. Recompute after scale/resize, and avoid comparing viewport coordinates directly against untransformed SVG coordinates.
5. For depth overlap, inspect engine picking order and hidden-face rules; do not rely on DOM z-index to solve a projected geometry problem.
6. Verify pointer leave, pointer cancel, fast crossing, overlapping controls, and keyboard equivalent.

## Do not
- Attach broad listeners to every path if one root handler can dispatch by semantic target.
- Use hover as the only way to expose the target or its meaning.
- Change geometry before confirming the coordinate space is the actual bug.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [registry](https://isometric.buildlab.in/r/registry.json)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
