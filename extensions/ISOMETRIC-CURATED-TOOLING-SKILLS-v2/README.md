# Isometric Curated Tooling Skills v2

An additive, curated companion to `ISOMETRIC-INTERACTION-AGENT-SKILLS-v1`. This pack emphasizes **tool choice, integration boundaries, concrete APIs, and verification** rather than increasing skill count for its own sake.

## Recommended priority

1. `ztx14-curated-isometric-component-selection` — inspect the real registry item before coding.
2. `ztx14-curated-animation-ownership-boundary` — the critical safety rule: one owner per animated property.
3. `ztx14-curated-motion-react-pointer-spring` — for pointer-reactive DOM UI, not for replacing the SVG engine.
4. `ztx14-curated-motion-hover-cross-device` and `ztx14-curated-responsive-motion-capabilities` — mouse, touch, keyboard and viewport parity.
5. `ztx14-curated-reduced-motion-system` — user preference across every engine.
6. `ztx14-curated-shadcn-registry-safe-install` — exact registry items, additive config and file review.
7. `ztx14-curated-playwright-pointer-e2e` + `ztx14-curated-playwright-visual-baselines` — regression and visual evidence.
8. `ztx14-curated-css-motion-performance` + `ztx14-curated-shared-loop-offscreen-sleep` — no redundant frame loops.
9. `ztx14-curated-gsap-responsive-scroll` — only for complex scroll timelines.
10. `ztx14-curated-react-three-fiber-adoption-gate`, `ztx14-curated-lenis-adoption-gate`, and `ztx14-curated-rive-lottie-decision` — optional technology selection gates, not default dependencies.

## Contents

This extension adds 30 individually written `SKILL.md` files. It adds no runtime dependencies and does not itself install packages into the user's project. Load only the relevant specialist Skills per task.

## Compatibility

Site docs inspected on 2026-10-14 describe Isometric as a shadcn registry requiring React 19, Tailwind CSS v4, and `components.json`. Confirm the actual local project and current docs at task time; these skills are not a substitute for verifying versions.

## Files
- `skills/<skill-id>/SKILL.md` — specialist instructions
- `SKILL-CATALOG.json` — machine-readable index
- `SOURCES.md` — official documentation references
- `ADDONLY-MANIFEST.json` — provenance/preservation manifest
