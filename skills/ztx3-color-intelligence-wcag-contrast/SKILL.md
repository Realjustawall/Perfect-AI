---
name: ztx3-color-intelligence-wcag-contrast
description: "Color Intelligence 3.0 focused task: wcag contrast. Use when the requested frontend feature or review involves wcag contrast."
---

# Wcag Contrast

## Why and when

Check normal text 4.5:1, large text 3:1, relevant UI parts 3:1 where WCAG applies. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Check normal text 4.5:1, large text 3:1, relevant UI parts 3:1 where WCAG applies. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Do not treat AAA as default minimum. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Generate semantic tokens in OKLCH, map into sRGB, compute contrast table and score 5 palette candidates.

Verify contrast for text/action borders/focus; simulate CVD, enforce brand override and check dark/light.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-color-intelligence` for full handbook; do not use MCP.
