# Implementation pattern — Newsletter signup / Mobile-first interface / Tailwind CSS v4

**Pattern ID:** `ztf-tw-newsletter-form-mobile` · **Design intent:** Use touch-first hit regions, soft keyboard resilience and safe-area insets.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<form id="newsletter-form-tw-mobile-first-interface" action="/submit" method="post">
 <fieldset class="flex flex-col gap-3 sm:flex-row"><legend>Newsletter signup: Mobile-first interface</legend>
   <label for="newsletter-form-tw-mobile-first-interface-email">Email</label>
   <input id="newsletter-form-tw-mobile-first-interface-email" name="email" type="email" autocomplete="email" required class="w-full rounded-lg border p-3">
   <label for="newsletter-form-tw-mobile-first-interface-note">Details</label>
   <textarea id="newsletter-form-tw-mobile-first-interface-note" name="note" class="w-full rounded-lg border p-3"></textarea>
   <button type="submit" class="rounded-lg bg-zinc-900 px-5 py-3 text-white">Submit</button>
 </fieldset>
</form>
```

## Framework-specific treatment
- **Utilities / layout:** `flex flex-col gap-3 sm:flex-row`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Associate every form control with a real label; native validation is preferable to custom alerts.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Use touch-first hit regions, soft keyboard resilience and safe-area insets.
- Critical criterion: **Clear consent and email autocomplete**.
- Test widths: 320,360,390,430,768,1024 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/newsletter-form.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
