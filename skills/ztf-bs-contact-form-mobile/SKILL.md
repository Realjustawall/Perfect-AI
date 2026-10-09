---
name: ztf-bs-contact-form-mobile
description: Build and verify Contact form for Mobile-first interface with Bootstrap v5.3 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Contact form — Mobile-first interface (Bootstrap v5.3)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Contact form. **Context:** Mobile-first interface. **Acceptance:** Submit works with keyboard and touch. **Product emphasis:** Use touch-first hit regions, soft keyboard resilience and safe-area insets.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/bs/contact-form/mobile.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<form id="contact-form-bs-mobile-first-interface" action="/submit" method="post">
 <fieldset class="row g-3"><legend>Contact form: Mobile-first interface</legend>
   <label for="contact-form-bs-mobile-first-interface-email">Email</label>
   <input id="contact-form-bs-mobile-first-interface-email" name="email" type="email" autocomplete="email" required class="form-control">
   <label for="contact-form-bs-mobile-first-interface-note">Details</label>
   <textarea id="contact-form-bs-mobile-first-interface-note" name="note" class="form-control"></textarea>
   <button type="submit" class="btn btn-primary">Submit</button>
 </fieldset>
</form>
```

## Framework and integration rules
- `npm install bootstrap@^5.3.8` only if necessary and approved in the host project.
- Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- Associate every form control with a real label; native validation is preferable to custom alerts.
- xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Submit works with keyboard and touch
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://getbootstrap.com/docs/5.3/. This is original integration documentation, not a vendor's copied component source.
