---
name: ztx11-vibe-design-system-reconstruction
description: "Perfect_AI local offline-first Codex integration: Vibe Design MD — Reference to DESIGN.md. Use for user-provided mockup, screenshot, existing HTML, desired visual identity."
---

# Vibe Design MD — Reference to DESIGN.md

**Source:** https://github.com/aakashdhar/vibe-skill/blob/main/vibe-design-md/SKILL.md
**Upstream license / handling:** not confirmed; independent adaptation
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Request source screenshot/site files if they are not provided; do not invent exact pixels.
2. Classify evidence into measured DOM values, estimated visual values, or user preferences.
3. Measure layout scale, gutters, font structure, foreground/background roles and component shapes.
4. Record brand identity constraints and disallowed elements; distinguish resemblance from exact source parity.
5. Export DESIGN.md with provenance, confidence and responsive variants.
6. Make a side-by-side browser fixture and report unreconciled differences.

## Concrete scenarios and integration cues
- **Scenario:** Screenshot-only input requires confidence labels.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Local HTML/CSS offers exact computed style measurements.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Two-language screen has distinct locale type systems.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
## Token provenance
- surface: #0b0b0b (measured: local CSS /src/theme.css:14)
- title-font: unknown (visual estimate; confirm against available files)
- hero-gutter: clamp(1rem, 5vw, 5rem) (proposed, not measured)
```

## Acceptance checks (verify, do not assume)
- [ ] Provenance/confidence are attached to every nontrivial inferred decision.
- [ ] No external live site is scraped without user authorization and working tool.
- [ ] Both RTL and LTR components have explicit font stacks and spacing rules.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not claim pixel-perfect from a single screenshot.
- **Avoid:** Do not fetch a named brand token catalog unless it exists and is licensed.
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
