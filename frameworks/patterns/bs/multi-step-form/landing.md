# Implementation pattern — Multi-step workflow / Marketing landing / Bootstrap v5.3

**Pattern ID:** `ztf-bs-multi-step-form-landing` · **Design intent:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

## Before writing code
Audit the existing app and its actual framework version. Use Bootstrap v5.3 only if already selected or justified; never inject two CSS frameworks accidentally. Confirm the real content, loading states and integration routes.

## Executable markup starter
```html
<form id="multi-step-form-bs-marketing-landing" action="/submit" method="post">
 <fieldset class="row g-3"><legend>Multi-step workflow: Marketing landing</legend>
   <label for="multi-step-form-bs-marketing-landing-email">Email</label>
   <input id="multi-step-form-bs-marketing-landing-email" name="email" type="email" autocomplete="email" required class="form-control">
   <label for="multi-step-form-bs-marketing-landing-note">Details</label>
   <textarea id="multi-step-form-bs-marketing-landing-note" name="note" class="form-control"></textarea>
   <button type="submit" class="btn btn-primary">Submit</button>
 </fieldset>
</form>
```

## Framework-specific treatment
- **Utilities / layout:** `row g-3`
- **Breakpoints and container:** xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.
- **Theme source:** Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- **RTL:** Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- **Interaction and semantics:** Associate every form control with a real label; native validation is preferable to custom alerts.
- **Performance:** native scrolling and static content first; avoid scroll event layout thrashing.

## Scenario-specific acceptance
Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.
- Critical criterion: **Progress and errors announced in text**.
- Test widths: 320,375,390,768,1024,1440 CSS pixels, plus portrait/landscape and nested sidebars.
- Test Persian labels that expand beyond the English length and preserve full context at 400% zoom.
- Confirm focus navigation, screen-reader purpose, reduced-motion behavior and no JavaScript failures.
- If the example is a shell rather than full product behavior, wire real app state/API and test it before claiming fully functional.

## Link to deep reference
`../../../references/bs/multi-step-form.md`

## Accessibility and visual QA
Use accessible names for meaningful images, status announcements on async transitions and >=4.5:1 text contrast where WCAG AA applies. For responsive visuals, measure component area with ResizeObserver or container queries (never poll viewport width each frame). Check scrollbars, animation disposal and browser console.

Sources: https://getbootstrap.com/docs/5.3/; https://www.w3.org/WAI/WCAG22/quickref/; https://www.w3.org/WAI/ARIA/apg/. This is original scenario-specific guidance.
