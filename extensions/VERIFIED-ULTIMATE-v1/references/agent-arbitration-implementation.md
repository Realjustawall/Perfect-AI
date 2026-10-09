# Multi-Agent Evidence Arbitration 2.0 — Technical production playbook

## Purpose
Merge independent critic advocate brand a11y 3D and performance findings, require verifiable evidence and resolve contradictory actions.

## Architecture, invariants and algorithm
**Roles and separation**: original UX critic, brand guardian, performance auditor, a11y reviewer, 3D scene auditor, accessibility engineer and independent advocate must review the same immutable artifact/brief first. Each finding includes component, issue, action, severity, confidence, evidence artifact path, measurable success condition and reproduction steps. Group duplicate defects; contradictory actions must go to final arbitrator with explicitly competing goals. Favor validated functional/accessibility evidence over subjective preference, but defer unresolved brand tradeoffs to approved art direction. Never allow reviewers to edit in the same phase they judge. Generate an evidence ledger and approval list for downstream implementers.

## Required end-to-end procedure
1. Run role specialists read-only and collect JSON reports.
2. Validate evidence paths, confidence, affected component and suggested action.
3. Group repeated findings and corroborate cross-role agreement.
4. Identify explicit conflicts: e.g. add motion versus reduce motion on same component.
5. Arbitrator issues accept/reject/investigate with evidence and brand priority, not majority vote only.
6. Produce approved action queue; no autonomous edits without explicit authorization.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Duplicate findings become one tracked issue.
- Conflicts are not silently resolved.
- Missing evidence never passes critical gates.
- Reports trace reviewer identity and source files.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://playwright.dev/docs/test-projects
