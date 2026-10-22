---
name: ztx14-best-offscreen-motion-pause
description: Use visibility and intersection signals to suspend nonessential animation work for offscreen scenes and hidden tabs.
---

# Pause expensive animation when it is not visible

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Large SVG worlds, animated illustrations below the fold, interactive scenes inside tabs, and expensive decorative motion.

## Procedure
1. Identify whether the animation is meaningful while offscreen. Stop or lower work only when pausing preserves expected state.
2. Use IntersectionObserver for visibility entry/exit and `visibilitychange` for hidden-tab state; these solve different visibility conditions.
3. Keep observer decisions separate from semantic application state. On re-entry, resume from a valid deterministic state rather than jumping or double-starting.
4. Coordinate with the existing Isometric frame loop; do not create a second requestAnimationFrame loop.
5. Unobserve/disconnect on cleanup and avoid creating observers during render.
6. Test rapid tab switching and viewport entry/exit to verify only one loop is active.

## Avoid
- Do not reset user-owned simulation state merely because it leaves the viewport.
- Do not assume `IntersectionObserver` detects a tab being backgrounded.
- Do not pause essential status/alert information without a static alternative.

## Acceptance checks
- [ ] Offscreen and hidden-tab work is reduced where safe.
- [ ] Re-entry does not duplicate loops or reset important state.
- [ ] Observers and callbacks are cleaned up.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event
- https://react.dev/reference/react/useEffect

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
