---
name: ztgc-shadcn-ui-workflow
description: "Official shadcn/ui Workflow specialist for Perfect_AI; use for Use shadcn/ui CLI and registry responsibly for maintainable, accessible React components."
---

# Official shadcn/ui Workflow — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [shadcn-ui/ui](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Use shadcn/ui CLI and registry responsibly for maintainable, accessible React components.

## Actual procedure
1. Inspect package manager, components.json, project framework, existing component ownership and existing dependencies.
2. Run info --json and find installed components first; use docs, search and view to confirm API before adding.
3. Dry-run and diff updates to existing files; do not accept overwrites without explicit user authorization.
4. Prefer composed primitives, semantic theme colors and accessible labels over manually copying random snippets.
5. Test keyboard escape/focus behavior, dialogs, form validation, RTL layout and dark theme.

## Acceptance gates
- [ ] No unapproved replacement of existing components
- [ ] Import paths match resolved aliases
- [ ] Do not embed CDN runtime dependencies or assume uninstalled component exists

## Terminal workflow (verify commands on installed version)
```powershell
npx shadcn@latest info --json
npx shadcn@latest docs button dialog
npx shadcn@latest search button
npx shadcn@latest add button --dry-run
```

## Licensing, external tools and provenance
- Upstream: https://github.com/shadcn-ui/ui
- Upstream source SHA: `c1e7388d2d9b9e90af44af9a5f135dae1b3a870a` (the inspected main skill, not the new original work).
- License noted at inspection: **MIT**.
- Dependencies: Node.js + npx shadcn@latest (or pnpm/bun equivalent).
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-shadcn-registry-audit-and-diff` — Inventory components.json and installed paths; compare registry version with project; print diff before any change.
- `ztgc-shadcn-composable-accessible-ui` — Compose dialogs, menus, forms and tables using installed primitives with focus management, error messaging and RTL verification.
- `ztgc-shadcn-design-token-bridge` — Map existing DTCG and Style Dictionary values to shadcn semantic token slots while keeping user overrides.
