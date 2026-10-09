# Expert reference 12.03 — Product information architecture and usability: Concrete implementation

**Class:** locally authored implementation reference · **Area:** product-ux · **Lens:** implementation  
**Upstream documentation:** https://www.w3.org/WAI/WCAG22/

## Problem framing and scope

This module is used when a Codex agent must design, implement or review **product information architecture and usability** with particular emphasis on **concrete implementation**. The user-visible result must function without depending on an illustration or animation. Avoid treating documentation as a substitute for actual code review or browser evidence.

## Core engineering invariant

Map user goals to page hierarchy, define the interaction contract per control, validate loading/empty/error/success states, and test comprehension at zoom and RTL.

**Antipattern to prevent:** Beautiful transitions cannot compensate for broken checkout, ambiguous CTA or unreadable pricing.

## Procedure — apply in the target codebase

1. Inspect the existing UI state, data flow and dependency versions. Preserve existing functionality and run its baseline tests before edits.
2. Build a written context map for product-ux; explicitly define the desired behavior for the implementation concern. Implement the smallest semantic working path first, then layer animation and polish; use real data and scoped selectors.
3. Implement a small vertical slice using semantic markup and scoped styles first. Then introduce the relevant animation, geometry or interaction runtime if measurable value exists.
4. Apply implementation-specific safeguards: For product UX, provide user journey, content matrix, trigger/action/error map, focus sequence, measurement event and truthful empty-state copy. Never invent features, adoption numbers or testimonials.
5. Test the updated component at 320/390/768/1024/1440 CSS px with Persian RTL and English LTR. Check keyboard focus, touch, reduced motion, offline fallback, zoom and long text.
6. Record observations and remediation. A successful build does not by itself prove correct design or interaction.

## Minimal technical anchor

```javascript
// Model interaction: idle -> loading -> success | error -> retry.
// Every button has a documented outcome.
```

This is a technical anchor; expand and integrate it with the actual framework and installed library API rather than pasting it blindly.

## Verification protocol and evidence

- **Functional:** Run typecheck/build and inspect actual interactive behavior.
- **Visual:** capture mobile and desktop screenshots in at least two content lengths; track layout overflow and changes after font loading.
- **Accessibility:** keyboard Tab/Shift+Tab, Escape where relevant, visible focus, noncolor state indicators, readable heading order and logical reading flow.
- **Motion:** identify all owners of transform/opacity/position, play and reverse, interrupt mid-transition and check state restoration.
- **Runtime:** check browser console, network assets, listeners, render loops, React unmount and failure fallback.
- **Performance:** measure worst credible target, not only a modern laptop. Document FPS/frame time for animation and memory for Three.js.
- **Source compliance:** verify official documentation, pinned versions and licenses before importing external dependencies.

## Concrete deliverables for the agent

1. Changed source files and the entrypoint; 2. the implementation contract; 3. implementation diff; 4. test commands and results; 5. screenshot or an explicit note if no browser run occurred; 6. unresolved risks, each labeled with next verification step.

## Relationship to the complete pack

Link the per-pattern implementations at `patterns/implementation-atlas/`, the former OMEGA chapters at `skills/perfect-ai-master/references/`, VibeFarsi's original 279 local specs, and the relevant source catalog. The original Anime.js homepage's proprietary visual assets are not implicitly bundled.
