# Recipe: ztx8-dynamic-agent-orchestration-dashboard-review

## User-visible goal
Check data density, empty/loading/error states, keyboard, chart text alternatives.

## Required inputs
- Component/route reference and actual viewport constraints
- Approved brand file with motion/font/color authority
- Captured baseline screenshot and current runtime error output
- Installed package versions, camera configuration if 3D

## Implement
1. Inspect the referenced tool `scripts/agent_review.py` and prior foundational skills. Do not copy irrelevant code blindly.
2. Reproduce the failure or missing feature on the *actual page* and identify the affected DOM or scene object.
3. Apply domain solution: Approve brand identity then choose roles by website type; independent read-only Codex reviewers, evidence-backed arbiter.
4. Apply technique-specific change: Check data density, empty/loading/error states, keyboard, chart text alternatives.
5. Add a minimum-width 320px and an actual 390px narrow viewport test; include 1440px and reverse scroll when applicable.
6. Ensure graphics placement is determined by viewport projection, not arbitrary pixel-matched x/y/z; preserve interactivity in mobile alternatives.
7. Capture before and after evidence and compare source/API behavior; do not claim browser proof from static syntax checks.

## Verify / output contract
- Pre-change issue: file path + selector + screenshot + severity
- Post-change evidence: file path + specific test command + result
- Brand: unchanged locked tokens / documented approved exceptions
- Accessibility: keyboard, reduced motion, readable content
- Performance: baseline and after (p95 frame time / available metrics, no guessed 60FPS)
- Outcome: PASS | FAIL | NOT_TESTED with specific blockers
