# Implementation pattern — Three.js product viewer shell / Data-heavy application / Bootstrap v5.3

**Pattern ID:** `ztf-bs-3d-product-viewer-dashboard` · **Design intent:** Preserve navigation and data density while supporting panel resizing and empty states.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<figure id="3d-product-viewer-bs-data-heavy-application" class="ratio ratio-1x1">
 <div class="card card-body bg-body-tertiary" role="img" aria-label="Static preview of Three.js product viewer shell">Preview: Three.js product viewer shell</div>
 <figcaption>Real visual content is progressively loaded for Data-heavy application; fallback stays visible if graphics cannot run.</figcaption>
</figure>
```

## Framework-specific treatment
- **Utilities / layout:** `ratio ratio-1x1`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Media is an enhancement; retain semantic text and a fallback when canvas/video/WebGL is unavailable.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Preserve navigation and data density while supporting panel resizing and empty states.
- Critical criterion: **Must have 2D fallback and aria-label for view**.
- Test widths: 320,390,768,1024,1280,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/3d-product-viewer.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
