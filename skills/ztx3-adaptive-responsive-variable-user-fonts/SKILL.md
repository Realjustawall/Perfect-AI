---
name: ztx3-adaptive-responsive-variable-user-fonts
description: "Adaptive Responsive Engine 3.0 focused task: variable user fonts. Use when the requested frontend feature or review involves variable user fonts."
---

# Variable User Fonts

## Why and when

Support text zoom, large system fonts and line-height adaptation. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Support text zoom, large system fonts and line-height adaptation. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Do not set hard pixel heights on text containers. Version-pin relevant APIs and do not silently override old behavior.

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
