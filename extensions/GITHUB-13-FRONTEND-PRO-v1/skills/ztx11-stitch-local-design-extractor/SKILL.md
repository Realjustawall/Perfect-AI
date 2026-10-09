---
name: ztx11-stitch-local-design-extractor
description: "Perfect_AI local offline-first Codex integration: Google Stitch — Local Design Extraction (No MCP). Use for extract design tokens from local frontend, CSS, React, Vue, Svelte; no Stitch API or MCP."
---

# Google Stitch — Local Design Extraction (No MCP)

**Source:** https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md
**Upstream license / handling:** Apache-2.0
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Scan local project only, honoring .gitignore and excluding vendor/build assets.
2. Extract CSS custom properties, @theme declarations, font families, spacing, shadows, radii and layout primitives.
3. Record file path and selector for each extracted token; identify likely dark/light theme scopes.
4. Compare CSS tokens with Tailwind/Bootstrap theme configuration where available.
5. Create DESIGN.md with known facts and explicit UNKNOWN fields; no fabricated values.
6. Validate representative computed styles in browser before treating extracted tokens as authoritative.

## Concrete scenarios and integration cues
- **Scenario:** Vite + Tailwind v4 @theme CSS project.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Bootstrap 5.3 CSS variables and data-bs-theme.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Legacy stylesheet without token conventions.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```bash
python .perfect-ai/GITHUB-13-FRONTEND-PRO-v1/tools/design_extract.py --project . --output DESIGN.extracted.md
```

## Acceptance checks (verify, do not assume)
- [ ] Extraction completes offline and does not invoke Stitch/MCP.
- [ ] Every asserted token contains file/selector provenance.
- [ ] Unknown logo/brand values remain unknown until supplied.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Regex-based extraction is a preliminary inventory, not a full CSS parser.
- **Avoid:** Do not merge all values from nested selectors into global theme.
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
