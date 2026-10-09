# Recipe: ztx8-brand-engine-brand-motion-personality

## User-visible goal
Generate standardized animation timing and curves from approved motion adjectives.

## Required inputs
- Component/route reference and actual viewport constraints
- Approved brand file with motion/font/color authority
- Captured baseline screenshot and current runtime error output
- Installed package versions, camera configuration if 3D

## Implement
1. Inspect the referenced tool `config/brand-identity.example.json` and prior foundational skills. Do not copy irrelevant code blindly.
2. Reproduce the failure or missing feature on the *actual page* and identify the affected DOM or scene object.
3. Apply domain solution: Brand identity is mandatory data contract, not AI-invented identity. Require explicit approval.
4. Apply technique-specific change: Generate standardized animation timing and curves from approved motion adjectives.
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
