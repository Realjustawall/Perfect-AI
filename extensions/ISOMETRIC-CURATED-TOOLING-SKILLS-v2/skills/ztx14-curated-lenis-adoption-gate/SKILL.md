---
name: ztx14-curated-lenis-adoption-gate
description: Evaluate Lenis for intentional smooth scrolling and scroll-synchronized storytelling without degrading native accessibility or mobile behavior.
---

# Use Lenis only when native scrolling is insufficient

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Do not add by default
Native scrolling already works with keyboard, anchors, sticky positioning, and browser expectations. Adopt Lenis only when the product genuinely needs a synchronized smooth-scroll model or coordinated scroll animation.

## Adoption checklist
- Verify project/browser requirements and read Lenis limitations for the current version.
- Decide whether `ReactLenis` owns the loop or an existing shared frame loop will call `lenis.raf(time)`; never do both.
- If pairing with GSAP ScrollTrigger, follow the current official integration rather than wiring ad hoc scroll handlers.
- Confirm anchor links, focus jumps, browser history, nested scroll containers, iframe interactions, Safari and low-power mode.
- Test touch behavior before enabling synchronization options that can alter touch scroll.
- Ensure disabling Lenis returns a usable native scroll page.

## Exit criteria
If the feature has no measurable need for smoothing or synchronization, remove the dependency and use native scrolling plus CSS/Motion.

## Primary references
- [lenis](https://github.com/darkroomengineering/lenis)
- [lenis-react](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md)
- [gsap-scrolltrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
