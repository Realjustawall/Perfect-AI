---
name: ztx15-agent-multiagent-evaluation-and-stop-criteria
description: Evaluate agent outputs against acceptance criteria, resolve conflicting recommendations, and stop loops when evidence-backed release gates pass.
---

# Multi-Agent Evaluation and Stop Criteria

## Before delegation
- Write measurable acceptance criteria and identify which results are required versus optional.
- Split tasks by independent deliverables and unique file ownership. Avoid parallel tasks that depend on each other's unwritten decisions.
- Give each specialist the needed context, constraints, expected output shape, and source requirements.

## Evaluating results
1. Check each deliverable against acceptance criteria rather than trusting confidence or polished prose.
2. Resolve conflicting advice using project constraints, official/current sources, reproducible tests, and explicit risk trade-offs.
3. Request a targeted revision only for failed criteria; do not restart all agents when one artifact needs repair.
4. Separate facts found in source, conclusions from tests, assumptions, and recommendations.
5. Stop when every required acceptance criterion passes, remaining issues are documented, and further iterations are unlikely to change the outcome. Set bounded retry/iteration limits to prevent loops.

## Release gates for web UI work
- Type/build checks complete where available.
- Persian font and RTL gate passes whenever Persian is present.
- Pointer/touch/keyboard and reduced-motion behavior are reviewed.
- Tests report actual commands and outputs.
- Diff and append-only audit are reviewed independently.

## Output
A compact evaluation matrix with criterion, owner, evidence, status (`pass`, `fail`, `blocked`, `not run`), and next action. Never convert `not run` into `pass`.
