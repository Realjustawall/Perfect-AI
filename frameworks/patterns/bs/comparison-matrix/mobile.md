# Implementation pattern — Comparison table / Mobile-first interface / Bootstrap v5.3

**Pattern ID:** `ztf-bs-comparison-matrix-mobile` · **Design intent:** Use touch-first hit regions, soft keyboard resilience and safe-area insets.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<div class="table-responsive" tabindex="0" role="region" aria-label="Comparison table horizontal scrolling">
 <table id="comparison-matrix-bs-mobile-first-interface" class="table table-bordered"><caption>Comparison table for Mobile-first interface</caption>
 <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">Owner</th><th scope="col">Updated</th></tr></thead>
 <tbody><tr><th scope="row">Alpha</th><td>Active</td><td>Team A</td><td>Today</td></tr>
 <tr><th scope="row">Beta</th><td>Pending</td><td>Team B</td><td>Yesterday</td></tr></tbody></table>
</div>
```

## Framework-specific treatment
- **Utilities / layout:** `table table-bordered`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Use <table>, <caption>, scope on headers and an overflow wrapper with accessible keyboard scrolling.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Use touch-first hit regions, soft keyboard resilience and safe-area insets.
- Critical criterion: **Table headers scope and readable table caption**.
- Test widths: 320,360,390,430,768,1024 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/comparison-matrix.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
