# Implementation pattern — Team profile card / Mobile-first interface / Tailwind CSS v4

**Pattern ID:** `ztf-tw-team-card-mobile` · **Design intent:** Use touch-first hit regions, soft keyboard resilience and safe-area insets.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<article id="team-card-tw-mobile-first-interface" class="rounded-2xl border p-5" aria-labelledby="team-card-tw-mobile-first-interface-title">
 <div class="grid gap-3">
   <h3 id="team-card-tw-mobile-first-interface-title" class="text-lg font-semibold">Team profile card</h3>
   <p>Contextual description for Mobile-first interface, responsive with real text wrapping.</p>
   <a href="#details" class="inline-flex min-h-11 items-center underline">View details</a>
 </div>
</article>
```

## Framework-specific treatment
- **Utilities / layout:** `rounded-2xl border p-5`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Keep the heading, body and action in logical reading order, avoid visual-only information.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Use touch-first hit regions, soft keyboard resilience and safe-area insets.
- Critical criterion: **Provide role and meaningful portrait alt**.
- Test widths: 320,360,390,430,768,1024 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/team-card.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
