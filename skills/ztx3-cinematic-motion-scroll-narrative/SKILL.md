---
name: ztx3-cinematic-motion-scroll-narrative
description: "Cinematic Animation Engine focused task: scroll narrative. Use when the requested frontend feature or review involves scroll narrative."
---

# Scroll Narrative

## Why and when

Separate scene chapters and map progress with clamped sections and reversible animation. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Separate scene chapters and map progress with clamped sections and reversible animation. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Avoid broken back-scroll state. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-cinematic-motion` for full handbook; do not use MCP.
