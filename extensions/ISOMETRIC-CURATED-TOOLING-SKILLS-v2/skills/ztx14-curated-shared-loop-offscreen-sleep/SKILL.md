---
name: ztx14-curated-shared-loop-offscreen-sleep
description: Prevent wasteful perpetual animation loops and coordinate offscreen/idle rendering with the existing Isometric engine.
---

# Preserve one frame loop and sleep when motion is idle

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Site-specific rule
Isometric's documented engine has a shared animation loop that sleeps offscreen. Inspect the installed version before writing a loop; do not create a competing `requestAnimationFrame` per figure.

## Workflow
1. Identify which loop drives each animated property and where it is started/stopped.
2. Subscribe new behavior to the existing scheduler if the engine exposes a supported interface; otherwise prefer library-managed motion for a separate DOM element.
3. Ensure idle motion reaches a rest state and does not continue scheduling frames indefinitely.
4. Pause or lower work when the document is hidden and when scenes are offscreen, using the engine's established policy.
5. Resume from current time/state without a huge catch-up delta after a tab becomes active.
6. Measure active and idle CPU/frame behavior; only optimize after collecting evidence.

## Avoid
Multiple loops with unsynchronized clocks, adding IntersectionObservers for every child when a shared engine already manages visibility, and retaining unmounted objects in a scheduler list.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [react-effect](https://react.dev/reference/react/useEffect)
- [r3f-perf](https://github.com/pmndrs/react-three-fiber/blob/master/docs/advanced/scaling-performance.mdx)
- [web-animation-performance](https://web.dev/articles/animations-guide)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
