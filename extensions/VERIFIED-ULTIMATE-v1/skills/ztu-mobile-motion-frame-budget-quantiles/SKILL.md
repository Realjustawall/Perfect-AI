---
name: ztu-mobile-motion-frame-budget-quantiles
description: "Implement and verify the frame budget quantiles capability inside Mobile Motion Budget Engine with local evidence and strict fallback."
---
# Mobile Motion Budget Engine: Frame Budget Quantiles — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Implement and verify the frame budget quantiles capability inside Mobile Motion Budget Engine with local evidence and strict fallback.

## When to invoke
Invoke whenever the task includes frame budget quantiles, or the parent skill `mobile-motion` selects this submodule.

## Exact workflow
1. Read parent `ztu-mobile-motion` and `references/mobile-motion-implementation.md`.
2. Locate the related component and dependency versions.
3. Construct the smallest deterministic fixture addressing frame budget quantiles.
4. Implement using the parent module tool and preserve unrelated behavior.
5. Run unit, browser and/or hardware evidence appropriate to this feature.
6. Report unsatisfied hardware/browser constraints as **unverified** rather than pass.
7. Attach actual before/after results and test commands.

## Acceptance criteria
- frame budget quantiles implemented with real code and a reproducible example.
- Failure path and mobile/reduced-motion path specified.
- At least one objective assertion passes.
- Existing files remain unchanged unless editing is explicitly approved.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../ztu-mobile-motion/SKILL.md`
- `../../references/mobile-motion-implementation.md`

## Official references
- https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing
