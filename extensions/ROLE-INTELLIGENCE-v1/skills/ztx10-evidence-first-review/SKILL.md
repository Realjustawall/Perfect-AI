---
name: ztx10-evidence-first-review
description: "Collect browser/CI/source evidence before making quality judgments."
---
# Evidence First Review

**Intent:** Collect browser/CI/source evidence before making quality judgments.

## Execution protocol
1. Capture device, URL, timestamp, viewport, locale and git revision. Require tangible evidence, a clear owner, and a pass/fail check.
2. Capture screenshots including scroll checkpoints. Require tangible evidence, a clear owner, and a pass/fail check.
3. Save DOM and computed styles for critical components. Require tangible evidence, a clear owner, and a pass/fail check.
4. Record failing network/console/interaction tests. Require tangible evidence, a clear owner, and a pass/fail check.
5. Mark missing artifacts explicitly. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
