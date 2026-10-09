---
name: ztf-bs-stats-card-dashboard
description: Build and verify Metric card for Data-heavy application with Bootstrap v5.3 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Metric card — Data-heavy application (Bootstrap v5.3)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Metric card. **Context:** Data-heavy application. **Acceptance:** Show label, unit and period. **Product emphasis:** Preserve navigation and data density while supporting panel resizing and empty states.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/bs/stats-card/dashboard.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<article id="stats-card-bs-data-heavy-application" class="card shadow-sm" aria-labelledby="stats-card-bs-data-heavy-application-title">
 <div class="card-body">
   <h3 id="stats-card-bs-data-heavy-application-title" class="card-title">Metric card</h3>
   <p>Contextual description for Data-heavy application, responsive with real text wrapping.</p>
   <a href="#details" class="btn btn-outline-primary">View details</a>
 </div>
</article>
```

## Framework and integration rules
- `npm install bootstrap@^5.3.8` only if necessary and approved in the host project.
- Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- Keep the heading, body and action in logical reading order, avoid visual-only information.
- xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Show label, unit and period
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://getbootstrap.com/docs/5.3/. This is original integration documentation, not a vendor's copied component source.
