---
name: ztx5-three-responsive-composition
description: "Responsive 3D composition. Use when building 3d systems or when an audit detects this specific problem."
---
# Responsive 3D composition

**Trigger**: Whenever the product calls for responsive 3d composition.

**Problem and behavior contract**: Desktop side-by-side, mobile lower or background placement with safe text region.

**Implementation**: Define desired anchor and size ratio by container width using useThree(size), interpolate across sizes.

## Execution procedure
1. Inspect the existing implementation, UI state ownership and dependencies; identify exact target component and current behavior.
2. Read `../../references/3D-ENGINEERING.md` for compatible APIs and full code examples (when installed, use `../../ztx5-resources/references/` instead) (when installed, use `../../ztx5-resources/references/` instead) (when installed, use `../../ztx5-resources/references/` instead), and consult linked original official sources in `SOURCES.md`.
3. Produce a small technical plan containing target elements, input events, animation timebase, responsive formula, cleanup, and fallback.
4. Implement only the relevant components and avoid global DOM/CSS overrides; keep a route unmount/teardown function.
5. Capture normal, reduced-motion, mobile, desktop, RTL and LTR screenshots when a renderer is available.
6. Document test observations, unresolved dependency requirements and what changed.

## Specific acceptance
No overlap with CTA or heading at 320..1920px.

## Deliverables
- Actual working project code (not merely a paragraph)
- Local verification script or Playwright check
- At least one computed screenshot or recorded property check
- `PASS/FAIL/NOT_TESTED` status with reasons

## Upstream research
- https://threejs.org/docs/pages/Box3.html
- https://github.com/pmndrs/drei/blob/master/docs/staging/bounds.mdx

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
