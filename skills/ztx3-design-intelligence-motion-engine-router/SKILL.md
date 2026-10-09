---
name: ztx3-design-intelligence-motion-engine-router
description: "Design Intelligence Engine focused task: motion engine router. Use when the requested frontend feature or review involves motion engine router."
---

# Motion Engine Router

## Why and when

Choose CSS, Anime.js, GSAP, Motion, Rive, Theatre or Three.js per owned property and use case. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Choose CSS, Anime.js, GSAP, Motion, Rive, Theatre or Three.js per owned property and use case. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Prevent two engines competing for the same transform. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-design-intelligence` for full handbook; do not use MCP.
