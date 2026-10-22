---
name: ztx14-best-scroll-animation-ownership
description: Choose native CSS, Motion useScroll, or GSAP ScrollTrigger based on scroll choreography complexity and fallback requirements.
---

# Select one scroll-animation owner and preserve native scroll

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Parallax, progress indicators, scroll reveals, sticky panels, and multi-section narratives.

## Procedure
1. For a basic progress bar or simple scroll-progress mapping, consider CSS scroll-driven animation where support and fallback meet requirements.
2. For React-linked values, use Motion `useScroll` and derived Motion values when the state belongs in the component.
3. For multi-stage timelines, pinned panels, scrubbed sequences, or coordinated sections, consider GSAP ScrollTrigger.
4. Keep native page scrolling as the default; add a smooth-scroll library only when a concrete interaction need justifies the change.
5. Ensure refresh, anchor navigation, history navigation, lazy-loaded content, and responsive layout changes resynchronize the animation.
6. Use explicit reduced-motion handling and a no-animation fallback.

## Avoid
- Do not have Motion, GSAP, and a smooth-scroll package all drive the same scroll progress.
- Do not hijack wheel/touch behavior for a decorative effect.
- Do not assume all scroll-timeline APIs are supported by every target browser.

## Acceptance checks
- [ ] The scroll source-of-truth is singular.
- [ ] Keyboard, anchor, and touch scrolling remain usable.
- [ ] Fallback behavior is tested.

## Primary references
- https://motion.dev/docs/react-use-scroll
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
