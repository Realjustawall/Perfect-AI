---
name: ztx11-design-intelligence-pro-max
description: "Perfect_AI local offline-first Codex integration: UI/UX Pro Max — Design Intelligence. Use for new website, redesign, design language, font/palette recommendation, component selection."
---

# UI/UX Pro Max — Design Intelligence

**Source:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
**Upstream license / handling:** MIT
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Gather a product brief: industry, audience, task hierarchy, brand limitations, two locales, device mix and available evidence.
2. Identify the visual archetype and disallowed clichés. Separate must-have brand tokens from exploration tokens.
3. Generate at least three composition hypotheses, with typography, type ramp, spacing, density and motion intensity for each.
4. Generate at least five token palettes where color is allowed. Evaluate WCAG contrast on real UI roles, not isolated swatches.
5. Score options on task completion, visual hierarchy, distinctiveness, responsive reflow, motion fit and implementation risk.
6. Apply the selected hypothesis to one hero and one dense component before spreading tokens site-wide.

## Concrete scenarios and integration cues
- **Scenario:** SaaS pricing comparison with three tiers; control card density instead of forcing symmetric decoration.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Portfolio hero where the model must sit in a text exclusion zone.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Dashboard with dense tabular information and data-ink priority.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```css
:root { --zt-surface: oklch(14% .005 260); --zt-text: oklch(97% .002 260); --zt-accent: oklch(78% .025 260); --zt-radius: .875rem; }
[data-theme="light"] { --zt-surface: oklch(98% .003 260); --zt-text: oklch(19% .01 260); }
```

## Acceptance checks (verify, do not assume)
- [ ] A reusable DESIGN.md and CSS variables exist with sources and exact values.
- [ ] Forms, navigation and typographic hierarchy use the same tokens.
- [ ] A screenshot of hero and dense component is evaluated in both languages and at 390/1440px.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not hard-code neon gradients by default.
- **Avoid:** Do not copy an unrelated brand’s identity without permission.
- **Avoid:** Do not invent brand facts from a screenshot.
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
