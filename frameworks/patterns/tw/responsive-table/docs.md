# Implementation pattern — Responsive data table / Documentation and knowledge / Tailwind CSS v4

**Pattern ID:** `ztf-tw-responsive-table-docs` · **Design intent:** Keep heading anchors, skip navigation, readable measure and code scrolling.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<div class="overflow-x-auto rounded-xl border" tabindex="0" role="region" aria-label="Responsive data table horizontal scrolling">
 <table id="responsive-table-tw-documentation-and-knowledge" class="w-full min-w-[36rem] text-sm"><caption>Responsive data table for Documentation and knowledge</caption>
 <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">Owner</th><th scope="col">Updated</th></tr></thead>
 <tbody><tr><th scope="row">Alpha</th><td>Active</td><td>Team A</td><td>Today</td></tr>
 <tr><th scope="row">Beta</th><td>Pending</td><td>Team B</td><td>Yesterday</td></tr></tbody></table>
</div>
```

## Framework-specific treatment
- **Utilities / layout:** `w-full min-w-[36rem] text-sm`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Use <table>, <caption>, scope on headers and an overflow wrapper with accessible keyboard scrolling.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep heading anchors, skip navigation, readable measure and code scrolling.
- Critical criterion: **Horizontal scroll confined to table wrapper**.
- Test widths: 320,375,768,1024,1440,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/responsive-table.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
