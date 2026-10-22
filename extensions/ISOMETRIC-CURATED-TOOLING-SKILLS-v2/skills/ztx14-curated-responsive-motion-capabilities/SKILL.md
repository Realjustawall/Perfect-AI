---
name: ztx14-curated-responsive-motion-capabilities
description: Scale interaction intensity using the container size, pointer capability, reduced-motion preference, orientation and device performance.
---

# Adapt motion to viewport and input capabilities

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Design dimensions
Responsive animation is not just breakpoints. Consider: viewport/container width, available height, `hover`/`pointer` capabilities, reduced-motion preference, orientation, device pixel ratio, visibility and current frame budget.

## Implementation plan
1. Use CSS media queries for purely visual layout changes; Tailwind responsive variants remain the first tool for layout.
2. Use `matchMedia('(pointer: coarse)')` and `matchMedia('(hover: hover)')` to disable or replace cursor-only behavior. A device can support more than one input type, so do not classify solely by user-agent.
3. Prefer `ResizeObserver` when the responsive calculation depends on a component's container rather than the whole viewport.
4. Define named motion profiles (full, reduced, static) instead of scattering arbitrary multipliers throughout handlers.
5. On orientation/size change, recompute coordinate mapping and cancel/rebase active drags; never jump to stale coordinates.
6. Avoid testing only device emulation; check keyboard and actual touch hardware where practical.

## Primary references
- [tailwind-responsive](https://tailwindcss.com/docs/responsive-design)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [resize-observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
