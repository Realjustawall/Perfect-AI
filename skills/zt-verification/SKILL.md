---
name: zt-verification
description: Verification before delivery: production-level command outputs, build, browser evidence. Use when implementing, reviewing or testing verification before delivery for React, Vite, Next.js or Perfect_AI projects.
---

# Verification before delivery

## When to activate
Use on tasks involving **command outputs, build, browser evidence**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Reproduce observed need or bug and record baseline evidence.
2. Write expected behavior, executable acceptance criteria and at least one adversarial edge case.
3. Implement the smallest change and cover success/error/cancellation.
4. Collect test command results and inspect browser behavior if tooling exists.
5. Report passed, failed and unverified separately; never assert visual equivalence from syntax alone.

## Task-specific requirements
- Scope: **command outputs, build, browser evidence**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
```bash
npm run build
npm run typecheck --if-present
npm run lint --if-present
npm run test --if-present
```
Report command exit codes and actual browser observations; no pass claim for commands not run.

## Evidence / acceptance
- At least one executable check, clean exit code, command evidence and explicit unverified items.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/08-quality-tests.md`
- `../perfect-ai-master/references/20-test-matrix.md`
- `../perfect-ai-master/references/15-github-curated-skills.md`
