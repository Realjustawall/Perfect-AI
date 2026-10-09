---
name: ztgc-browser-browser-mobile-rtl
description: "Focused Perfect_AI Agent Browser CLI specialist: browser mobile rtl"
---

# Browser Mobile Rtl

## Responsibility
Inspect phone-sized layout and bidirectional fields; distinguish emulated touch tests from physical device results.

## Entry conditions
- Load the parent `$ztgc-agent-browser-cli` only when Agent Browser CLI is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Install and inspect CLI version, load agent-browser skills get core for installed-version syntax.
2. Use a user-authorized local URL and a distinct browser session; avoid live account or production writes without explicit permission.
3. Capture accessibility snapshot and screenshot before interaction, then navigate with semantic locator refs.
4. Record evidence for flows: navigation, forms, responsive breakpoints, RTL, scroll, errors and keyboard use.
5. Close sessions and redact credentials, tokens, personally identifying data from logs and reports.

## Specialized verification
- [ ] Never claim CDP emulator results represent physical Android GPU
- [ ] Never send a form, purchase or delete data without user permission
- [ ] Evidence includes screenshot path, URL, viewport, console/network status

## Tool usage and artifacts
- Tools: npm i -g agent-browser; agent-browser install; CLI only.
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/vercel-labs/agent-browser/blob/main/skills/agent-browser/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
