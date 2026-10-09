---
name: ztx3-skill-trust-security-preservation-manifest
description: "Skill Verification & Security focused task: preservation manifest. Use when the requested frontend feature or review involves preservation manifest."
---

# Preservation Manifest

## Why and when

Hash original archive entries and assert equality in enhanced ZIP. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Hash original archive entries and assert equality in enhanced ZIP. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Zero missing or modified legacy payloads. Version-pin relevant APIs and do not silently override old behavior.

## Parent engine acceptance protocol

Inspect source, license, hooks, file/network effects and provenance before allowing import.

Fail closed on unknown shell commands; verify source hashes and manifest invariants.

## Definition of done

- [ ] Mechanism present in production code and demonstrable.
- [ ] Test at real narrow viewport and at least one wide viewport.
- [ ] No inaccessible keyboard/pointer-only workflows.
- [ ] Reduced-motion/static fallback as relevant.
- [ ] Source/license provenance included for reused upstream code.
- [ ] Error/empty/unsupported state is visible and usable.
- [ ] Report tests actually run and any unverified claim.

See `$ztx3-skill-trust-security` for full handbook; do not use MCP.
