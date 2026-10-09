---
name: ztx3-design-to-code-figma-json-import
description: "Design-to-Code Pipeline (offline) focused task: figma json import. Use when the requested frontend feature or review involves figma json import."
---

# Figma Json Import

## Why and when

Read local exported JSON nodes and inspect Auto Layout, constraints and component instances. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Read local exported JSON nodes and inspect Auto Layout, constraints and component instances. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

No assumption of private Figma API access. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Parse local design exports; map frame types into semantic primitives and tokens; generate only attributable assets.

Compare screenshots and inspect generated markup; confirm no missing state inference treated as fact.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-design-to-code` for full handbook; do not use MCP.
