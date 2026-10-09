# Implementation pattern — Analytics visualization shell / Documentation and knowledge / Tailwind CSS v4

**Pattern ID:** `ztf-tw-analytics-panel-docs` · **Design intent:** Keep heading anchors, skip navigation, readable measure and code scrolling.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<figure id="analytics-panel-tw-documentation-and-knowledge" class="grid gap-4 lg:grid-cols-[2fr_1fr]">
 <div class="grid min-h-48 place-items-center rounded-lg bg-zinc-100 text-zinc-900" role="img" aria-label="Static preview of Analytics visualization shell">Preview: Analytics visualization shell</div>
 <figcaption>Real visual content is progressively loaded for Documentation and knowledge; fallback stays visible if graphics cannot run.</figcaption>
</figure>
```

## Framework-specific treatment
- **Utilities / layout:** `grid gap-4 lg:grid-cols-[2fr_1fr]`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Media is an enhancement; retain semantic text and a fallback when canvas/video/WebGL is unavailable.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep heading anchors, skip navigation, readable measure and code scrolling.
- Critical criterion: **Charts need textual summary and labels**.
- Test widths: 320,375,768,1024,1440,1920 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/analytics-panel.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
