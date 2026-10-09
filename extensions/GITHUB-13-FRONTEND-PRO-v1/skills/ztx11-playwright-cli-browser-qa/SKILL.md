---
name: ztx11-playwright-cli-browser-qa
description: "Perfect_AI local offline-first Codex integration: Playwright CLI — Browser QA Without MCP. Use for browser automation, screenshots, scroll and pointer interactions from Windows Codex."
---

# Playwright CLI — Browser QA Without MCP

**Source:** https://github.com/microsoft/playwright/blob/main/docs/src/getting-started-cli.md
**Upstream license / handling:** Apache-2.0
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Check Node 20+, local project URL and permitted host; install CLI only with project approval.
2. Launch browser with explicit viewport and capture page snapshot.
3. Exercise click, type, navigation, focus, scroll and screenshot for core flows.
4. Record console/network errors, layout overflow and interaction failures.
5. Add deterministic Playwright Test specs for repeatable checks rather than relying solely on CLI sessions.
6. Capture visual evidence at fixed locale/theme/time, and do not pretend simulated mobile is physical hardware.

## Concrete scenarios and integration cues
- **Scenario:** Windows localhost running at http://127.0.0.1:5173.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Dropdown under responsive mobile navigation.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Scroll-linked model animation scrubbed backwards.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```bash
npm install -D @playwright/test
npx playwright install chromium
npx playwright test tests/zt-design-qa.spec.cjs
```

## Acceptance checks (verify, do not assume)
- [ ] Smoke test works in local browser without MCP.
- [ ] Screenshots, log, viewport, locale and browser are saved.
- [ ] Reduced motion and touch input use distinct test scenarios.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not confuse Playwright CLI with its MCP server.
- **Avoid:** Do not hard-code element refs across sessions; refresh snapshots.
- When a test fails, isolate the smallest owner component. Fix one cause, rerun its reproducer, then a wider regression sweep.
- When a dependency or browser is unavailable, document the blocked test; do not claim the feature passed.

## Contracts and outputs
- `decision.json`: selected approach, why, considered alternatives, dependencies.
- `evidence.json`: test commands, screenshots/logs, viewport, status = passed | failed | not_run.
- `findings.json`: object with id, severity, selector/file, evidence, remediation and confidence.
- `patch-plan.md`: minimal edit list and rollback actions; never auto-apply in review-only sessions.

## Related Perfect_AI skills and stack
- Consult `perfect-ai-master`, `ztx3-nexus-master`, `ztx4-deep-implementation-master`, `ztx5-motion-brand-master`, and `ztx9-frame-space-device-master` only when present and relevant.
- Source the matching reference chapter in `extensions/GITHUB-13-FRONTEND-PRO-v1/references/` after selecting this skill.
- This adaptation cites the upstream project for research; consult the upstream repository for official implementation and updates.
