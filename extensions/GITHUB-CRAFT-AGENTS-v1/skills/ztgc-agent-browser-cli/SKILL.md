---
name: ztgc-agent-browser-cli
description: "Agent Browser CLI specialist for Perfect_AI; use for Run reproducible browser-based UI acceptance checks using the agent-browser CLI, without MCP."
---

# Agent Browser CLI — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser/blob/main/skills/agent-browser/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Run reproducible browser-based UI acceptance checks using the agent-browser CLI, without MCP.

## Actual procedure
1. Install and inspect CLI version, load agent-browser skills get core for installed-version syntax.
2. Use a user-authorized local URL and a distinct browser session; avoid live account or production writes without explicit permission.
3. Capture accessibility snapshot and screenshot before interaction, then navigate with semantic locator refs.
4. Record evidence for flows: navigation, forms, responsive breakpoints, RTL, scroll, errors and keyboard use.
5. Close sessions and redact credentials, tokens, personally identifying data from logs and reports.

## Acceptance gates
- [ ] Never claim CDP emulator results represent physical Android GPU
- [ ] Never send a form, purchase or delete data without user permission
- [ ] Evidence includes screenshot path, URL, viewport, console/network status

## Terminal workflow (verify commands on installed version)
```powershell
npm i -g agent-browser
agent-browser install
agent-browser skills get core --full
agent-browser skills get dogfood
```

## Licensing, external tools and provenance
- Upstream: https://github.com/vercel-labs/agent-browser
- Upstream source SHA: `dc9bb54a22e9cd7ad9c982a0fe5ae2e204751b12` (the inspected main skill, not the new original work).
- License noted at inspection: **Apache-2.0**.
- Dependencies: npm i -g agent-browser; agent-browser install; CLI only.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-browser-browser-exploratory-dogfood` — Discover real UI edge cases through controlled workflows, take snapshots, verify element state and produce replay steps.
- `ztgc-browser-browser-evidence-har` — Capture trace of network failures, redirects and load states without logging authorization headers or private form data.
- `ztgc-browser-browser-mobile-rtl` — Inspect phone-sized layout and bidirectional fields; distinguish emulated touch tests from physical device results.
