---
name: ztx3-product-systems-studio-site
description: "Complete Page & Product Systems focused task: studio site. Use when the requested frontend feature or review involves studio site."
---

# Studio Site

## Why and when

Editorial work grid, cinematic storytelling and accessible static proof. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Editorial work grid, cinematic storytelling and accessible static proof. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Do not allow WebGL to hide content. Version-pin relevant APIs and do not silently override old behavior.

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
