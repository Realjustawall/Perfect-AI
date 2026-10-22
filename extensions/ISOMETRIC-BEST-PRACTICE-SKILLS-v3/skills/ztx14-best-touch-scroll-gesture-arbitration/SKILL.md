---
name: ztx14-best-touch-scroll-gesture-arbitration
description: Design mobile interactions that do not trap vertical scrolling or turn a hover-only action into an unusable touch gesture.
---

# Resolve drag versus page-scroll gesture conflicts

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Touch controls for panning/zooming a world, interactive SVG, carousels, draggable isometric components, and stylus support.

## Procedure
1. Identify the intended gesture axes and whether the page should retain vertical or horizontal scrolling.
2. Use CSS `touch-action` at the smallest element boundary that must claim a gesture; test the exact interaction on touch hardware/emulation.
3. Do not depend on hover feedback for critical functionality: provide tap, focus, or explicit control equivalents.
4. Define what happens when a second finger appears, browser zoom begins, the page scrolls, or pointercancel fires.
5. Check mobile Safari/Chromium, portrait and landscape, coarse pointer, and keyboard fallback.
6. Give users a discoverable reset/exit control for modes that alter pointer behavior.

## Avoid
- Do not disable all touch gestures globally.
- Do not use `preventDefault` on every pointermove without a demonstrated need.
- Do not make drag the only way to reach or reorder important data.

## Acceptance checks
- [ ] Page scrolling and component gestures do not fight.
- [ ] Critical actions have a tap or keyboard alternative.
- [ ] Cancellation returns the component to a valid state.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events
- https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
- https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
