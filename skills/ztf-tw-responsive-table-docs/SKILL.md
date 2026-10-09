---
name: ztf-tw-responsive-table-docs
description: Build and verify Responsive data table for Documentation and knowledge with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Responsive data table — Documentation and knowledge (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Responsive data table. **Context:** Documentation and knowledge. **Acceptance:** Horizontal scroll confined to table wrapper. **Product emphasis:** Keep heading anchors, skip navigation, readable measure and code scrolling.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/responsive-table/docs.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<div class="overflow-x-auto rounded-xl border" tabindex="0" role="region" aria-label="Responsive data table horizontal scrolling">
 <table id="responsive-table-tw-documentation-and-knowledge" class="w-full min-w-[36rem] text-sm"><caption>Responsive data table for Documentation and knowledge</caption>
 <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">Owner</th><th scope="col">Updated</th></tr></thead>
 <tbody><tr><th scope="row">Alpha</th><td>Active</td><td>Team A</td><td>Today</td></tr>
 <tr><th scope="row">Beta</th><td>Pending</td><td>Team B</td><td>Yesterday</td></tr></tbody></table>
</div>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Use <table>, <caption>, scope on headers and an overflow wrapper with accessible keyboard scrolling.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Horizontal scroll confined to table wrapper
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
