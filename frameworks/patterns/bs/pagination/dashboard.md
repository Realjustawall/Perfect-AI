# Implementation pattern — Pagination control / Data-heavy application / Bootstrap v5.3

**Pattern ID:** `ztf-bs-pagination-dashboard` · **Design intent:** Preserve navigation and data density while supporting panel resizing and empty states.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<nav id="pagination-bs-data-heavy-application" aria-label="Pagination control">
  <div class="pagination flex-wrap">
    <a href="#overview" aria-current="page">Overview</a>
    <a href="#features">Features</a>
    <a href="#help">Help</a>
  </div>
</nav>
```

## Framework-specific treatment
- **Utilities / layout:** `pagination flex-wrap`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Navigation must be operable by keyboard, expose current page, and preserve source order.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Preserve navigation and data density while supporting panel resizing and empty states.
- Critical criterion: **Current page announced; link labels distinct**.
- Test widths: 320,390,768,1024,1280,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/pagination.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
