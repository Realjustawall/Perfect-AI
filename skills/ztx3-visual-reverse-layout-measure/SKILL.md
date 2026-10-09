---
name: ztx3-visual-reverse-layout-measure
description: "Visual Reverse Engineering focused task: layout measure. Use when the requested frontend feature or review involves layout measure."
---

# Layout Measure

## Why and when

Extract bounding rectangles, grid tracks, spacing and sticky constraints with developer tools. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Extract bounding rectangles, grid tracks, spacing and sticky constraints with developer tools. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Account for device pixel ratio and zoom. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-visual-reverse` for full handbook; do not use MCP.
