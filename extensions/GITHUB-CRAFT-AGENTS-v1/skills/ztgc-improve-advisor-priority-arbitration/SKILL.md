---
name: ztgc-improve-advisor-priority-arbitration
description: "Focused Perfect_AI shadcn Improve Advisor specialist: advisor priority arbitration"
---

# Advisor Priority Arbitration

## Responsibility
Compare fixes by impact/cost/confidence/risk and mark not-worth-doing cases explicitly; no scope inflation.

## Entry conditions
- Load the parent `$ztgc-shadcn-improve-advisor` only when shadcn Improve Advisor is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Inventory architecture, problems, test harness, dependency versions, open issues and current behavior.
2. Identify problems with line/file evidence and reproduce high-impact defects where feasible.
3. Prioritize by user value, confidence, implementation cost, regression risk and test availability.
4. Write self-contained plans to a NEW plans/ or advisor-plans/ destination without changing application code.
5. Hand off acceptance criteria, edge cases, rollback and verification commands; keep unresolved uncertainty visible.

## Specialized verification
- [ ] Never modify source files while operating as advisor
- [ ] No speculative claims without source or reproduction
- [ ] Distinct changes isolated with an acceptance checklist

## Tool usage and artifacts
- Tools: None, source-read-only advice mode.
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/shadcn/improve/blob/main/skills/improve/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
