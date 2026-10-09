---
name: ztx10-conflict-arbitration
description: "Resolve opposing agent claims by severity, actual evidence and objective brand constraints."
---
# Conflict Arbitration

**Intent:** Resolve opposing agent claims by severity, actual evidence and objective brand constraints.

## Execution protocol
1. Deduplicate findings by component and reproducible failure. Require tangible evidence, a clear owner, and a pass/fail check.
2. Compare critic vs advocate without averaging away blockers. Require tangible evidence, a clear owner, and a pass/fail check.
3. Verify every evidence path is inside supplied evidence folder or project. Require tangible evidence, a clear owner, and a pass/fail check.
4. Mark unsupported claims as not_verified. Require tangible evidence, a clear owner, and a pass/fail check.
5. Generate prioritized fix backlog with verifier. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
