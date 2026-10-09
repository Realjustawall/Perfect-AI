---
name: ztx10-isolation-worktrees
description: "Define safe worktree ownership and parallelism for future code changes."
---
# Isolation Worktrees

**Intent:** Define safe worktree ownership and parallelism for future code changes.

## Execution protocol
1. Reviewers remain read-only. Require tangible evidence, a clear owner, and a pass/fail check.
2. One implementation owner per file or isolated worktree. Require tangible evidence, a clear owner, and a pass/fail check.
3. Do not run parallel fixers on shared mutable files. Require tangible evidence, a clear owner, and a pass/fail check.
4. Require before/after tests and rollback checkpoint. Require tangible evidence, a clear owner, and a pass/fail check.
5. Never touch user changes not in scope. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
