# Four complementary engines, no MCP

This is a **dependency-based example**, not a claim that all of these libraries are included inside the ZIP as vendored code. From this folder run `npm install` (network/package cache needed), then `npm run dev`, or `npm run build`. Each engine runs on its OWN DOM element; no overlapping transform ownership. The site handles reduced-motion by leaving elements static. This is a technical demonstration, not a recommendation to ship all 4 libraries together in production. For shipping, choose the smallest set required.

- Anime.js v4 — `animejs`, Timeline
- Motion — `motion`, `animate()` hybrid
- GSAP — `gsap`, Timeline
- Animate.css — imported stylesheet with classes

CSS/WAAPI and Three.js examples are present in the other guides and `examples/live-lab`.
