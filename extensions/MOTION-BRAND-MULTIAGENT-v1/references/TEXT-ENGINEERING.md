# Text Motion Engineering: Mandatory Default Motion

## Why previous designs had zero animated copy
A repository containing an Anime.js skill does not animate anything unless the generated app imports the animation module and calls its initializer. Codex MUST wire the relevant `initDefaultTextMotion` function into the application entry (vanilla main.js / React useEffect / Next client component). A downloadable skill is NOT an application patch by itself.

## Exact integration: vanilla Vite
```js
// src/main.js
import { initDefaultTextMotion } from './animation/default-text-motion.js';
let disposeText;
window.addEventListener('DOMContentLoaded', async () => {
  disposeText = await initDefaultTextMotion();
});
// On page navigation, if using an SPA router: disposeText?.(); then reinitialize.
```

## Exact integration: React
```jsx
import { useEffect } from 'react';
import { initDefaultTextMotion } from './animation/default-text-motion.js';
function TextMotionRoot({ children }) {
  useEffect(() => {
    let destroy = null; let cancelled = false;
    initDefaultTextMotion().then(fn => {
      if (cancelled) fn(); else destroy = fn;
    });
    return () => { cancelled = true; destroy?.(); };
  }, []);
  return children;
}
```
This component is for static headings; for dynamically mounted headings, re-run the initializer scoped to the new subtree. Prevent re-initializing the same node (`data-zt-motion-ready`). Do not re-split at every React state render.

## Default site motion contract
- Never ship a major landing page in which all headings remain static unless the user's explicit brand disallows motion or prefers-reduced-motion is active.
- Sequence at least hero eyebrow, h1, lead paragraph and first CTA with gentle fades/transforms.
- Scope section h2 reveals to section visibility; do NOT play all section animations at initial load when offscreen.
- Visibility fallback: initial HTML fully visible, animation sets opacity only once mounted; motion disabled/JS exception leaves content visible.
- Respect locale direction; FA/AR split words rather than characters; default never splits and reconnects Arabic letters.
- Avoid `innerHTML` rebuilding of user input. Prefer the API's built-in nodes; on language switch revert old split then rebuild after font readiness.
- Do not use typewriter for screen reader accessible content without a stable aria-label or sr-only original.
- For browser screenshots, capture entrance at 0/25/75/100% time and final settled state.

## Presets and appropriate uses
1. Word mask upward + opacity: hero display heading; 48-80ms stagger.
2. Section fade-up: document and e-commerce h2; trigger when entering viewport.
3. Kinetic editorial line clip: magazine headings; responsive resplit required.
4. Letter glitch/scramble: English decorative tech labels only; stable semantic label.
5. Variable font axis: brands using real variable font; avoid animated font-weight in dense body.
6. Underline morph: nav focus/click; keyboard parity.
7. Text along SVG: display art; static h2 fallback.
8. 3D typographic effect: marketing hero; static semantic DOM mirror.

## Complete acceptance
Test no-JS, keyboard-only, pointer coarse, 320 and 1440 widths, RTL bilingual heading, computed font, fonts-ready delay, reduced-motion runtime toggle, transitions after route navigation and text wrapping.

Sources:
- https://animejs.com/documentation/text/splittext/
- https://animejs.com/documentation/text/splittext/textsplitter-methods/addeffect/
- https://github.com/iart-ai/kinetic-typography-skills
