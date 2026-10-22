---
name: ztx14-curated-react-animation-lifecycle
description: Make imperative animation setup resilient to React Strict Mode, remounts, dependency changes, and hot reload by implementing symmetric cleanup.
---

# React lifecycle safety for animation and browser listeners

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Inspect
Locate every effect that creates a frame loop, observer, pointer/scroll listener, timer, timeline, subscription or animation control. Note who owns its lifetime.

## Contract
- Effect setup creates one unit of work; cleanup fully reverses that exact work.
- Store requestAnimationFrame ids and cancel them. Remove the same listener function and matching options. Disconnect observers. Kill/revert timelines where applicable.
- Avoid stale closures: use dependencies, refs, or the selected library's documented event hook appropriately.
- Do not update React state on every raw pointer frame when a motion value/ref is sufficient.
- Make start/stop idempotent. React Strict Mode's extra development setup-cleanup cycle should not duplicate listeners or motion loops.
- Do not disable Strict Mode to hide a cleanup bug.

## Verification
Mount, unmount, remount, update dependencies, switch routes, resize, and test development Strict Mode. Check listener/loop counts and verify there is no movement after unmount.

## Primary references
- [react-effect](https://react.dev/reference/react/useEffect)
- [react-strictmode](https://react.dev/reference/react/StrictMode)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
