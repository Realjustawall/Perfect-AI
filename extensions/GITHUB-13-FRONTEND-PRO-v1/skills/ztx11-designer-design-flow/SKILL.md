---
name: ztx11-designer-design-flow
description: "Perfect_AI local offline-first Codex integration: Designer Skills — Full Design Flow. Use for full design pipeline, brief through coded page and design review."
---

# Designer Skills — Full Design Flow

**Source:** https://github.com/julianoczkowski/designer-skills/blob/main/design-flow/SKILL.md
**Upstream license / handling:** Apache-2.0
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Discover brand brief, audience and constraints once; honor already-supplied facts.
2. Write acceptance criteria for site pages, interactions, languages, responsiveness and motion.
3. Build information architecture and primary user journey before visual decoration.
4. Choose token system and component strategy, then produce a narrow vertical slice.
5. Implement high-value screens first; document loading, error, empty and offline variants.
6. Run reviewers and automated checks, collect approvals only when genuinely necessary.
7. Maintain change log, decisions and a blocked/unverified register.

## Concrete scenarios and integration cues
- **Scenario:** Landing page brief supplied with no exact palette.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Dashboard with established design system.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Marketing page needing reduced-motion fallback.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
site-brief -> sitemap -> DESIGN.md -> tokens -> components -> real pages -> browser QA -> release gate
```

## Acceptance checks (verify, do not assume)
- [ ] Brief maps to a component/page acceptance matrix.
- [ ] Every completed page has keyboard, mobile and content checks.
- [ ] Sign-off report names unverified areas honestly.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not force long questionnaires when user brief already answers the questions.
- **Avoid:** Do not hand off vague "make pretty" tasks without testable goals.
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
