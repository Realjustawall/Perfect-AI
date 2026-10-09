---
name: ztfx-bs-anime-layout-transitions
description: Integrate Anime.js layout state transitions with Bootstrap v5.3 including lifecycle ownership, motion accessibility, RTL, responsiveness, fallback and browser tests.
---
# Anime.js layout state transitions + Bootstrap v5.3

## When to use
Use when the existing frontend requires **Anime.js layout state transitions** inside a real Bootstrap v5.3 interface. Begin from existing code and verify exact library versions. Preserve all old capabilities.

## Engineering contract
**Core target:** Measure before/after, maintain logical order and cleanup.

- Foundation: npm install bootstrap@^5.3.8. Never use Tailwind v3 configuration for a v4 app, or Bootstrap CSS plugins without the appropriate JS bundle.
- Responsive: xs <576, sm >=576, md >=768, lg >=992, xl >=1200, xxl >=1400; mobile first. Prefer host-container dimensions for WebGL.
- RTL: Use bootstrap.rtl.min.css with <html dir="rtl" lang="fa">; prefer ms-* / me-* and start/end semantics.
- Color: Use data-bs-theme and --bs-* CSS custom properties, customize Sass using functions -> variables -> maps -> mixins ordering.
- Lifecycle: attach observers and animation context once, remove them on unmount. Frame rendering must not synchronously measure layout.
- Accessibility: semantic content remains usable without animation or WebGL; animate visual layers rather than focus order.
- Quality: capture screenshots at 320,390,768,1024,1440; test dir=rtl/ltr, coarse pointer, reduced motion, 400% zoom and keyboard interactions.

## Integration pseudocode (adapt to host framework)
```js
const controller = new AbortController();
const host = document.querySelector('[data-zt-visual-host]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (host && !reduced) {
  // Mount Anime.js layout state transitions using its official versioned library API here.
  // Own all observers, timeline contexts and Three.js resources in one component.
}
function dispose() { controller.abort(); /* dispose actual handles, scene resources */ }
```

**This is a lifecycle skeleton, not a working implementation of Anime.js layout state transitions.** Codex must implement the real versioned library API from official docs, not claim this pseudocode is complete. See https://animejs.com/documentation/, https://threejs.org/docs/, https://www.w3.org/WAI/WCAG22/quickref/.

## Acceptance
- [ ] Measure before/after, maintain logical order and cleanup.
- [ ] Functionality works on supported input modes.
- [ ] No leaks, duplicate animations, broken scroll restoration or WebGL-only information.
- [ ] Confirm runtime behavior in an actual browser. State what was not tested.
