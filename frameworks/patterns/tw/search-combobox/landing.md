# Implementation pattern — Search suggestions form / Marketing landing / Tailwind CSS v4

**Pattern ID:** `ztf-tw-search-combobox-landing` · **Design intent:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<form id="search-combobox-tw-marketing-landing" action="/submit" method="post">
 <fieldset class="grid gap-3 sm:grid-cols-[1fr_auto]"><legend>Search suggestions form: Marketing landing</legend>
   <label for="search-combobox-tw-marketing-landing-email">Email</label>
   <input id="search-combobox-tw-marketing-landing-email" name="email" type="email" autocomplete="email" required class="w-full rounded-lg border p-3">
   <label for="search-combobox-tw-marketing-landing-note">Details</label>
   <textarea id="search-combobox-tw-marketing-landing-note" name="note" class="w-full rounded-lg border p-3"></textarea>
   <button type="submit" class="rounded-lg bg-zinc-900 px-5 py-3 text-white">Submit</button>
 </fieldset>
</form>
```

## Framework-specific treatment
- **Utilities / layout:** `grid gap-3 sm:grid-cols-[1fr_auto]`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Associate every form control with a real label; native validation is preferable to custom alerts.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.
- Critical criterion: **Suggestion semantics require JS combobox adapter; basic search must work**.
- Test widths: 320,375,390,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/search-combobox.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
