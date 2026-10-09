---
name: ztx10-windows-cli-operations
description: "Operate on Windows PowerShell with Codex CLI and filesystem-safe paths."
---
# Windows Cli Operations

**Intent:** Operate on Windows PowerShell with Codex CLI and filesystem-safe paths.

## Execution protocol
1. Check codex executable installed/authenticated. Require tangible evidence, a clear owner, and a pass/fail check.
2. Use subprocess argument arrays not shell injection. Require tangible evidence, a clear owner, and a pass/fail check.
3. Use read-only audit sandbox. Require tangible evidence, a clear owner, and a pass/fail check.
4. Store outputs outside project. Require tangible evidence, a clear owner, and a pass/fail check.
5. Allow mock tests offline. Require tangible evidence, a clear owner, and a pass/fail check.

## Inputs/Outputs
Input: site profile, approved brand, evidence path, task brief and allowed capabilities. Output: strict machine-readable report or orchestration plan with selected roles and reasons.

## Safety and correctness
- No existing skills may be removed. No third-party repository is executed by default.
- No edits until a human explicitly authorizes a separate fix flow.
- Always report not-run tests and confidence. Do not inflate the number of independent agents from identical prompts.
- Verify the implementation and its regression tests before completion.
