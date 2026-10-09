# Expert reference 07.12 — Component architecture and semantic tokens: Refactoring and lifecycle

**Class:** locally authored implementation reference · **Area:** design-systems · **Lens:** maintenance  
**Upstream documentation:** https://ui.shadcn.com/docs

## Problem framing and scope

This module is used when a Codex agent must design, implement or review **component architecture and semantic tokens** with particular emphasis on **refactoring and lifecycle**. The user-visible result must function without depending on an illustration or animation. Avoid treating documentation as a substitute for actual code review or browser evidence.

## Core engineering invariant

Create contract-based components with states, variants, container behavior, semantic palette, spacing, typography and documented composition boundaries.

**Antipattern to prevent:** Huge boolean prop matrices and component-wide selectors make a system brittle and theme changes unsafe.

## Procedure — apply in the target codebase

1. Inspect the existing UI state, data flow and dependency versions. Preserve existing functionality and run its baseline tests before edits.
2. Build a written context map for design-systems; explicitly define the desired behavior for the maintenance concern. Specify resource ownership, source-of-truth docs, deprecation boundaries and cleanup for event/timing/render resources.
3. Implement a small vertical slice using semantic markup and scoped styles first. Then introduce the relevant animation, geometry or interaction runtime if measurable value exists.
4. Apply implementation-specific safeguards: For design tokens, create primitive ramps and semantic role tokens, component-level states and export styles. Evaluate systematic variants using type unions or composition rather than dozens of booleans.
5. Test the updated component at 320/390/768/1024/1440 CSS px with Persian RTL and English LTR. Check keyboard focus, touch, reduced motion, offline fallback, zoom and long text.
6. Record observations and remediation. A successful build does not by itself prove correct design or interaction.

## Minimal technical anchor

```css
--surface: var(--neutral-950); --text-primary: var(--neutral-50); --focus-ring: var(--neutral-100);
```

This is a technical anchor; expand and integrate it with the actual framework and installed library API rather than pasting it blindly.

## Verification protocol and evidence

- **Functional:** Unmount/remount under React Strict Mode or SPA navigation without duplicate work.
- **Visual:** capture mobile and desktop screenshots in at least two content lengths; track layout overflow and changes after font loading.
- **Accessibility:** keyboard Tab/Shift+Tab, Escape where relevant, visible focus, noncolor state indicators, readable heading order and logical reading flow.
- **Motion:** identify all owners of transform/opacity/position, play and reverse, interrupt mid-transition and check state restoration.
- **Runtime:** check browser console, network assets, listeners, render loops, React unmount and failure fallback.
- **Performance:** measure worst credible target, not only a modern laptop. Document FPS/frame time for animation and memory for Three.js.
- **Source compliance:** verify official documentation, pinned versions and licenses before importing external dependencies.

## Concrete deliverables for the agent

1. Changed source files and the entrypoint; 2. the maintenance contract; 3. implementation diff; 4. test commands and results; 5. screenshot or an explicit note if no browser run occurred; 6. unresolved risks, each labeled with next verification step.

## Relationship to the complete pack

Link the per-pattern implementations at `patterns/implementation-atlas/`, the former OMEGA chapters at `skills/perfect-ai-master/references/`, VibeFarsi's original 279 local specs, and the relevant source catalog. The original Anime.js homepage's proprietary visual assets are not implicitly bundled.
