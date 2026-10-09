# Implementation pattern — Testimonial card / Marketing landing / Tailwind CSS v4

**Pattern ID:** `ztf-tw-testimonial-card-landing` · **Design intent:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<article id="testimonial-card-tw-marketing-landing" class="rounded-xl border p-6" aria-labelledby="testimonial-card-tw-marketing-landing-title">
 <div class="grid gap-3">
   <h3 id="testimonial-card-tw-marketing-landing-title" class="text-lg font-semibold">Testimonial card</h3>
   <p>Contextual description for Marketing landing, responsive with real text wrapping.</p>
   <a href="#details" class="inline-flex min-h-11 items-center underline">View details</a>
 </div>
</article>
```

## Framework-specific treatment
- **Utilities / layout:** `rounded-xl border p-6`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Keep the heading, body and action in logical reading order, avoid visual-only information.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.
- Critical criterion: **Quote and attribution stay together**.
- Test widths: 320,375,390,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/testimonial-card.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
