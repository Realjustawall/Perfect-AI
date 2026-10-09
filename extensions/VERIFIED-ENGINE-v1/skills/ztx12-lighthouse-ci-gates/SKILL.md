---
name: ztx12-lighthouse-ci-gates
description: "Lighthouse CI budgets + performance regression. Perfect_AI additive production Skill; use only for relevant projects, without MCP or overwriting files."
---

# Lighthouse CI budgets + performance regression

## Objective
Run built site under production-like server. Collect at least three Lighthouse CI runs and assert cautious LCP/CLS/category thresholds; save raw reports locally; do not equate Lighthouse lab INP with field INP.

## Preconditions
- Detect project framework and installed versions; read upstream CLI help / type declarations before changing code.
- Confirm approved project directory, Git state, required brand identity, and any existing Perfect_AI skills.
- Required tools: Lighthouse CI CLI and a production-like local server. If missing, report **not-run** and list exact setup commands.
- Do not invoke MCP, overwrite existing assets, invent performance numbers, copy restrictive third-party code, or weaken accessibility.

## Exact execution plan
1. Inventory target files, variants, routes, scripts and existing behavior; record baseline/screenshots/tests if applicable.
2. Identify the smallest relevant component/scene to test. Define observable outcomes and fallback on mobile, RTL/LTR and reduced-motion.
3. Implement in an isolated, additive module or a user-approved project change. Keep one motion owner per element and clear teardown/lifecycle effects.
4. Exercise happy path, error/loading path, keyboard/touch alternative, forward/reverse scroll, and 320/390/768/1440 widths where applicable.
5. Inspect browser console, resource failures, DOM positions, screenshots/traces and A11y roles. For 3D require visible geometry and correct camera fit.
6. Compare before/after on actual target device or browser, report exact evidence paths. Roll back a regression only when explicitly authorized.
7. Emit PASS / FAIL / NOT-RUN per requirement. Never claim PASS solely because source compiles.

## Acceptance checks
- Required behavior is visible and replayable with the stated dependencies.
- No unexpected horizontal scroll, missing accessible name, stale pointer listener or GPU resource leak.
- Existing components, fonts, animations and brand tokens remain intact unless change explicitly approved.
- Evidence includes viewport, browser/engine, timestamp, dependency versions and before/after artifacts.
- Source-specific goal: Run built site under production-like server. Collect at least three Lighthouse CI runs and assert cautious LCP/CLS/category thresholds; save raw reports locally; do not equate Lighthouse lab INP with field INP.

## Output contract
Return structured JSON with `skill`, `scope`, `status`, `checks`, `evidence`, `files_touched`, `dependency_versions`, `limitations`, and `next_actions`. Use `status=not-run` if target runner or hardware is unavailable.

## Deep reference
Read [`../../references/lighthouse-production.md`](../../references/lighthouse-production.md) and the latest installed/official API docs. This is implementation guidance, not a third-party code redistribution.
