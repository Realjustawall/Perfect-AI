---
name: ztx5-scroll-native-view-timeline
description: "Native CSS scroll/view timeline. Use when building scroll systems or when an audit detects this specific problem."
---
# Native CSS scroll/view timeline

**Trigger**: Whenever the product calls for native css scroll/view timeline.

**Problem and behavior contract**: Prefer CSS for simple linked opacity/transform, progressively enhance.

**Implementation**: @supports(animation-timeline:view()) { animation-timeline:view(); animation-range:entry ... }.

## Execution procedure
1. Inspect the existing implementation, UI state ownership and dependencies; identify exact target component and current behavior.
2. Read `../../references/SCROLL-ENGINEERING.md` for compatible APIs and full code examples (when installed, use `../../ztx5-resources/references/` instead) (when installed, use `../../ztx5-resources/references/` instead) (when installed, use `../../ztx5-resources/references/` instead), and consult linked original official sources in `SOURCES.md`.
3. Produce a small technical plan containing target elements, input events, animation timebase, responsive formula, cleanup, and fallback.
4. Implement only the relevant components and avoid global DOM/CSS overrides; keep a route unmount/teardown function.
5. Capture normal, reduced-motion, mobile, desktop, RTL and LTR screenshots when a renderer is available.
6. Document test observations, unresolved dependency requirements and what changed.

## Specific acceptance
Unsupported browsers retain readable, stable content.

## Deliverables
- Actual working project code (not merely a paragraph)
- Local verification script or Playwright check
- At least one computed screenshot or recorded property check
- `PASS/FAIL/NOT_TESTED` status with reasons

## Upstream research
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://motion.dev/docs/react-use-scroll
- https://animejs.com/documentation/events/onscroll/
- https://github.com/iart-ai/web-animation-skills

## Hard constraints
- Every skill must preserve previous project behavior. No deleting or wholesale replacement.
- Actual user-provided brand rules outrank any stylistic recommendation. If absent, request identity; no fake approvals.
- Responsiveness: test 320, 360, 390, 430, 768, 1024, 1440, 1920 CSS px; RTL and LTR; 200/400% zoom when feasible.
- Reduced motion, touch, keyboard and failure/no-JavaScript fallback must be considered.
- Performance: avoid forced layout in rAF; disable noncritical GPU motion on weak devices.
- Choose one timeline/transform owner; GSAP, Anime.js, Motion and native CSS must not race on same property.
## Do not mark complete unless
1. Actual integration code is committed into the target project, or clearly labeled as snippet-only.
2. A build/compile test passes in the installed runtime.
3. Browser output is inspected in 2 languages and at least 2 viewport classes.
4. Acceptance tests pass with explicit evidence files; report incomplete tests honestly.
