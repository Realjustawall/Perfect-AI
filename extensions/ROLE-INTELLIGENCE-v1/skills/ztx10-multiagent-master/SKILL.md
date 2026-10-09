---
name: ztx10-multiagent-master
description: Coordinate specialized independent frontend reviewers for Perfect_AI on Windows; select by website type, evidence and brand identity; no MCP.
---
# Multi-agent reviewer orchestration

Use alongside, **not instead of**, `$perfect-ai-master`, `$ztx3-nexus-master`, `$ztx5-motion-brand-master`, `$ztx8` and `$ztx9` skills as relevant. Read `.perfect-ai/ROLE-INTELLIGENCE-v1/config/roles.json` (or the source extension `config/roles.json`) for specialists and `.perfect-ai/ROLE-INTELLIGENCE-v1/config/site-profiles.json` for domain routing. No prior files may be changed.

## Mandatory sequence
1. Receive real **site type**, primary task, URL/repository, locale(s), brand identity and evidence folder. If brand is unapproved, continue generic audits but never mark brand compliance `pass`.
2. Run `python orchestrator/team.py plan --site-type immersive-3d --project <PROJECT> --brand <BRAND_JSON> --out <OUT>`; inspect selected agents and reasons. Increase --max-agents for high risk audits explicitly; always include core safety roles.
3. Run audit in mock mode for installer validation. On user's machine, with explicit intent, use `python orchestrator/team.py audit --execute ...`; requires installed authenticated Codex CLI. It dispatches separate **read-only** Codex CLI processes with isolated prompts and structured JSON outputs. These are independent specialist reviews, **not** a hidden claim of built-in Codex native subagent support.
4. Collect unique findings, strengths and missing evidence. Use deterministic arbitration first. The verification gate **must not** claim execution of missing tests.
5. Assign a *separate* fixer only if authorized, with a dedicated worktree and bounded regression loop; re-review by independent spec reviewer then code reviewer.
6. Never count an agent as successful if it timed out or produced malformed output. Escalate to human on uncertain high-stakes recommendations.

## Site-aware roles
Use `config/site-profiles.json` (21 site types). Core roles always include critic, advocate, brand guardian, accessibility, functional, verification; supplemental roles reflect commerce, dashboards, education, medical, financial, public services, travel, 3D, games, documents and more. The specific selected agents—not all roles at once—must be shown in the plan.

## Output contracts
- Reports: `config/report.schema.json` with specific evidence and exact component path.
- Composite: `team-summary.json`: selected agents, failures, evidence status, duplicate suppression, severities, action backlog, and unverified checks.
- Reviewers: *read-only* with no MCP and no code changes.
- Brand input: approved and complete if brand compliance is to be certified.

## Helpful references
`references/UPSTREAM-RESEARCH.md`, `references/RUNBOOK.md`, `references/TEST-MATRIX.md`, `references/AGENT-DESIGN-MATRIX.md`, `install/install-windows.ps1`. Do not copy external repositories without verifying their license.

Optional: `--judge` runs an independent final report-only arbitration process after the site specialists, never to override hard evidence checks.
