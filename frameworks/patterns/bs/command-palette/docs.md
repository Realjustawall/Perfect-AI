# Implementation pattern — Command palette trigger / Documentation and knowledge / Bootstrap v5.3

**Pattern ID:** `ztf-bs-command-palette-docs` · **Design intent:** Keep heading anchors, skip navigation, readable measure and code scrolling.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#command-palette-bs-documentation-and-knowledge" type="button">Open Command palette trigger</button>
<div class="modal fade" id="command-palette-bs-documentation-and-knowledge" tabindex="-1" aria-labelledby="command-palette-bs-documentation-and-knowledge-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered"><div class="modal-content">
   <div class="modal-header"><h2 class="modal-title fs-5" id="command-palette-bs-documentation-and-knowledge-title">Command palette trigger</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
   <div class="modal-body"><p>Review your selection before continuing.</p></div>
   <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button></div>
  </div></div>
</div>
```

## Framework-specific treatment
- **Utilities / layout:** `btn btn-outline-secondary w-100 text-start`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Use a real dialog focus model. Native <dialog> or a framework modal should own focus; do not combine both managers.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep heading anchors, skip navigation, readable measure and code scrolling.
- Critical criterion: **Escape and focus restoration work**.
- Test widths: 320,375,768,1024,1440,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/command-palette.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
