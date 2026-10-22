---
name: ztx14-curated-resizeobserver-container-adaptation
description: Use ResizeObserver carefully when a component's geometry and hit testing depend on its own container dimensions.
---

# Adapt isometric layout to its container, not just the viewport

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## When to use
Use when a figure is embedded in a resizable card, side panel, split view, modal, or dashboard tile whose size can change independently of the window.

## Procedure
1. Prefer CSS layout/container queries for purely visual responsive changes. Use `ResizeObserver` only when JavaScript geometry, scale, projection or interaction coordinates genuinely depend on measured size.
2. Observe a stable root element and read the relevant content/border box dimensions consistently.
3. Batch measurements and state updates; do not update style synchronously in a way that causes a resize-observer loop.
4. Handle initial zero-size states and avoid dividing by zero. Recompute scale and coordinate mapping together.
5. Disconnect on cleanup and debounce only if profiling proves necessary; ResizeObserver already reports changes efficiently.
6. Re-run hit testing and screenshot tests at narrow, wide, short-height and container-only resize cases.

## Primary references
- [resize-observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
- [tailwind-responsive](https://tailwindcss.com/docs/responsive-design)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
