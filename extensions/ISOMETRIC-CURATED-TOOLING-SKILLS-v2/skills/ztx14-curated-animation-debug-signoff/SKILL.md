---
name: ztx14-curated-animation-debug-signoff
description: Troubleshoot jitter, stuck hover, frame drops, disappearing SVG faces, or inconsistent animation using a reproducible trace and evidence-based sign-off.
---

# Debug animation through state traces, not guesswork

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Reproduction record
For every bug, log browser/device, viewport, pointer type, exact steps, initial/current state, reduced-motion setting, expected result, and actual result.

## Diagnosis order
1. Establish whether the failure is event delivery, coordinate conversion, picking, state machine, scheduler, rendering, CSS/layout, or asset/runtime.
2. Isolate one interaction and one animation owner; temporarily reduce the scene to one figure or one component.
3. Check stale frame callbacks, multiple owners for one property, un-cleared hover state, `pointercancel`, resize mismatch and overlapping hit regions.
4. For performance, gather a trace/profile before changing architecture. For visual defects, compare a stable screenshot and inspect SVG path order, clipping and hidden-face rules.
5. Fix the narrow root cause and add a regression check matching the reproduction.

## Report format
`Reproduction → cause supported by evidence → minimal change → tests actually run → known residual risk`. Distinguish observed facts from hypotheses.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [playwright-snapshots](https://playwright.dev/docs/test-snapshots)
- [playwright-page](https://playwright.dev/docs/api/class-page)
- [web-animation-performance](https://web.dev/articles/animations-guide)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
