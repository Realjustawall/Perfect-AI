# Implementation pattern — Gallery layout / Marketing landing / Tailwind CSS v4

**Pattern ID:** `ztf-tw-image-gallery-landing` · **Design intent:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<figure id="image-gallery-tw-marketing-landing" class="grid grid-cols-2 gap-2 md:grid-cols-4">
 <div class="grid min-h-48 place-items-center rounded-lg bg-zinc-100 text-zinc-900" role="img" aria-label="Static preview of Gallery layout">Preview: Gallery layout</div>
 <figcaption>Real visual content is progressively loaded for Marketing landing; fallback stays visible if graphics cannot run.</figcaption>
</figure>
```

## Framework-specific treatment
- **Utilities / layout:** `grid grid-cols-2 gap-2 md:grid-cols-4`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Media is an enhancement; retain semantic text and a fallback when canvas/video/WebGL is unavailable.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.
- Critical criterion: **Alt text distinguishes meaningful images**.
- Test widths: 320,375,390,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/image-gallery.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
