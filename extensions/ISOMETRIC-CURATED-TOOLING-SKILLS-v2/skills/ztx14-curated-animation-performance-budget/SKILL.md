---
name: ztx14-curated-animation-performance-budget
description: Prevent interaction complexity from scaling into frame drops by setting measurable budgets and degradation paths.
---

# Set a budget for frames, geometry and event work

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Budget areas
- Main-thread work per input/frame; pointer handlers and layout reads.
- Count of independently animated objects, SVG nodes/paths, and simultaneous effects.
- Work performed while idle or offscreen.
- DOM/React renders caused by pointer movement.
- GPU-heavy filters, high DPR and asset loading.

## Workflow
1. Establish a baseline on a documented target device/browser and representative scene.
2. Record frame pacing and long tasks under pointer movement, pan/zoom and scene idle—not only startup Lighthouse output.
3. Define thresholds appropriate to the application rather than claiming universal FPS. Treat interaction latency and thermal/battery behavior as product criteria.
4. Add progressive quality tiers: lower detail/less parallax, fewer simultaneous particles, or static fallback under load, while preserving semantic content.
5. Use a shared loop and offscreen sleep if the engine supports them; avoid per-element loops.
6. Put the budget in a repeatable test/report so future scene changes are compared against it.

## Primary references
- [web-animation-performance](https://web.dev/articles/animations-guide)
- [r3f-perf](https://github.com/pmndrs/react-three-fiber/blob/master/docs/advanced/scaling-performance.mdx)
- [isometric](https://isometric.buildlab.in/llms.txt)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
