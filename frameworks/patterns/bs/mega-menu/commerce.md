# Implementation pattern — Mega navigation menu / Commerce and checkout / Bootstrap v5.3

**Pattern ID:** `ztf-bs-mega-menu-commerce` · **Design intent:** Keep product context, price, shipping and primary actions accessible; no hidden costs.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<div class="accordion" id="mega-menu-bs-commerce-and-checkout"><div class="accordion-item">
 <h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mega-menu-bs-commerce-and-checkout-content" aria-expanded="false" aria-controls="mega-menu-bs-commerce-and-checkout-content">Mega navigation menu</button></h2>
 <div id="mega-menu-bs-commerce-and-checkout-content" class="accordion-collapse collapse" data-bs-parent="#mega-menu-bs-commerce-and-checkout"><div class="accordion-body">Expanded explanation for Commerce and checkout.</div></div>
</div></div>
```

## Framework-specific treatment
- **Utilities / layout:** `row row-cols-1 row-cols-md-3 g-3`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Use native <details>/<summary> when no framework JS is required; otherwise provide correct expanded state.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep product context, price, shipping and primary actions accessible; no hidden costs.
- Critical criterion: **Avoid hover-only activation**.
- Test widths: 320,390,430,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/mega-menu.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
