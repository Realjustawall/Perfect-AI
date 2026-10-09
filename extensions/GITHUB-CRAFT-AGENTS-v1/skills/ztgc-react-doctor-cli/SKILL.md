---
name: ztgc-react-doctor-cli
description: "React Doctor CLI specialist for Perfect_AI; use for Diagnose React code health using the maintained react-doctor CLI, not a homemade score presented as canonical."
---

# React Doctor CLI — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [millionco/react-doctor](https://github.com/millionco/react-doctor/blob/main/skills/react-doctor/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Diagnose React code health using the maintained react-doctor CLI, not a homemade score presented as canonical.

## Actual procedure
1. Detect React workspace; record dependency tree, existing lint/test tools and Git status.
2. Run changed-only diagnostics before and after feature work; run full diagnostics for dedicated cleanup tasks.
3. Organize diagnostics by correctness/security, performance, accessibility and maintainability and map to real paths.
4. Fix one bounded group at a time with tests; keep original scan and new scan artifacts.
5. Report tool version and score; no fabricated 0-100 score if CLI not available.

## Acceptance gates
- [ ] Treat React Doctor Modified MIT restrictions explicitly
- [ ] No auto-install in build or startup scripts
- [ ] Do not conflate static score with user-observed performance

## Terminal workflow (verify commands on installed version)
```powershell
npx react-doctor@latest --verbose --scope changed
npx react-doctor@latest --verbose
npx react-doctor@latest design --verbose
```

## Licensing, external tools and provenance
- Upstream: https://github.com/millionco/react-doctor
- Upstream source SHA: `a5199823de09d38b1fffd01fa0e7ab5c7d98091c` (the inspected main skill, not the new original work).
- License noted at inspection: **Modified MIT: AI training and substantially paid hosted service restrictions**.
- Dependencies: npx react-doctor@latest --verbose --scope changed.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-doctor-doctor-changed-regression` — Compare CLI diagnostics before and after a patch, assign owner to each new high severity issue and require follow-up tests.
- `ztgc-doctor-doctor-architecture-triage` — Audit React effects, render churn, dependencies and component ownership; avoid blindly suppressing warnings.
- `ztgc-doctor-doctor-report-safety` — Preserve limitations and license notices, sanitize diagnostic artifacts, and never submit code to third-party services without approval.
