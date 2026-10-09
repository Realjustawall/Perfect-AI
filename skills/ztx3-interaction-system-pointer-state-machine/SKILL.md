---
name: ztx3-interaction-system-pointer-state-machine
description: "Advanced Interaction System focused task: pointer state machine. Use when the requested frontend feature or review involves pointer state machine."
---

# Pointer State Machine

## Why and when

Model idle/hover/press/drag/release/cancel and pointer capture. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Model idle/hover/press/drag/release/cancel and pointer capture. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Do not rely on mouse events alone. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Draw state transition table including pointercancel; add semantic control and gesture alternative.

Test pointer coarse/fine, keyboard activation/cancel and touch page scrolling.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-interaction-system` for full handbook; do not use MCP.
