---
name: ztx3-component-system-design-token-inheritance
description: "Component Architecture & Design System focused task: design token inheritance. Use when the requested frontend feature or review involves design token inheritance."
---

# Design Token Inheritance

## Why and when

Expose CSS custom properties for density, color, shape and motion. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Expose CSS custom properties for density, color, shape and motion. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

No hardcoded accent in internal component. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-component-system` for full handbook; do not use MCP.
