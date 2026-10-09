# Implementation pattern — Filter toolbar / Documentation and knowledge / Bootstrap v5.3

**Pattern ID:** `ztf-bs-filter-toolbar-docs` · **Design intent:** Keep heading anchors, skip navigation, readable measure and code scrolling.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<form id="filter-toolbar-bs-documentation-and-knowledge" action="/submit" method="post">
 <fieldset class="d-flex flex-wrap align-items-center gap-2"><legend>Filter toolbar: Documentation and knowledge</legend>
   <label for="filter-toolbar-bs-documentation-and-knowledge-email">Email</label>
   <input id="filter-toolbar-bs-documentation-and-knowledge-email" name="email" type="email" autocomplete="email" required class="form-control">
   <label for="filter-toolbar-bs-documentation-and-knowledge-note">Details</label>
   <textarea id="filter-toolbar-bs-documentation-and-knowledge-note" name="note" class="form-control"></textarea>
   <button type="submit" class="btn btn-primary">Submit</button>
 </fieldset>
</form>
```

## Framework-specific treatment
- **Utilities / layout:** `d-flex flex-wrap align-items-center gap-2`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Associate every form control with a real label; native validation is preferable to custom alerts.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep heading anchors, skip navigation, readable measure and code scrolling.
- Critical criterion: **Do not hide applied filter state**.
- Test widths: 320,375,768,1024,1440,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/filter-toolbar.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
