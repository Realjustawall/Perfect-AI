# Implementation pattern — Authentication dialog / Marketing landing / Tailwind CSS v4

**Pattern ID:** `ztf-tw-login-modal-landing` · **Design intent:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

## Before writing code
Audit the existing app and its actual framework version. Use Tailwind CSS v4 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<button type="button" id="login-modal-tw-marketing-landing-open" aria-haspopup="dialog" class="rounded-lg border px-4 py-3">Open Authentication dialog</button>
<dialog id="login-modal-tw-marketing-landing" aria-labelledby="login-modal-tw-marketing-landing-title" class="rounded-2xl border p-6 shadow-xl">
 <h2 id="login-modal-tw-marketing-landing-title">Authentication dialog</h2><p>Review your selection before continuing.</p>
 <form method="dialog"><button autofocus value="cancel" class="rounded-lg border p-3">Close</button></form>
</dialog>
<script type="module">
 const trigger=document.querySelector('#login-modal-tw-marketing-landing-open');
 const dialog=document.querySelector('#login-modal-tw-marketing-landing');
 trigger?.addEventListener('click',()=>dialog?.showModal());
 dialog?.addEventListener('close',()=>trigger?.focus());
</script>
```

## Framework-specific treatment
- **Utilities / layout:** `rounded-2xl border p-6 shadow-xl`
- **Breakpoints and container:** sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.
- **Theme source:** Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- **RTL:** Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- **Interaction and semantics:** Use a real dialog focus model. Native <dialog> or a framework modal should own focus; do not combine both managers.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.
- Critical criterion: **Focus remains inside modal when opened**.
- Test widths: 320,375,390,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/tw/login-modal.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://tailwindcss.com/docs/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
