---
name: zt-visual-regression
description: Visual regression: production-level screenshots, diff thresholds, anti-flake. Use when implementing, reviewing or testing visual regression for React, Vite, Next.js or Perfect_AI projects.
---

# Visual regression

## When to activate
Use on tasks involving **screenshots, diff thresholds, anti-flake**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Reproduce observed need or bug and record baseline evidence.
2. Write expected behavior, executable acceptance criteria and at least one adversarial edge case.
3. Implement the smallest change and cover success/error/cancellation.
4. Collect test command results and inspect browser behavior if tooling exists.
5. Report passed, failed and unverified separately; never assert visual equivalence from syntax alone.

## Task-specific requirements
- Scope: **screenshots, diff thresholds, anti-flake**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model screenshots, diff thresholds, anti-flake as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- At least one executable check, clean exit code, command evidence and explicit unverified items.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/08-quality-tests.md`
- `../perfect-ai-master/references/20-test-matrix.md`
- `../perfect-ai-master/references/15-github-curated-skills.md`
