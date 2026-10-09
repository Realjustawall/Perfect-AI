---
name: ztx3-interaction-system-canvas-hit-targets
description: "Advanced Interaction System focused task: canvas hit targets. Use when the requested frontend feature or review involves canvas hit targets."
---

# Canvas Hit Targets

## Why and when

Map physical pointer coordinates to DPR-scaled canvas hits. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Map physical pointer coordinates to DPR-scaled canvas hits. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Prevent mistaken mobile taps. Version-pin relevant APIs and do not silently override old behavior.

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
