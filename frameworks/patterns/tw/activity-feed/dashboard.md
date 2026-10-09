# Implementation pattern — Recent activity feed / Data-heavy application / Tailwind CSS v4

**Pattern ID:** `ztf-tw-activity-feed-dashboard` · **Design intent:** Preserve navigation and data density while supporting panel resizing and empty states.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<section id="activity-feed-tw-data-heavy-application" aria-labelledby="activity-feed-tw-data-heavy-application-title">
  <h2 id="activity-feed-tw-data-heavy-application-title">Recent activity feed · Data-heavy application</h2>
  <div class="grid gap-4">
    <article><h3>Overview</h3><p>Accessible supporting context with real content.</p></article>
    <article><h3>Details</h3><p>Secondary information is readable at narrow widths.</p></article>
    <article><h3>Next action</h3><p>Details remain visible without hover.</p></article>
  </div>
</section>
```

## Framework-specific treatment
- **Utilities / layout:** `grid gap-4`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Use semantic grouping and a layout that reflows intrinsically; never attach fixed pixel widths to content.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Preserve navigation and data density while supporting panel resizing and empty states.
- Critical criterion: **Timestamps readable and machine parseable**.
- Test widths: 320,390,768,1024,1280,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/activity-feed.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
