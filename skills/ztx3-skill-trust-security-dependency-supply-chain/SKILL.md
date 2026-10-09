---
name: ztx3-skill-trust-security-dependency-supply-chain
description: "Skill Verification & Security focused task: dependency supply chain. Use when the requested frontend feature or review involves dependency supply chain."
---

# Dependency Supply Chain

## Why and when

Check package source/version, lockfile and scripts before installation. Work under the project's actual framework and browser constraints; do not assert this is implemented merely because a recipe exists.

## Implementation procedure

1. Inspect the current component and data flow; record constraints, user journey and existing integration.
2. Describe the mechanism: Check package source/version, lockfile and scripts before installation. Choose the smallest API with well-defined ownership.
3. Create real code and testable state transitions; document dependencies, cleanup and errors.
4. Handle mobile and container width changes, reduced motion, RTL/LTR and keyboard where applicable.
5. Record a runnable example or a reproducible browser test in the target project.

## Specific pitfalls

Avoid floating versions in production. Version-pin relevant APIs and do not silently override old behavior.

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
