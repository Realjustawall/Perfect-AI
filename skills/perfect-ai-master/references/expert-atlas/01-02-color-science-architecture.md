# Expert reference 01.02 — Perceptual color science: System boundaries

**Class:** locally authored implementation reference · **Area:** color-science · **Lens:** architecture  
**Upstream documentation:** https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

## Problem framing and scope

This module is used when a Codex agent must design, implement or review **perceptual color science** with particular emphasis on **system boundaries**. The user-visible result must function without depending on an illustration or animation. Avoid treating documentation as a substitute for actual code review or browser evidence.

## Core engineering invariant

Use OKLCH for perceptual tone steps, check computed sRGB and use WCAG contrast on final composited pixels. Never choose hue from one-to-one color psychology claims.

**Antipattern to prevent:** A visually dramatic accent can still be a contrast failure; overly colorful default palettes violate Perfect_AI monochrome.

## Procedure — apply in the target codebase

1. Inspect the existing UI state, data flow and dependency versions. Preserve existing functionality and run its baseline tests before edits.
2. Build a written context map for color-science; explicitly define the desired behavior for the architecture concern. Choose one owner for state and animated transforms. Map component, data and cleanup lifecycles.
3. Implement a small vertical slice using semantic markup and scoped styles first. Then introduce the relevant animation, geometry or interaction runtime if measurable value exists.
4. Apply implementation-specific safeguards: For colors, document: perceived lightness L, chroma C, hue h, gamut, α compositing over the actual page surface, normal and large-text contrast. Semantic status needs icon/text, not just hue. For strict Perfect_AI, set chroma to zero across palette and inspect bright-on-dark blooming.
5. Test the updated component at 320/390/768/1024/1440 CSS px with Persian RTL and English LTR. Check keyboard focus, touch, reduced motion, offline fallback, zoom and long text.
6. Record observations and remediation. A successful build does not by itself prove correct design or interaction.

## Minimal technical anchor

```javascript
const roles=['background','surface','on-surface','primary','on-primary','focus','error'];
// Assign roles, not hard-coded color by component.
// Compare WCAG (Lmax+0.05)/(Lmin+0.05).
```

This is a technical anchor; expand and integrate it with the actual framework and installed library API rather than pasting it blindly.

## Verification protocol and evidence

- **Functional:** Audit dependency graph and no hidden global selectors/listeners.
- **Visual:** capture mobile and desktop screenshots in at least two content lengths; track layout overflow and changes after font loading.
- **Accessibility:** keyboard Tab/Shift+Tab, Escape where relevant, visible focus, noncolor state indicators, readable heading order and logical reading flow.
- **Motion:** identify all owners of transform/opacity/position, play and reverse, interrupt mid-transition and check state restoration.
- **Runtime:** check browser console, network assets, listeners, render loops, React unmount and failure fallback.
- **Performance:** measure worst credible target, not only a modern laptop. Document FPS/frame time for animation and memory for Three.js.
- **Source compliance:** verify official documentation, pinned versions and licenses before importing external dependencies.

## Concrete deliverables for the agent

1. Changed source files and the entrypoint; 2. the architecture contract; 3. implementation diff; 4. test commands and results; 5. screenshot or an explicit note if no browser run occurred; 6. unresolved risks, each labeled with next verification step.

## Relationship to the complete pack

Link the per-pattern implementations at `patterns/implementation-atlas/`, the former OMEGA chapters at `skills/perfect-ai-master/references/`, VibeFarsi's original 279 local specs, and the relevant source catalog. The original Anime.js homepage's proprietary visual assets are not implicitly bundled.
