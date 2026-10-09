# Scroll Timeline Compatibility — Engine and fallback policy

## Detection—not user-agent sniffing
Check `CSS.supports('animation-timeline: scroll()')` and `CSS.supports('animation-timeline: view()')` separately; if supported, validate actual progress changes in a browser test. MDN currently marks `animation-timeline` as limited availability; cannot assume all clients support it.

## CSS engine
Use `@supports (animation-timeline: scroll())`, `animation-timeline: scroll(root block)`, `animation-range` when appropriate. Define `@keyframes` and put `animation-timeline` after animation shorthand to prevent resets. For an element entering viewport use `view()` only if separately supported. Respect writing-mode: logical `block` / `inline`, not hardcoded x/y where possible.

## JS fallback
- Determine exact scroll container (root vs nested).
- Read `scrollTop`, `scrollHeight`, `clientHeight` once per rAF; `progress=clamp(scrollTop/maxScroll,0,1)`.
- Use one passive scroll handler to request a single rAF; no forced synchronous layout on every update.
- Write transform/opacity only through an animation owner; CSS variables (`--zt-progress`) are low collision risk.
- When `maxScroll<=0`, use defined static end state; do not divide by zero.
- Disconnect listeners / observers on component unmount, route transitions, and HMR.
- Native scroll timeline and fallback must never animate the same property simultaneously; choose exactly one path.
- Scroll restoration and reverse should be deterministic at same absolute scroll position.

## Reduced motion & touch
Disable decorative motion; keep content and action availability; `prefers-reduced-motion` must override both engines. Native CSS and JS fallback use accessible static visibility as default before any JS executes. Smooth-scroll libraries must not hijack native focus scroll without compensating keyboard and skip-links.

## Tests
Run `chromium/firefox/webkit` if installed; test feature detection, `.scrollTo` at 0, .25, .5, .75,1, and reverse; verify numeric opacity/transform changes or CSS variable changes and no NaN. Safari/WebKit behavior must be verified in project; do not infer purely from feature detection.
