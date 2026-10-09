---
name: ztx3-product-systems-education-platform
description: "Complete Page & Product Systems focused task: education platform. Use when the requested frontend feature or review involves education platform."
---

# Education Platform

## Why and when

Course map, lesson progress, quizzes and a11y transcript. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Course map, lesson progress, quizzes and a11y transcript. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Never discard learner progress silently. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-product-systems` for full handbook; do not use MCP.
