---
name: ztx14-best-animation-performance-trace
description: Use browser performance traces and rendering diagnostics to isolate jank in pointer and SVG interactions.
---

# Profile animation in the browser instead of guessing

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Reports of stutter, frame drops, high CPU/GPU, delayed cursor-follow, or animation that degrades on mobile.

## Procedure
1. Reproduce one specific gesture with a repeatable viewport, browser, and input path.
2. Record a Performance trace while the animation runs; inspect scripting, style/layout, paint, compositing, long tasks, and dropped frames.
3. Check whether the bottleneck is per-event React work, SVG node count, geometry calculations, forced layout, expensive filters/shadows, or another task.
4. Change one variable at a time and re-record the same interaction.
5. Prefer transform/opacity when visually suitable, but do not blindly force layers with `will-change`; verify memory and rendering impact.
6. Report the actual trace evidence, tested hardware/browser, and any remaining uncertainty.

## Avoid
- Do not claim a performance improvement from code inspection alone.
- Do not add `will-change` to every animated node.
- Do not infer a 120 FPS result from a normal 60 Hz display without the appropriate measurement setup.

## Acceptance checks
- [ ] A reproducible baseline and after trace exist.
- [ ] The measured bottleneck aligns with the change.
- [ ] Visual behavior remains correct at supported breakpoints.

## Primary references
- https://developer.chrome.com/docs/devtools/performance
- https://web.dev/articles/animations-guide
- https://motion.dev/docs/react-motion-value

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
