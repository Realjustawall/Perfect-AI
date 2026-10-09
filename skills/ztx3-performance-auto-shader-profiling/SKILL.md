---
name: ztx3-performance-auto-shader-profiling
description: "Automatic Performance Optimization focused task: shader profiling. Use when the requested frontend feature or review involves shader profiling."
---

# Shader Profiling

## Why and when

Compare shader variants and bound ray steps/overdraw. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Compare shader variants and bound ray steps/overdraw. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Test on mid/low-tier hardware. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-performance-auto` for full handbook; do not use MCP.
