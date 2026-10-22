---
name: ztx14-best-agent-implementation-evidence-loop
description: Give coding agents a concrete acceptance contract for motion tasks so every implementation has observable evidence and no fabricated verification.
---

# Run a bounded implement-test-review loop for UI agents

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Agent-driven UI implementation, multi-agent workflows, animation bug fixes, design-to-code tasks, and automated repair loops.

## Procedure
1. Translate the request into observable criteria: target object, input type, expected state transition, breakpoint, reduced-motion behavior, and failure/cancel behavior.
2. Inspect existing component ownership and installed library versions before coding. Select only the minimal relevant Skills.
3. Implement one coherent change, then run targeted typecheck/build/tests and inspect the rendered result where tooling exists.
4. For visual issues, collect a browser screenshot or trace after reproducing the exact interaction; do not treat successful compilation as visual success.
5. Review the diff for unrelated file changes, new dependencies, duplicate animation ownership, missing cleanup, and accessibility regressions.
6. Summarize what changed, what checks were actually run, remaining gaps, and whether any browser/device behavior was not verified.

## Avoid
- Do not parallelize multiple agents onto the same component/files without explicit file ownership.
- Do not mark unexecuted tests as passing.
- Do not accept vague completion criteria such as “looks smoother” without a repeatable path or review evidence.

## Acceptance checks
- [ ] A concise acceptance checklist is satisfied or gaps are explicit.
- [ ] The diff is limited to the intended task.
- [ ] Claims match actual tool output and visual evidence.

## Primary references
- https://motion.dev/docs/ai-kit-install
- https://playwright.dev/docs/test-snapshots
- https://react.dev/reference/react/useEffect

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
