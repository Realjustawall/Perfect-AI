# Art-directed hero — Bootstrap v5.3 engineering reference

**Scope:** layout · **API family:** v5.3 (documentation reviewed October 2026) · **Primary source:** https://getbootstrap.com/docs/5.3/

## User-facing specification
Headline remains visible above visual effects. In a production interface this component must remain useful at 320px, with 400% zoom, both RTL and LTR, optional no-JS mode, and high contrast or forced colors. The visual hierarchy must establish content priority before motion.

## Version-specific composition
- Installation: `npm install bootstrap@^5.3.8`
- Responsive architecture: xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- Semantic theme: Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- Bidirectional content: Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- Semantics and interaction: Use semantic grouping and a layout that reflows intrinsically; never attach fixed pixel widths to content.

## Functional implementation starter
The snippet illustrates the Art-directed hero role in a complete interface. Server endpoints (`/submit`) and real business data must be connected to the host application. Bootstrap interactive components require importing the Bootstrap JS bundle once; Tailwind CSS is a styling framework, not a component behavior library.

```html
<section id="hero-art-directed-bs-reference" aria-labelledby="hero-art-directed-bs-reference-title">
  <h2 id="hero-art-directed-bs-reference-title">Art-directed hero · reference</h2>
  <div class="row g-4 align-items-center">
    <article><h3>Overview</h3><p>Accessible supporting context with real content.</p></article>
    <article><h3>Details</h3><p>Secondary information is readable at narrow widths.</p></article>
    <article><h3>Next action</h3><p>Details remain visible without hover.</p></article>
  </div>
</section>
```

## Decision process
1. Identify information density and users' highest-priority action; sketch the narrow layout first.
2. Choose an intrinsic size strategy. Put `min-width:0` on flex/grid children that may contain long strings.
3. Create named semantic tokens for surfaces, foregrounds, borders, focus and interaction states. Do not choose random brand colors.
4. Start with native accessible markup; add JavaScript only for state that native elements cannot represent.
5. Match motion engine to task: CSS for hover, Anime.js for curated timelines, Three.js for actual 3D, never a screenshot as a 3D replacement.
6. Cap long labels and translation growth: allow 30–80% expansion in strings and reflow gracefully; avoid tiny fixed-height boxes.
7. Keep memory and CPU budgets: detach observers and GPU allocations on unmount; do not animate layout properties continuously.

## Exact failure cases to prevent
- Headline remains visible above visual effects
- If layout uses state, do not copy stale `aria-expanded` or `aria-selected` attributes without working event handlers.
- Avoid unsafe fixed `100vh` for mobile full-screen sections; prefer `100svh` or an explicit fallback and test keyboard overlays.
- Avoid accidental nested interaction controls, duplicate IDs or ARIA overrides of native semantics.
- In Bootstrap: interactive plugin events may be asynchronous; clean up and do not instantiate duplicate plugins. In Tailwind: class extraction needs statically discoverable classes or explicit `@source inline()`.

## Browser and product acceptance
- 320–430px: no document-level horizontal overflow, labels/action visible, accessible targets.
- 576–1024px: reflow based on available container width rather than fixed viewport heuristics.
- 1440–1920px: bounded readable line lengths and card widths; no stretched typography.
- RTL/LTR: navigation and reading order remain consistent; independent visual direction is deliberate.
- Zoom 400%, `prefers-reduced-motion`, keyboard-only, coarse pointer, dark/light, forced colors, no-JS: documented behavior.
- Test the specific requirement: **Headline remains visible above visual effects**.

## References
- https://getbootstrap.com/docs/5.3/
- https://www.w3.org/WAI/ARIA/apg/
- https://www.w3.org/WAI/WCAG22/quickref/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries

This is an original implementation guide, not a copied third-party component. Confirm the installed version's documentation before shipping.
