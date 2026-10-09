# Expert reference 02.10 — Adaptive responsive engineering: Test evidence

**Class:** locally authored implementation reference · **Area:** responsive-systems · **Lens:** testing  
**Upstream documentation:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries

## Problem framing and scope

This module is used when a Codex agent must design, implement or review **adaptive responsive engineering** with particular emphasis on **test evidence**. The user-visible result must function without depending on an illustration or animation. Avoid treating documentation as a substitute for actual code review or browser evidence.

## Core engineering invariant

Measure parent inline size via container queries, typography via clamp(), screen regions via safe-area environment units, and script layout changes via ResizeObserver.

**Antipattern to prevent:** Using fixed breakpoints alone fails embedded/sidebar placements and 400% zoom.

## Procedure — apply in the target codebase

1. Inspect the existing UI state, data flow and dependency versions. Preserve existing functionality and run its baseline tests before edits.
2. Build a written context map for responsive-systems; explicitly define the desired behavior for the testing concern. Create unit, integration, accessibility and viewport tests appropriate to actual integration code; retain screenshots and console logs.
3. Implement a small vertical slice using semantic markup and scoped styles first. Then introduce the relevant animation, geometry or interaction runtime if measurable value exists.
4. Apply implementation-specific safeguards: For layouts, capture boundingClientRect measurements, intrinsic sizes, min-width:0 constraints, container query thresholds, typography wrap, keyboard viewport changes, 400% zoom and safe areas. Do not clamp browser zoom by changing viewport meta.
5. Test the updated component at 320/390/768/1024/1440 CSS px with Persian RTL and English LTR. Check keyboard focus, touch, reduced motion, offline fallback, zoom and long text.
6. Record observations and remediation. A successful build does not by itself prove correct design or interaction.

## Minimal technical anchor

```css
@container (min-width: 34rem) { .cards { grid-template-columns:repeat(2,minmax(0,1fr)) } }
```

This is a technical anchor; expand and integrate it with the actual framework and installed library API rather than pasting it blindly.

## Verification protocol and evidence

- **Functional:** Report exactly which tests executed and their failures.
- **Visual:** capture mobile and desktop screenshots in at least two content lengths; track layout overflow and changes after font loading.
- **Accessibility:** keyboard Tab/Shift+Tab, Escape where relevant, visible focus, noncolor state indicators, readable heading order and logical reading flow.
- **Motion:** identify all owners of transform/opacity/position, play and reverse, interrupt mid-transition and check state restoration.
- **Runtime:** check browser console, network assets, listeners, render loops, React unmount and failure fallback.
- **Performance:** measure worst credible target, not only a modern laptop. Document FPS/frame time for animation and memory for Three.js.
- **Source compliance:** verify official documentation, pinned versions and licenses before importing external dependencies.

## Concrete deliverables for the agent

1. Changed source files and the entrypoint; 2. the testing contract; 3. implementation diff; 4. test commands and results; 5. screenshot or an explicit note if no browser run occurred; 6. unresolved risks, each labeled with next verification step.

## Relationship to the complete pack

Link the per-pattern implementations at `patterns/implementation-atlas/`, the former OMEGA chapters at `skills/perfect-ai-master/references/`, VibeFarsi's original 279 local specs, and the relevant source catalog. The original Anime.js homepage's proprietary visual assets are not implicitly bundled.
