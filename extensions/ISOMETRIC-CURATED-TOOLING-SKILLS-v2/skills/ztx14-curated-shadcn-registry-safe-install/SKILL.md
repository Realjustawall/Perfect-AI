---
name: ztx14-curated-shadcn-registry-safe-install
description: Use the shadcn registry CLI safely, preserve existing components.json settings, and verify the exact installed files and dependencies.
---

# Install Isometric items without overwriting project setup

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Before install
1. Inspect `components.json`, package manifest and lockfile, React version, Tailwind v4 setup, aliases, current registries, and existing component filenames.
2. If needed, add `@isometric` to the current registry map as `https://isometric.buildlab.in/r/{name}.json`; merge only the missing key. Preserve all other namespaces and options.
3. Run the CLI for the smallest relevant item, not the all bundle by default. The site's agent-readable docs specify React 19, Tailwind CSS v4, and shadcn CLI.
4. Review the registry item JSON first for `files`, `dependencies`, `registryDependencies`, and type; do not assume name-based dependencies.
5. Inspect the diff and confirm no unrelated files, aliases, CSS tokens or versions were replaced.
6. Run typecheck, dev/build and an interaction smoke test.

## Rollback
Keep a clear pre-install diff or git checkpoint. Revert only generated files and config changes introduced by this task; do not delete preexisting components or registries.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [registry](https://isometric.buildlab.in/r/registry.json)
- [shadcn-registry](https://ui.shadcn.com/docs/registry/registry-json)
- [shadcn-config](https://ui.shadcn.com/docs/components-json)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
