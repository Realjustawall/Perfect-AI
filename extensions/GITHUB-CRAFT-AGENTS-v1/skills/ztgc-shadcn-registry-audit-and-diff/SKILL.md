---
name: ztgc-shadcn-registry-audit-and-diff
description: "Focused Perfect_AI Official shadcn/ui Workflow specialist: registry audit and diff"
---

# Registry Audit And Diff

## Responsibility
Inventory components.json and installed paths; compare registry version with project; print diff before any change.

## Entry conditions
- Load the parent `$ztgc-shadcn-ui-workflow` only when Official shadcn/ui Workflow is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Inspect package manager, components.json, project framework, existing component ownership and existing dependencies.
2. Run info --json and find installed components first; use docs, search and view to confirm API before adding.
3. Dry-run and diff updates to existing files; do not accept overwrites without explicit user authorization.
4. Prefer composed primitives, semantic theme colors and accessible labels over manually copying random snippets.
5. Test keyboard escape/focus behavior, dialogs, form validation, RTL layout and dark theme.

## Specialized verification
- [ ] No unapproved replacement of existing components
- [ ] Import paths match resolved aliases
- [ ] Do not embed CDN runtime dependencies or assume uninstalled component exists

## Tool usage and artifacts
- Tools: Node.js + npx shadcn@latest (or pnpm/bun equivalent).
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
