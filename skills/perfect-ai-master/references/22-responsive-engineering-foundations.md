# Responsive engineering — architecture, constraints, contracts

**Goal:** build a UI that *adapts* to available layout, user input and capability; not a static desktop page scaled down. Use this reference for every web app, not only when user explicitly mentions responsiveness.

## Discovery
1. Inventory all routes, shells, components, overlay portals, data densities, layout modes and content lengths. Mark *viewport-dependent*, *container-dependent*, and *content-dependent* constraints separately.
2. Create a content priority hierarchy: critical task, primary CTA, controls, supplementary media. Never hide core information just to make a desktop hero fit.
3. Define breakpoints from observed **content failure points**, not brand/device labels. Suggested *test probes* (not CSS breakpoints): 320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1440, 1920, 2560 CSS px; test short heights 568/640/720 and landscape.
4. Define responsive contract for every component: smallest supported inline size, wrapping, long translated copy, RTL mirroring, target size, focus, hover absence, keyboard, loading/empty/error, zoom, reduced motion, no-JS fallback and failed asset fallback.
5. Use progressive enhancement: DOM semantics first → responsive CSS → behavior → optional motion/3D. Critical actions should never depend on canvas or wheel scroll.

## Layout recipes
- Overall shell: `width:min(100% - 2*var(--gutter), var(--page-max)); margin-inline:auto` with `--gutter:clamp(1rem,3vw,3rem)`.
- Cards: `grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))`. The `min(100%,...)` prevents overflow inside narrow containers.
- Responsive split: `grid-template-columns:repeat(2,minmax(0,1fr))`; collapse based on content break, never rely on `width:50%` for overflowing children.
- Min-content guard: use `min-width:0; overflow-wrap:anywhere` on card text, URLs, LTR code paths. For grid use `minmax(0,1fr)`.
- Container component: parent `container: card / inline-size`; child `@container card (width >= 34rem) { ... }`; give fallback without @container support if essential.
- Fluid space: `clamp(.75rem, 1rem + 1vw, 2rem)`; ensure no clipped typography at 200–400% zoom.
- Flow control: prefer intrinsic Grid/Flex and wrapping; use media queries when navigation behavior changes, `@container` when a component changes with its allocated column.

## Mobile viewport and safe-area
`min-block-size:100vh; min-block-size:100svh` for stable initial heroes; `100dvh` if a panel must match *visible* viewport (keyboard/browser UI can change it); avoid whole-app `height:100dvh` trapping scroll. Use `env(safe-area-inset-bottom)` for fixed bottom bars and side notches. Never make content inaccessible behind fixed headers or on-screen keyboard.

## Adaptive behavior by capability
- `@media (hover: hover) and (pointer: fine)` for hover-only flourish; focus and touch activation must still work.
- `@media (prefers-reduced-motion:reduce)` disable nonessential transforms/parallax; reveal content statically; never set essential text invisible and rely on JavaScript to show it.
- `forced-colors: active`, `prefers-contrast: more`, 200% zoom, text resize without layout break.
- `navigator.connection` / reduced-data are non-universal optional signals; don't require them to load functionality.
- Battery/memory/GPU: detect WebGL errors; density preset may be manually chosen. Don't fingerprint device unnecessarily.

## Anti-patterns to reject
- `overflow-x:hidden` masking real content overflow.
- Font declared solely in `vw` or button sized only in `px` that cannot scale with user text.
- Fixed 100vh hero with scroll-trigger pinning that traps focus/touch.
- Using `window.innerWidth` alone to decide child layout within nested split panes.
- Animating `width/top/left` every scroll frame or repeatedly `getBoundingClientRect()` during write phases.
- CSS-only RTL mirror using transform scaleX on actual text, icons that must stay unmirrored, video or charts.

## Release contract
No meaningful horizontal overflow, no critical text clipping, no overlapping sticky/footer UI at test matrix sizes; stable tab order; full keyboard access; 200% and 400% zoom usable; LTR spans maintain correct character order; reduced motion and failed WebGL preserve all core tasks. Report exact tested browsers rather than assuming all devices.

Sources: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length ; https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
