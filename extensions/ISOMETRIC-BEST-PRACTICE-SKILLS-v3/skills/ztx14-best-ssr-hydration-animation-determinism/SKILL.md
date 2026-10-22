---
name: ztx14-best-ssr-hydration-animation-determinism
description: Avoid hydration mismatches and first-paint jumps when animated React/SVG components are server-rendered.
---

# Keep initial animation and SVG markup SSR-safe

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Next.js or other SSR/hydrated React projects, random decorative layouts, measurement-dependent transforms, and first-load transitions.

## Procedure
1. Identify which parts render on the server and which require browser-only measurement, pointer listeners, or animation runtime.
2. Ensure server and first client render agree on element structure, keys, text, and initial semantic state.
3. Do not read `window`, pointer coordinates, element dimensions, or random values during server render.
4. Perform layout measurement in an appropriate client-side lifecycle and avoid an animated incorrect placeholder that visibly jumps after hydration.
5. Use deterministic seeds/data for decorative geometry and stable identifiers for SVG defs and shared IDs.
6. Test production build and hydration console output with the page loaded directly and navigated client-side.

## Avoid
- Do not suppress hydration warnings to hide real mismatch.
- Do not generate random IDs or shapes independently on server and client.
- Do not assume adding `useEffect` alone eliminates all visual layout shifts.

## Acceptance checks
- [ ] No hydration mismatch warnings.
- [ ] Initial accessible content is valid before animation starts.
- [ ] Direct load and client navigation behave consistently.

## Primary references
- https://react.dev/reference/react/useEffect
- https://nextjs.org/docs/app/building-your-application/rendering/client-components
- https://motion.dev/docs/react

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
