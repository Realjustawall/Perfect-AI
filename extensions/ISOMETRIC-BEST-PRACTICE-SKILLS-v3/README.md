# Isometric Best-Practice Skills v3

Add-only companion pack for the existing Perfect AI archive and earlier Isometric skill extensions. This extension contains 25 deeper, source-backed skills for Motion AI tooling, engine selection, React/SVG motion, pointer lifecycle, responsive behavior, accessibility, performance, visual regression, SSR, and agent evidence loops.

## Recommended starting order
1. `ztx14-best-animation-engine-selection`
2. `ztx14-best-motion-ai-kit-for-agents`
3. `ztx14-best-motion-values-no-rerender`
4. `ztx14-best-pointer-capture-cancel-lifecycle`
5. `ztx14-best-touch-scroll-gesture-arbitration`
6. `ztx14-best-a11y-axe-plus-manual-review`
7. `ztx14-best-animation-performance-trace`
8. `ztx14-best-visual-regression-determinism`
9. `ztx14-best-agent-implementation-evidence-loop`

## Tool policy
- Use the Isometric engine for its native figure/geometry interactions when its documented contract covers the task.
- Prefer CSS for simple standalone transitions, Motion for React state/gesture/spring/layout work, and GSAP for complex coordinated timelines.
- Treat the official Motion AI Kit (`npx motion-ai`) as an optional agent-tool setup. Inspect agent, scope, and configuration diffs; do not install it silently.
- These are agent instructions. They do not add npm dependencies or change the running website on their own.

## Sources and freshness
Primary sources are official vendor docs and MDN/W3C/web.dev guidance. Research snapshot: 2026-10-14. Re-check the project’s installed package versions and vendor docs at execution time.
