---
name: ztgc-shadcn-improve-advisor
description: "shadcn Improve Advisor specialist for Perfect_AI; use for Act as a strictly read-only architect producing executable improvement plans for a separate implementer."
---

# shadcn Improve Advisor — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [shadcn/improve](https://github.com/shadcn/improve/blob/main/skills/improve/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Act as a strictly read-only architect producing executable improvement plans for a separate implementer.

## Actual procedure
1. Inventory architecture, problems, test harness, dependency versions, open issues and current behavior.
2. Identify problems with line/file evidence and reproduce high-impact defects where feasible.
3. Prioritize by user value, confidence, implementation cost, regression risk and test availability.
4. Write self-contained plans to a NEW plans/ or advisor-plans/ destination without changing application code.
5. Hand off acceptance criteria, edge cases, rollback and verification commands; keep unresolved uncertainty visible.

## Acceptance gates
- [ ] Never modify source files while operating as advisor
- [ ] No speculative claims without source or reproduction
- [ ] Distinct changes isolated with an acceptance checklist

## Terminal workflow (verify commands on installed version)
```powershell
python scripts/evidence_plan.py --input issues.json --output plans  # in extension
```

## Licensing, external tools and provenance
- Upstream: https://github.com/shadcn/improve
- Upstream source SHA: `df5b9001adda5ee72697ab5f7d3efe74c212e478` (the inspected main skill, not the new original work).
- License noted at inspection: **MIT**.
- Dependencies: None, source-read-only advice mode.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-improve-advisor-codebase-audit` — Build evidence table per finding: file, line, reproduction, impact, confidence, dependencies and quick verification.
- `ztgc-improve-advisor-execution-handoff` — Write one independent implementation brief per change with exact acceptance criteria and constraints.
- `ztgc-improve-advisor-priority-arbitration` — Compare fixes by impact/cost/confidence/risk and mark not-worth-doing cases explicitly; no scope inflation.
