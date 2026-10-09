# Official shadcn CLI workflow (non-destructive first)

1. Verify project contains `components.json`, package manager and React configuration.
2. `npx shadcn@latest info --json` records installed components and aliases.
3. `npx shadcn@latest docs button dialog select` identifies current APIs.
4. `npx shadcn@latest search button` checks available registries.
5. `npx shadcn@latest add button --dry-run` and/or `--diff` previews changes.
6. Only after consent, add needed primitives, test keyboard and RTL, inspect Git diff.
7. Do not confuse adding source component files with installing a prebuilt design-system package.
