---
name: ztx11-microsoft-frontend-design-review
description: "Perfect_AI local offline-first Codex integration: Microsoft — Frontend Design Review. Use for PR review, design system compliance, creative quality, frontend UX audit."
---

# Microsoft — Frontend Design Review

**Source:** https://github.com/microsoft/skills/blob/main/.github/skills/frontend-design-review/SKILL.md
**Upstream license / handling:** MIT
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Choose one review type: PR, creative, design-system, accessibility, or product-task flow.
2. Create an inventory of components and states used by the changed screen.
3. Check task hierarchy, primary actions, recoverability and keyboard navigation.
4. Compare existing DESIGN.md tokens and actual computed styles for representative components.
5. Audit error, empty, loading, offline and permission-denied states.
6. Output severity, evidence, remediation, owner and acceptance criteria; never assert tests you did not run.

## Concrete scenarios and integration cues
- **Scenario:** PR review must examine only changed components and their consuming states.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Creative homepage review prioritizes visual distinctiveness.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Accessibility audit validates actual keyboard flow.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
type Finding = { id: string; severity: "blocker"|"high"|"medium"|"low"; file?: string; selector?: string; evidence: string[]; recommendedFix: string; verified: boolean };
```

## Acceptance checks (verify, do not assume)
- [ ] A reviewer can reproduce critical issues by route + viewport + steps.
- [ ] Token violations are enumerated with file references.
- [ ] Keyboard/focus outcomes are proven by interaction rather than static markup alone.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Avoid relying solely on aria attributes for accessibility.
- **Avoid:** Do not turn an opinion into a blocking bug without criteria.
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
