---
name: ztgc-doctor-doctor-architecture-triage
description: "Focused Perfect_AI React Doctor CLI specialist: doctor architecture triage"
---

# Doctor Architecture Triage

## Responsibility
Audit React effects, render churn, dependencies and component ownership; avoid blindly suppressing warnings.

## Entry conditions
- Load the parent `$ztgc-react-doctor-cli` only when React Doctor CLI is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Detect React workspace; record dependency tree, existing lint/test tools and Git status.
2. Run changed-only diagnostics before and after feature work; run full diagnostics for dedicated cleanup tasks.
3. Organize diagnostics by correctness/security, performance, accessibility and maintainability and map to real paths.
4. Fix one bounded group at a time with tests; keep original scan and new scan artifacts.
5. Report tool version and score; no fabricated 0-100 score if CLI not available.

## Specialized verification
- [ ] Treat React Doctor Modified MIT restrictions explicitly
- [ ] No auto-install in build or startup scripts
- [ ] Do not conflate static score with user-observed performance

## Tool usage and artifacts
- Tools: npx react-doctor@latest --verbose --scope changed.
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/millionco/react-doctor/blob/main/skills/react-doctor/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
