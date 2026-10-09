---
name: ztx11-accessibility-auditor
description: "Perfect_AI local offline-first Codex integration: Accessibility Skills — WCAG 2.2 AA. Use for forms, tables, motion, screen reader, keyboard, RTL, reduced motion, accessible 3D."
---

# Accessibility Skills — WCAG 2.2 AA

**Source:** https://github.com/mgifford/accessibility-skills
**Upstream license / handling:** AGPL-3.0 repository; no upstream source copied
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Read project ACCESSIBILITY.md if supplied; use WCAG 2.2 AA as proposed default, not unsupported certification.
2. Inventory landmarks, headings, focus order, error states and non-pointer access.
3. Run axe-core tests and document rule coverage.
4. Perform manual keyboard, 200-400% zoom, screen-reader and touch spot checks.
5. Make moving content pauseable and support prefers-reduced-motion; preserve meaning when motion disabled.
6. Provide accessible text fallback for canvas, 3D and chart-based content.

## Concrete scenarios and integration cues
- **Scenario:** Forms with validation and screen reader announcements.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Motion with autoplay and pause/reduced-motion.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Canvas-only 3D hero lacking textual alternative.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```bash
npm install -D @axe-core/playwright
// add AxeBuilder scan to your local Playwright test; audit results need manual followup.
```

## Acceptance checks (verify, do not assume)
- [ ] Primary tasks are operable without mouse and errors are announced.
- [ ] No horizontal scrolling at equivalent 320 CSS px except necessary exceptions.
- [ ] Automated scan plus manual check evidence are both present.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** A clean axe report does not certify WCAG conformance.
- **Avoid:** Do not copy AGPL source into differently licensed distribution without review.
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
