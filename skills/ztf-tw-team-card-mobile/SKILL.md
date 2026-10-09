---
name: ztf-tw-team-card-mobile
description: Build and verify Team profile card for Mobile-first interface with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Team profile card — Mobile-first interface (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Team profile card. **Context:** Mobile-first interface. **Acceptance:** Provide role and meaningful portrait alt. **Product emphasis:** Use touch-first hit regions, soft keyboard resilience and safe-area insets.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/team-card/mobile.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<article id="team-card-tw-mobile-first-interface" class="rounded-2xl border p-5" aria-labelledby="team-card-tw-mobile-first-interface-title">
 <div class="grid gap-3">
   <h3 id="team-card-tw-mobile-first-interface-title" class="text-lg font-semibold">Team profile card</h3>
   <p>Contextual description for Mobile-first interface, responsive with real text wrapping.</p>
   <a href="#details" class="inline-flex min-h-11 items-center underline">View details</a>
 </div>
</article>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Keep the heading, body and action in logical reading order, avoid visual-only information.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Provide role and meaningful portrait alt
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
