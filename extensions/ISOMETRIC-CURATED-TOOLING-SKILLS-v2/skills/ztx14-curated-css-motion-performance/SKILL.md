---
name: ztx14-curated-css-motion-performance
description: Review CSS and DOM animation costs to avoid layout thrash, paint-heavy effects, and excessive GPU layers.
---

# Keep UI animation on compositor-friendly properties

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Optimization order
1. Profile first with DevTools; distinguish dropped frames from React rerenders, geometry cost, long tasks, and network/layout shifts.
2. Prefer `transform` and `opacity` for simple movement/fades. Inspect costly blur, filters, box shadows, SVG path changes and animated layout dimensions individually.
3. Batch geometry reads before style writes. Avoid read-write-read cycles inside every pointer event.
4. Do not blanket-apply `will-change`; use it only for measured cases and remove it when the interaction ends.
5. Clamp amplitude and particle/SVG node counts on small screens or slower devices.
6. Honor reduced motion and reduce idle rendering before degrading visual quality.

## Evidence
Record browser/device, tested scenario, frame rate or trace observation, and before/after behavior. Do not promise 60 FPS unless it was measured on a stated device and scenario.

## Primary references
- [web-animation-performance](https://web.dev/articles/animations-guide)
- [r3f-perf](https://github.com/pmndrs/react-three-fiber/blob/master/docs/advanced/scaling-performance.mdx)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
