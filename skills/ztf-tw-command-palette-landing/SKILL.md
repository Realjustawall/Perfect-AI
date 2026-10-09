---
name: ztf-tw-command-palette-landing
description: Build and verify Command palette trigger for Marketing landing with Tailwind CSS v4 using a working semantic implementation, responsive RTL/LTR behavior, theme tokens, test plan and design verification.
---

# Command palette trigger — Marketing landing (Tailwind CSS v4)

Use this skill when asked to implement, migrate, debug or review the corresponding real interface feature. You MUST implement actual code in the user's repository; do not merely paste advice. Do not request MCP.

## Task and plan
**Goal:** Command palette trigger. **Context:** Marketing landing. **Acceptance:** Escape and focus restoration work. **Product emphasis:** Center conversion intent on headline and one primary CTA; avoid motion obscuring copy.

1. Inspect lockfile and existing design system. Verify that the correct framework and version is installed.
2. Read `../../frameworks/patterns/tw/command-palette/landing.md` from this ZIP or, after skill-only installation, use the **embedded recipe below** without depending on external files.
3. Build the semantic structure and wire interactions. Use tokens before choosing visual styling.
4. Test and repair across the acceptance matrix; report actual evidence.

## Embedded implementation
```html
<button type="button" id="command-palette-tw-marketing-landing-open" aria-haspopup="dialog" class="rounded-lg border px-4 py-3">Open Command palette trigger</button>
<dialog id="command-palette-tw-marketing-landing" aria-labelledby="command-palette-tw-marketing-landing-title" class="flex w-full items-center gap-2 rounded-xl border p-3">
 <h2 id="command-palette-tw-marketing-landing-title">Command palette trigger</h2><p>Review your selection before continuing.</p>
 <form method="dialog"><button autofocus value="cancel" class="rounded-lg border p-3">Close</button></form>
</dialog>
<script type="module">
 const trigger=document.querySelector('#command-palette-tw-marketing-landing-open');
 const dialog=document.querySelector('#command-palette-tw-marketing-landing');
 trigger?.addEventListener('click',()=>dialog?.showModal());
 dialog?.addEventListener('close',()=>trigger?.focus());
</script>
```

## Framework and integration rules
- `npm install tailwindcss @tailwindcss/vite` only if necessary and approved in the host project.
- Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Use a real dialog focus model. Native <dialog> or a framework modal should own focus; do not combine both managers.
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components.

## Motion / color integration
Choose semantic colors with the original Perfect_AI palette engine and `COLOR-SCIENCE-ULTIMATE.md`. In strict monochrome contexts, do not add colorful gradients. For Anime.js, scope animation, honor reduced motion and dispose on route transitions. For Three.js, provide static fallback, performance caps and resize camera/renderer correctly. Do not animate layout-critical dimensions on every scroll frame.

## Definition of done
- [ ] Escape and focus restoration work
- [ ] Narrow/wide layout, nested containers, RTL/LTR and 400% zoom pass.
- [ ] Accessible labels, focus, contrast, keyboard/touch, reduced motion pass.
- [ ] Build, tests and targeted browser interaction executed; no uncaught runtime errors.
- [ ] Limitations or unimplemented integration endpoints explicitly disclosed.

**Official reference:** https://tailwindcss.com/docs/. This is original integration documentation, not a vendor's copied component source.
