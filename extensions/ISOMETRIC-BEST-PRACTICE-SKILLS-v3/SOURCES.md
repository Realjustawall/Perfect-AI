# Sources and research notes — Isometric Best-Practice Skills v3

Research snapshot: 2026-10-14. The skills intentionally prioritize official references and platform standards. Vendor documentation can change, so re-check the current package version and relevant page before applying an API.

## Motion for React / official AI Kit
- https://motion.dev/docs/react — current Motion for React concepts, imports, gestures, SVG, layout, scroll and the agent tooling entry.
- https://motion.dev/docs/ai-kit-install — official `npx motion-ai` installer, supported coding agents, free docs-search MCP, current hosted-MCP notes, and migration guidance.
- https://motion.dev/docs/react-motion-value — high-frequency values without React re-renders.
- https://motion.dev/docs/react-use-spring — spring values.
- https://motion.dev/docs/react-use-transform — map values to visual properties.
- https://motion.dev/docs/react-animate-presence — exit/presence animation.
- https://motion.dev/docs/react-layout-animations — layout/shared identity animations.
- https://motion.dev/docs/react-svg-animation — SVG animation.
- https://motion.dev/docs/react-lazy-motion — feature loading and bundle tradeoffs.
- https://motion.dev/docs/react-use-scroll — scroll-linked values.

## GSAP and React lifecycle
- https://gsap.com/docs/v3/GSAP/gsap.matchMedia/ — responsive setup and automatic reversion when media conditions stop matching.
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — scroll-driven timelines.
- https://gsap.com/docs/v3/Installation/ — official installation paths.
- https://react.dev/reference/react/useEffect — effect setup/cleanup semantics.

## Browser/platform behavior
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events — pointer input and multi-device events.
- https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture — pointer capture.
- https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event — cancellation semantics.
- https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action — touch gesture arbitration.
- https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API — element size observation.
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API — visibility intersection observation.
- https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event — tab visibility.
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries — container queries.
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion — reduced motion.
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointer-events — SVG hit testing.

## Testing, accessibility, performance
- https://playwright.dev/docs/test-snapshots — screenshot baselines and visual comparisons.
- https://playwright.dev/docs/emulation — viewport/device/media emulation.
- https://storybook.js.org/docs/writing-tests/accessibility-testing — automated rendered-DOM accessibility checks and limits.
- https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html — non-drag pointer alternatives.
- https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html — keyboard operability.
- https://developer.chrome.com/docs/devtools/performance — profiling with browser traces.
- https://web.dev/articles/animations-guide — avoiding expensive layout/paint animation paths.
- https://web.dev/articles/optimize-inp — interaction responsiveness.
- https://isometric.buildlab.in/llms.txt — Isometric’s published component/registry documentation, subject to access at execution time.
