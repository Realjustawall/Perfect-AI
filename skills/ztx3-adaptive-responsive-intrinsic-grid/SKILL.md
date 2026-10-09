---
name: ztx3-adaptive-responsive-intrinsic-grid
description: "Adaptive Responsive Engine 3.0 focused task: intrinsic grid. Use when the requested frontend feature or review involves intrinsic grid."
---

# Intrinsic Grid

## Why and when

Use minmax(min(100%, var(--min)),1fr) and min-width:0 for overflow control. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Use minmax(min(100%, var(--min)),1fr) and min-width:0 for overflow control. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Validate at 320 CSS pixels. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Implement intrinsic layout, container-level rules and input modality handling; measure actual content and 3D fit at each breakpoint.

Test 320/360/390/768/1024/1440, 400% zoom, 600px height, touch, RTL and reduced motion.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-adaptive-responsive` for full handbook; do not use MCP.
