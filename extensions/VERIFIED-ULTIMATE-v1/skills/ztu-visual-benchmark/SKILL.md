---
name: ztu-visual-benchmark
description: "Render multiple real design variants and compare reproducible screenshots, brand criteria, accessibility and measured web performance."
---
# Visual Benchmark Laboratory — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Render multiple real design variants and compare reproducible screenshots, brand criteria, accessibility and measured web performance.

## When to invoke
When choosing a design direction or validating fidelity.

## Exact workflow
1. Define 3+ variants with stable seed, same copy, content and viewport.
2. Run `npm run benchmark` inside `examples/visual-benchmark` after npm install.
3. Capture desktop/mobile screenshots, store DOM metadata, timings and console errors.
4. Use objective gates for overflow/accessibility/contrast; have independent human or visual reviewer judge artistic originality; do not claim automated aesthetics measure taste.
5. Save decision matrix with provenance, weighting and screenshots.

## Acceptance criteria
- Every candidate has the same viewport and input.
- Broken UX fails regardless of perceived aesthetics.
- Report separates measured and subjective ratings.
- The first run does not overwrite approved screenshots.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/visual-benchmark-implementation.md`
- `../../examples/visual-benchmark/README.md`

## Official references
- https://playwright.dev/docs/test-projects
- https://playwright.dev/docs/test-snapshots
