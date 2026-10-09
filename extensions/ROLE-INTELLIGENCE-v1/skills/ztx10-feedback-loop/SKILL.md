---
name: ztx10-feedback-loop
description: "Implement bounded repair recommendations and verification, only after approval."
---
# Feedback Loop

**Intent:** Implement bounded repair recommendations and verification, only after approval.

## Execution protocol
1. Prioritize critical blockers. Require tangible evidence, a clear owner, and a pass/fail check.
2. Group related fixes and reproduce first. Require tangible evidence, a clear owner, and a pass/fail check.
3. Run minimum changed tests then whole regression. Require tangible evidence, a clear owner, and a pass/fail check.
4. Capture before/after visual evidence. Require tangible evidence, a clear owner, and a pass/fail check.
5. Stop at max iteration and preserve rollback. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
