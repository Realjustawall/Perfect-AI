---
name: ztx3-advanced-typography-latin-bidi-isolation
description: "Advanced Typography Engine focused task: latin bidi isolation. Use when the requested frontend feature or review involves latin bidi isolation."
---

# Latin Bidi Isolation

## Why and when

Use bdi, dir=ltr for code/URLs and unicode-bidi isolate as required. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Use bdi, dir=ltr for code/URLs and unicode-bidi isolate as required. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

No reversed mixed-script version numbers. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Set a fluid type ramp and font metrics; construct language-specific variants and fallback font strategy.

Inspect glyph joining, line wraps at 320px, RTL+Latin mixed values, font-disabled and 400% zoom.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-advanced-typography` for full handbook; do not use MCP.
