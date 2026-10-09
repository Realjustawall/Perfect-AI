---
name: ztf-bs-notification-list-commerce
description: Build and verify Notifications list for Commerce and checkout with Bootstrap v5.3 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Notifications list — Commerce and checkout (Bootstrap v5.3)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Notifications list. **Context:** Commerce and checkout. **Acceptance:** Unread must not rely solely on background color. **Product emphasis:** Keep product context, price, shipping and primary actions accessible; no hidden costs.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/bs/notification-list/commerce.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<section id="notification-list-bs-commerce-and-checkout" aria-labelledby="notification-list-bs-commerce-and-checkout-title">
  <h2 id="notification-list-bs-commerce-and-checkout-title">Notifications list · Commerce and checkout</h2>
  <div class="list-group">
    <article><h3>Overview</h3><p>Accessible supporting context with real content.</p></article>
    <article><h3>Details</h3><p>Secondary information is readable at narrow widths.</p></article>
    <article><h3>Next action</h3><p>Details remain visible without hover.</p></article>
  </div>
</section>
```

## Framework and integration rules
- `npm install bootstrap@^5.3.8` only if necessary and approved in the host project.
- Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- Use semantic grouping and a layout that reflows intrinsically; never attach fixed pixel widths to content.
- xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Unread must not rely solely on background color
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://getbootstrap.com/docs/5.3/. This is original integration documentation, not a vendor's copied component source.
