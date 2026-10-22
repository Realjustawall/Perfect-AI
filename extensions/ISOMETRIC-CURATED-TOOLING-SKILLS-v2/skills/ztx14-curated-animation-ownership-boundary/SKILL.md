---
name: ztx14-curated-animation-ownership-boundary
description: Prevent conflicting animation engines by assigning each animated SVG/DOM property and state transition to one owner.
---

# Keep one owner for every animated property

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Core rule
For each element, list animated properties and their owner before editing: Isometric engine, CSS, Motion, GSAP, Rive, or application state. A property must not be continuously written by two engines.

## Workflow
1. Inspect the installed component and `lib/isometric/` source. The site documents an engine with projection, mesh/picking, springs, and a shared animation loop.
2. Create a short ownership table, e.g. `mesh coordinates → Isometric`, `button hover scale → CSS or Motion`, `long scroll timeline → GSAP`, `authored mascot state machine → Rive`.
3. Use the existing Isometric engine for its figures' pointer-to-geometry response. Add Motion only for adjacent DOM/UI behavior or a standalone overlay that the Isometric engine does not own.
4. Never animate the same `transform`, SVG path, point list, or inline style through both a React render and an imperative loop. If a library is already bound to that property, route new targets through its API.
5. Document unmount cleanup and transition interruption rules for imperative owners.

## Acceptance criteria
- One deterministic owner per animated property.
- No visual jitter from competing transforms or repeated state writes.
- Interaction still works after re-entry, interruption, resize, and unmount.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [motion-spring](https://motion.dev/docs/react-use-spring)
- [react-effect](https://react.dev/reference/react/useEffect)
- [web-animation-performance](https://web.dev/articles/animations-guide)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
