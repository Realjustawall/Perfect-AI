---
name: ztx15-multiagent-orchestrator
description: Coordinates specialized agents for front-end, Isometric interactions, Persian typography, accessibility, performance, QA, security and release integrity with append-only preservation and a single final owner.
---

# Multi-agent orchestration protocol

## Team roles
Use role profiles in `agents/`: orchestrator, evidence researcher, frontend architect, visual UX designer, frontend implementer, Isometric/motion engineer, Persian typography/RTL specialist, accessibility reviewer, performance engineer, QA automation engineer, license/security reviewer, independent code reviewer, and release integrity auditor.

## Workflow
1. **Triage:** read existing repository and user requirements; locate any preservation manifest, existing design tokens, font setup, motion engine, agent skills and tests.
2. **Decompose:** make small tasks with an explicit input/output and a single owner per file. Parallelize independent research, design critique, license research and test planning. Do not let two agents edit the same file concurrently.
3. **Evidence first:** researcher confirms current library API/version from official docs. License reviewer checks actual font/package license files. Isometric/motion engineer inspects current engine before recommending a new one.
4. **Plan gate:** architect and UX designer propose one coherent plan. Orchestrator resolves disagreements before implementation. Add dependencies only after the engineering owner states why the existing stack is insufficient.
5. **Implementation:** component implementation, motion changes, typography setup and tests have distinct file ownership. Any cross-boundary edit requires an explicit handoff.
6. **Mandatory Persian gate:** whenever the content or locale is Persian, delegate to `ztx15-agent-persian-typography`. Release is blocked until a verified Persian-capable font is loaded, `lang="fa"`/`dir="rtl"` are appropriately scoped, and the glyph test passes. See `references/PERSIAN-FONT-MANDATE.md`.
7. **Validation:** run unit/browser tests where possible, visual snapshots at representative viewport sizes, keyboard and reduced-motion checks, plus performance checks. Record only actual results.
8. **Independent reviews:** accessibility, performance, licensing and code-review agents review separately. The implementer does not approve their own work.
9. **Release audit:** run the release auditor on paths, manifests and archive integrity. If preservation is required, verify every prior path still exists and compare its bytes/hash with the base archive.
10. **Final synthesis:** the orchestrator merges all reports, flags unresolved items, and owns the only final user-facing response.

## Recommended orchestration model
- Prefer **manager/agents-as-tools** when one coordinator must retain control of the response and enforce requirements.
- Use **handoffs** when a specialist should own a narrowly scoped branch and return its result. These are patterns, not assumptions about the host runtime; implement only capabilities supported by the actual agent platform.
- Keep specialist context small: pass the task, relevant files, relevant skill(s), constraints, and expected output instead of every Skill in the library.

## Hard guardrails
- Append-only means add unique paths; never delete/overwrite an existing file or reuse a path with new content.
- No claim of a successful build/test without a real execution result.
- No installing packages, remote MCP services, fonts or external binaries without an explicit project/tool policy and package/license verification.
- No release of Persian UI without satisfying the mandatory font gate.
- If the platform cannot spawn true subagents, execute the same role sequence sequentially and describe it as role-based workflow—not parallel agents.
