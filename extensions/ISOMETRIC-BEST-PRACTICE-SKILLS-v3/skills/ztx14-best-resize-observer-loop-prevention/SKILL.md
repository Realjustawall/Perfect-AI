---
name: ztx14-best-resize-observer-loop-prevention
description: Adapt an isometric scene to its container without causing resize-loop warnings or read/write layout churn.
---

# Use ResizeObserver without layout feedback loops

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Responsive SVG viewBox, canvas sizing, embedded panels, container-aware motion, and split-pane layouts.

## Procedure
1. Observe the actual container whose size drives the scene, not only the window viewport.
2. Read the entry’s content/border box measurements rather than repeatedly calling layout APIs in multiple components.
3. Make the observer update a distinct output (such as a scene scale state) instead of directly changing the same measured dimension in a feedback loop.
4. If DOM writes are needed, batch them with requestAnimationFrame and compare old/new values to avoid no-op writes.
5. Disconnect the observer on cleanup and guard against callbacks after unmount.
6. Test a growing/shrinking container, split-pane drag, orientation change, and browser zoom; watch the console for resize-loop errors.

## Avoid
- Do not set the observed element width to a function of its current width with no stable target.
- Do not create one observer per child if a shared observer can safely serve the same layout owner.
- Do not assume window resize covers parent layout changes.

## Acceptance checks
- [ ] No ResizeObserver loop errors during tested layout changes.
- [ ] The output converges to a stable size.
- [ ] Observer cleanup is verified.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
- https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
