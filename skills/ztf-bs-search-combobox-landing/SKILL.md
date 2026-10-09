---
name: ztf-bs-search-combobox-landing
description: Build and verify Search suggestions form for Marketing landing with Bootstrap v5.3 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Search suggestions form — Marketing landing (Bootstrap v5.3)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Search suggestions form. **Context:** Marketing landing. **Acceptance:** Suggestion semantics require JS combobox adapter; basic search must work. **Product emphasis:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/bs/search-combobox/landing.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<form id="search-combobox-bs-marketing-landing" action="/submit" method="post">
 <fieldset class="row g-2"><legend>Search suggestions form: Marketing landing</legend>
   <label for="search-combobox-bs-marketing-landing-email">Email</label>
   <input id="search-combobox-bs-marketing-landing-email" name="email" type="email" autocomplete="email" required class="form-control">
   <label for="search-combobox-bs-marketing-landing-note">Details</label>
   <textarea id="search-combobox-bs-marketing-landing-note" name="note" class="form-control"></textarea>
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
- [ ] Suggestion semantics require JS combobox adapter; basic search must work
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://getbootstrap.com/docs/5.3/. This is original integration documentation, not a vendor's copied component source.
