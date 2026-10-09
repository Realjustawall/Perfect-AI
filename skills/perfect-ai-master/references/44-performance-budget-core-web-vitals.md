# Performance engineering / Core Web Vitals / animation budget

Aim for CWV good thresholds (LCP<=2.5s, INP<=200ms, CLS<=0.1 at p75), acknowledge lab/mobile variance and field-data limits. Budgets by route: JS bytes, CSS, image bytes, font loading, main-thread work, GPU memory, draw calls, 3D frame time, responsiveness. Maintain real budgets per project not fake universal maximum. Instrument PerformanceObserver in dev when possible. Compare baseline vs after.

- SSR/HTML-first for visible text; preload critical fonts carefully; compress assets; `font-display` chosen with CLS tradeoffs.
- Defer Three.js and large motion runtimes until needed, use route-level splitting; avoid multiple conflicting animation engines.
- Animation frame: do not allocate vectors/buffers every frame; use demand-driven render for scroll-scrub; clip DPR/LOD; pause when hidden/offscreen.
- Avoid layout thrash: group reads then writes, use `ResizeObserver` throttled; don't animate `filter:blur` covering fullscreen every frame without measuring.
- Test low-end throttled hardware and real mobile where available. Monitor long tasks and production regression.

Sources: https://web.dev/articles/vitals ; https://threejs.org/manual/pages/optimize-lots-of-objects.html
