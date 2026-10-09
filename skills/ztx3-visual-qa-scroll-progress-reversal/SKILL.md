---
name: ztx3-visual-qa-scroll-progress-reversal
description: "Visual QA & Self-Correction focused task: scroll progress reversal. Use when the requested frontend feature or review involves scroll progress reversal."
---

# Scroll Progress Reversal

## Why and when

Scrub forward/back to anchors and compare deterministic transforms. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Scrub forward/back to anchors and compare deterministic transforms. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

No motion sticky state when scrolling up. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-visual-qa` for full handbook; do not use MCP.
