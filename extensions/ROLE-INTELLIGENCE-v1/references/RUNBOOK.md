# Practical audit runbook — Perfect_AI role intelligence

## 1. Evidence-first intake
Create an evidence directory separate from source with `manifest.json` describing page URL, screenshot paths, timestamp, commit, device/viewport, text locale, and source provenance. Never rely on one screenshot as proof of animation. Capture mobile/desktop, forward/reverse scroll checkpoints, keyboard/touch events, console/network errors and time-resolved frames when relevant.

## 2. Site-aware planning
`python orchestrator/team.py plan --site-type ecommerce --project C:\Projects\Site --brand C:\Projects\brand.json --out C:\Temp\ztx-agent-audit`
Always select six core roles; additionally add domain roles within a budget. Payment/health/finance/security must not be omitted just to satisfy an arbitrary agent cap.

## 3. Execution
`python orchestrator/team.py audit --execute --site-type immersive-3d --project C:\Projects\Site --brand C:\Projects\brand.json --out C:\Temp\ztx-agent-audit`
Requires Codex CLI login. Read-only by default, separate context per role, output JSON schema. Omit `--execute` to simulate role reports and validate routing. Offline mock results never prove a website passes.

## 4. Arbitration
Critical errors with evidence block; unverified claims cannot be promoted to pass. Contrast advocate's evidence with critic's evidence; preserve working strengths during fixes. Deduplicate precise same component/claim, never deduplicate independent failures.

## 5. Safe modification
Explicit opt-in only. Put fixes in a new Git worktree; separate implementation ownership and review; do not automatically overwrite local changes. Re-run test matrix before marking complete.

## Multi-agent vs tool availability
Native Codex subagents and process-per-agent CLI are different models. This extension implements independent CLI subprocesses, usable without MCP. It does **not** claim it configured or enabled native Codex subagents.

## Resource model
Default selects up to 12 reviewers with concurrency 3. User can set `--max-agents 8..24`; extra audit agents increase cost and runtime and must provide distinct evidence. No billing claims.
