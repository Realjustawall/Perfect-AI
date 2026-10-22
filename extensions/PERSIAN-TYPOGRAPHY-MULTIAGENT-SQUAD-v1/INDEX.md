# Persian typography + multi-agent skills index

> Append-only extension. It adds role definitions and instructions; it does not install or instantiate agents in an external runtime.

## Mandatory Persian font rule
When there is Persian/Farsi content, a verified Persian-capable font MUST actually load. Default: **Vazirmatn**. See `references/PERSIAN-FONT-MANDATE.md` and `references/FONTS-CATALOG.json`. Usage of license-verified OFL fonts in commercial products is permitted under each font's OFL terms; required notices must be preserved when redistributing font files.

## Agent roles
- **Team Orchestrator** — `agents/orchestrator.md`; Skill: `skills/ztx15-agent-orchestrator/SKILL.md`. Owns task decomposition, scheduling, conflict prevention, handoffs, integration and final acceptance.
- **Evidence Researcher** — `agents/research.md`; Skill: `skills/ztx15-agent-research/SKILL.md`. Researches official docs, exact version APIs, registry rules and external claims.
- **Frontend Architect** — `agents/architecture.md`; Skill: `skills/ztx15-agent-architecture/SKILL.md`. Plans stack, file ownership, data flow, SSR, component boundaries and dependency budget.
- **Visual UX Designer** — `agents/visual-design.md`; Skill: `skills/ztx15-agent-visual-design/SKILL.md`. Defines visual hierarchy, motion intent, typography, color, spacing, responsive states and interaction specs.
- **Frontend Implementer** — `agents/frontend.md`; Skill: `skills/ztx15-agent-frontend/SKILL.md`. Implements scoped UI components and responsive layouts with existing project conventions.
- **Isometric & Motion Engineer** — `agents/isometric-motion.md`; Skill: `skills/ztx15-agent-isometric-motion/SKILL.md`. Owns pointer hit testing, SVG/isometric mapping, spring motion, timeline ownership and cleanup.
- **Persian Typography & RTL Specialist** — `agents/persian-typography.md`; Skill: `skills/ztx15-agent-persian-typography/SKILL.md`. Ensures Persian script coverage, correct RTL, type hierarchy, numerals, shaping, loading and font license compliance.
- **Accessibility Reviewer** — `agents/accessibility.md`; Skill: `skills/ztx15-agent-accessibility/SKILL.md`. Audits keyboard, focus, touch target, contrast, semantics, screen readers and reduced motion.
- **Performance Engineer** — `agents/performance.md`; Skill: `skills/ztx15-agent-performance/SKILL.md`. Finds layout thrash, excessive React renders, SVG overdraw, heavy bundles, CLS and frame drops.
- **QA Automation Engineer** — `agents/qa.md`; Skill: `skills/ztx15-agent-qa/SKILL.md`. Creates and executes unit/browser/visual tests across viewport, input, language and motion preferences.
- **License & Supply-Chain Reviewer** — `agents/license-security.md`; Skill: `skills/ztx15-agent-license-security/SKILL.md`. Checks font/code/assets licenses, package provenance, dependency risk, script safety and attribution requirements.
- **Independent Code Reviewer** — `agents/code-review.md`; Skill: `skills/ztx15-agent-code-review/SKILL.md`. Reviews diffs for correctness, maintainability, regressions, race conditions and requirement coverage.
- **Release Integrity Auditor** — `agents/release-auditor.md`; Skill: `skills/ztx15-agent-release-auditor/SKILL.md`. Checks append-only preservation, manifests, unique paths, ZIP integrity, catalog consistency and final claims.

## Cross-cutting skills
- `ztx15-persian-typography-mandatory-gate` — `skills/ztx15-persian-typography-mandatory-gate/SKILL.md`
- `ztx15-font-license-provenance` — `skills/ztx15-font-license-provenance/SKILL.md`
- `ztx15-persian-font-loading-performance` — `skills/ztx15-persian-font-loading-performance/SKILL.md`
- `ztx15-persian-copy-and-number-format` — `skills/ztx15-persian-copy-and-number-format/SKILL.md`
- `ztx15-multiagent-file-ownership` — `skills/ztx15-multiagent-file-ownership/SKILL.md`
- `ztx15-agent-handoff-evidence-contract` — `skills/ztx15-agent-handoff-evidence-contract/SKILL.md`
- `ztx15-persian-font-selection-decision-tree` — `skills/ztx15-persian-font-selection-decision-tree/SKILL.md`

## Font references
- `references/FONTS-CATALOG.json` — 20 font-family/variant entries with source/license and glyph-coverage status.
- `references/PERSIAN-FONT-CATALOG.md` — human-readable shortlist.
- `references/PERSIAN-FONT-MANDATE.md` — mandatory usage/rights policy.
- `SOURCES.md` — official sources checked.
