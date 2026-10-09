---
name: ztf-tw-comparison-matrix-landing
description: Build and verify Comparison table for Marketing landing with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Comparison table — Marketing landing (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Comparison table. **Context:** Marketing landing. **Acceptance:** Table headers scope and readable table caption. **Product emphasis:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/comparison-matrix/landing.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<div class="overflow-x-auto rounded-xl border" tabindex="0" role="region" aria-label="Comparison table horizontal scrolling">
 <table id="comparison-matrix-tw-marketing-landing" class="w-full min-w-[42rem] border-separate"><caption>Comparison table for Marketing landing</caption>
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
- [ ] Table headers scope and readable table caption
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
