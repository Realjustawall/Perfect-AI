---
name: ztx3-component-system-shadcn-variants
description: "Component Architecture & Design System focused task: shadcn variants. Use when the requested frontend feature or review involves shadcn variants."
---

# Shadcn Variants

## Why and when

Treat copied source components as owned local code with variant APIs. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Treat copied source components as owned local code with variant APIs. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Avoid patching upstream internals without tests. Version-pin relevant APIs and do not silently override old behavior.

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
