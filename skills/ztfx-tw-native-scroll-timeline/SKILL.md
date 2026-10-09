---
name: ztfx-tw-native-scroll-timeline
description: Integrate CSS scroll-linked animation with Tailwind CSS v4 including lifecycle ownership, motion accessibility, RTL, responsiveness, fallback and browser tests.
---
# CSS scroll-linked animation + Tailwind CSS v4

## When to use
Use when the existing frontend requires **CSS scroll-linked animation** inside a real Tailwind CSS v4 interface. Begin from existing code and verify exact library versions. Preserve all old capabilities.

## Engineering contract
**Core target:** Test graceful fallback and keep text visible.

- Foundation: npm install tailwindcss @tailwindcss/vite. Never use Tailwind v3 configuration for a v4 app, or Bootstrap CSS plugins without the appropriate JS bundle.
- Responsive: sm 640, md 768, lg 1024, xl 1280, 2xl 1536 default; use @container variants for reusable components. Prefer host-container dimensions for WebGL.
- RTL: Use ms-*/me-*, text-start/text-end and dir-aware layout with rtl: variants.
- Color: Use top-level @theme to define utility-generating tokens and :root/[data-theme] for semantic alias variables.
- Lifecycle: attach observers and animation context once, remove them on unmount. Frame rendering must not synchronously measure layout.
- Accessibility: semantic content remains usable without animation or WebGL; animate visual layers rather than focus order.
- Quality: capture screenshots at 320,390,768,1024,1440; test dir=rtl/ltr, coarse pointer, reduced motion, 400% zoom and keyboard interactions.

## Integration pseudocode (adapt to host framework)
```js
const controller = new AbortController();
const host = document.querySelector('[data-zt-visual-host]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (host && !reduced) {
  // Mount CSS scroll-linked animation using its official versioned library API here.
  // Own all observers, timeline contexts and Three.js resources in one component.
}
function dispose() { controller.abort(); /* dispose actual handles, scene resources */ }
```

**This is a lifecycle skeleton, not a working implementation of CSS scroll-linked animation.** Codex must implement the real versioned library API from official docs, not claim this pseudocode is complete. See https://animejs.com/documentation/, https://threejs.org/docs/, https://www.w3.org/WAI/WCAG22/quickref/.

## Acceptance
- [ ] Test graceful fallback and keep text visible.
- [ ] Functionality works on supported input modes.
- [ ] No leaks, duplicate animations, broken scroll restoration or WebGL-only information.
- [ ] Confirm runtime behavior in an actual browser. State what was not tested.
