---
name: ztf-tw-calendar-grid-docs
description: Build and verify Adaptive calendar shell for Documentation and knowledge with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Adaptive calendar shell — Documentation and knowledge (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Adaptive calendar shell. **Context:** Documentation and knowledge. **Acceptance:** Table/grid semantics and keyboard navigation need adapter. **Product emphasis:** Keep heading anchors, skip navigation, readable measure and code scrolling.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/calendar-grid/docs.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<section id="calendar-grid-tw-documentation-and-knowledge" aria-labelledby="calendar-grid-tw-documentation-and-knowledge-title">
  <h2 id="calendar-grid-tw-documentation-and-knowledge-title">Adaptive calendar shell · Documentation and knowledge</h2>
  <div class="grid grid-cols-7 gap-1">
    <article><h3>Overview</h3><p>Accessible supporting context with real content.</p></article>
    <article><h3>Details</h3><p>Secondary information is readable at narrow widths.</p></article>
    <article><h3>Next action</h3><p>Details remain visible without hover.</p></article>
  </div>
</section>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Use semantic grouping and a layout that reflows intrinsically; never attach fixed pixel widths to content.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Table/grid semantics and keyboard navigation need adapter
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
