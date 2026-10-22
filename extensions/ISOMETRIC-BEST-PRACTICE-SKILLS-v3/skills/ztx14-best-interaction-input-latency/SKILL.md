---
name: ztx14-best-interaction-input-latency
description: Reduce input delay by keeping pointer handlers lightweight and measuring end-to-end interaction responsiveness.
---

# Keep pointer feedback responsive under main-thread work

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Delayed hover/highlight, cursor-follow lag, heavy SVG picking, menus that open late, and motion that degrades during app work.

## Procedure
1. Separate input acquisition from expensive semantic updates. Use motion values or a small local gesture state for immediate visual response.
2. Batch high-frequency pointer processing at most once per animation frame when custom processing is needed; preserve the latest relevant coordinates.
3. Do geometry/layout reads before style writes, and cache measurements until resize/scroll invalidates them.
4. Keep expensive state updates, data fetching, logging, and React tree changes out of pointermove handlers.
5. Use browser traces and supported responsiveness metrics to distinguish input delay from script execution and presentation delay.
6. Re-test on a lower-powered device and with a larger number of SVG elements.

## Avoid
- Do not debounce direct visual feedback so much that the cursor visibly trails.
- Do not perform synchronous layout reads after writing styles.
- Do not add a worker/canvas rewrite without profiling evidence.

## Acceptance checks
- [ ] Pointer feedback remains immediate during ordinary application work.
- [ ] The main source of interaction delay is identified with evidence.
- [ ] High-frequency handlers do bounded work.

## Primary references
- https://web.dev/articles/optimize-inp
- https://motion.dev/docs/react-motion-value
- https://developer.chrome.com/docs/devtools/performance

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
