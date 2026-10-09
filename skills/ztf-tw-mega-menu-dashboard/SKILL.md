---
name: ztf-tw-mega-menu-dashboard
description: Build and verify Mega navigation menu for Data-heavy application with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Mega navigation menu — Data-heavy application (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Mega navigation menu. **Context:** Data-heavy application. **Acceptance:** Avoid hover-only activation. **Product emphasis:** Preserve navigation and data density while supporting panel resizing and empty states.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/mega-menu/dashboard.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<details id="mega-menu-tw-data-heavy-application" class="grid grid-cols-1 gap-3 md:grid-cols-3"><summary class="cursor-pointer font-semibold">Mega navigation menu</summary>
 <div class="p-3"><p>Expanded explanation for Data-heavy application.</p><a href="#more" class="underline">Read more</a></div>
</details>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Use native <details>/<summary> when no framework JS is required; otherwise provide correct expanded state.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Avoid hover-only activation
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
