---
name: ztx10-code-quality-gate
description: "Review maintainability independently of spec compliance."
---
# Code Quality Gate

**Intent:** Review maintainability independently of spec compliance.

## Execution protocol
1. Check component architecture. Require tangible evidence, a clear owner, and a pass/fail check.
2. Inspect lifecycle cleanup and ownership. Require tangible evidence, a clear owner, and a pass/fail check.
3. Check null/error states. Require tangible evidence, a clear owner, and a pass/fail check.
4. Avoid duplicate animation ownership. Require tangible evidence, a clear owner, and a pass/fail check.
5. Report source path, line and remediation. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
