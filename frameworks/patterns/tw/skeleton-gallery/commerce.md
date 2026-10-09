# Implementation pattern — Gallery loading state / Commerce and checkout / Tailwind CSS v4

**Pattern ID:** `ztf-tw-skeleton-gallery-commerce` · **Design intent:** Keep product context, price, shipping and primary actions accessible; no hidden costs.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<section id="skeleton-gallery-tw-commerce-and-checkout" role="status" aria-live="polite" class="grid grid-cols-2 gap-3 animate-pulse">
 <h3>Gallery loading state</h3><p>Loading your Commerce and checkout content. An update will be announced here.</p>
</section>
```

## Framework-specific treatment
- **Utilities / layout:** `grid grid-cols-2 gap-3 animate-pulse`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Use role=status or an appropriate aria-live region; announce actual state transitions without flooding.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Keep product context, price, shipping and primary actions accessible; no hidden costs.
- Critical criterion: **Reserve layout height to avoid CLS**.
- Test widths: 320,390,430,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/skeleton-gallery.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
