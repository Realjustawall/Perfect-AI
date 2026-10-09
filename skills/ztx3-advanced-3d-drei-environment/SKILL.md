---
name: ztx3-advanced-3d-drei-environment
description: "Advanced 3D / React Three Fiber focused task: drei environment. Use when the requested frontend feature or review involves drei environment."
---

# Drei Environment

## Why and when

Load environments and controls with Suspense, appropriate loading placeholder, and GPU budget. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Load environments and controls with Suspense, appropriate loading placeholder, and GPU budget. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Avoid expensive HDRI as compulsory on mobile. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-advanced-3d` for full handbook; do not use MCP.
