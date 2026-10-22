---
name: ztx14-curated-gsap-responsive-scroll
description: Use GSAP timelines and ScrollTrigger for complex coordinated scroll storytelling, with breakpoint-specific setup that is reverted cleanly.
---

# GSAP scroll choreography with responsive cleanup

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Choose GSAP when
Several elements need a synchronized sequence, pinning, scrubbing, labels, or robust timeline control. For a simple hover or a single fade, prefer CSS or Motion.

## Pattern
```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
mm.add("(min-width: 800px) and (prefers-reduced-motion: no-preference)", () => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: ".story", start: "top 75%", end: "bottom 25%", scrub: 0.5 }
  });
  tl.from(".story__layer", { y: 24, opacity: 0, stagger: 0.08 });
});
// In a framework, return/trigger mm.revert() from the component cleanup.
```

## Guardrails
- Scope selectors to the component root; avoid document-wide selectors that animate unrelated pages.
- Ensure setup and cleanup are paired under React lifecycle changes.
- Define a mobile/non-pinned fallback and a reduced-motion path.
- Refresh measurements after relevant layout changes; do not force refresh every render.
- Never let GSAP and another library both own the same transform on one node.

## Primary references
- [gsap-matchmedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/)
- [gsap-scrolltrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [react-effect](https://react.dev/reference/react/useEffect)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
