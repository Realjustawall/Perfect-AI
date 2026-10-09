---
name: ztu-cross-browser-ci-browser-project-matrix
description: "Implement and verify the browser project matrix capability inside Cross-Browser CI Engine with local evidence and strict fallback."
---
# Cross-Browser CI Engine: Browser Project Matrix — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Implement and verify the browser project matrix capability inside Cross-Browser CI Engine with local evidence and strict fallback.

## When to invoke
Invoke whenever the task includes browser project matrix, or the parent skill `cross-browser-ci` selects this submodule.

## Exact workflow
1. Read parent `ztu-cross-browser-ci` and `references/cross-browser-ci-implementation.md`.
2. Locate the related component and dependency versions.
3. Construct the smallest deterministic fixture addressing browser project matrix.
4. Implement using the parent module tool and preserve unrelated behavior.
5. Run unit, browser and/or hardware evidence appropriate to this feature.
6. Report unsatisfied hardware/browser constraints as **unverified** rather than pass.
7. Attach actual before/after results and test commands.

## Acceptance criteria
- browser project matrix implemented with real code and a reproducible example.
- Failure path and mobile/reduced-motion path specified.
- At least one objective assertion passes.
- Existing files remain unchanged unless editing is explicitly approved.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../ztu-cross-browser-ci/SKILL.md`
- `../../references/cross-browser-ci-implementation.md`

## Official references
- https://playwright.dev/docs/test-projects
