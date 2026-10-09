---
name: ztx10-spec-compliance-gate
description: "Review whether implementation matches the explicit request."
---
# Spec Compliance Gate

**Intent:** Review whether implementation matches the explicit request.

## Execution protocol
1. Translate every requirement to testable assertion. Require tangible evidence, a clear owner, and a pass/fail check.
2. Demand relevant code and screenshot evidence. Require tangible evidence, a clear owner, and a pass/fail check.
3. Block missing required mobile/RTL behavior. Require tangible evidence, a clear owner, and a pass/fail check.
4. Distinguish partial from complete. Require tangible evidence, a clear owner, and a pass/fail check.
5. Send narrow deficiencies to coordinator. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
