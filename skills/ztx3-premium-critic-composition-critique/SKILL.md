---
name: ztx3-premium-critic-composition-critique
description: "Premium Design Critic focused task: composition critique. Use when the requested frontend feature or review involves composition critique."
---

# Composition Critique

## Why and when

Assess negative space, balance, focal point and asymmetric intentionality. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Assess negative space, balance, focal point and asymmetric intentionality. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Do not default to centered symmetrical 3-column hero. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-premium-critic` for full handbook; do not use MCP.
