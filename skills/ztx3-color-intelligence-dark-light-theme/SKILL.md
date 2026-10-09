---
name: ztx3-color-intelligence-dark-light-theme
description: "Color Intelligence 3.0 focused task: dark light theme. Use when the requested frontend feature or review involves dark light theme."
---

# Dark Light Theme

## Why and when

Maintain equivalent hierarchy and clear system/user preference handling. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Maintain equivalent hierarchy and clear system/user preference handling. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

No flash of unreadable theme on hydration. Version-pin relevant APIs and do not silently override old behavior.

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
