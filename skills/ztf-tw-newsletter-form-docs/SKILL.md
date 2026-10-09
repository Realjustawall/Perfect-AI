---
name: ztf-tw-newsletter-form-docs
description: Build and verify Newsletter signup for Documentation and knowledge with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Newsletter signup — Documentation and knowledge (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Newsletter signup. **Context:** Documentation and knowledge. **Acceptance:** Clear consent and email autocomplete. **Product emphasis:** Keep heading anchors, skip navigation, readable measure and code scrolling.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/newsletter-form/docs.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<form id="newsletter-form-tw-documentation-and-knowledge" action="/submit" method="post">
 <fieldset class="flex flex-col gap-3 sm:flex-row"><legend>Newsletter signup: Documentation and knowledge</legend>
   <label for="newsletter-form-tw-documentation-and-knowledge-email">Email</label>
   <input id="newsletter-form-tw-documentation-and-knowledge-email" name="email" type="email" autocomplete="email" required class="w-full rounded-lg border p-3">
   <label for="newsletter-form-tw-documentation-and-knowledge-note">Details</label>
   <textarea id="newsletter-form-tw-documentation-and-knowledge-note" name="note" class="w-full rounded-lg border p-3"></textarea>
   <button type="submit" class="rounded-lg bg-zinc-900 px-5 py-3 text-white">Submit</button>
 </fieldset>
</form>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Associate every form control with a real label; native validation is preferable to custom alerts.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Clear consent and email autocomplete
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
