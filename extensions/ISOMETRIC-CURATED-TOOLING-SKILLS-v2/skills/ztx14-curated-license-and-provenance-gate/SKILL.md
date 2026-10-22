---
name: ztx14-curated-license-and-provenance-gate
description: Check licenses, provenance, dependency impact and vendor policy before copying code or adding an animation runtime.
---

# Audit dependency license and source provenance before adding tooling

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Procedure
- Prefer references to official documentation over copying upstream Skill text or source files into this pack.
- Before adding a dependency, inspect its exact package, version, license, transitive dependencies, maintenance status and project policy.
- Treat registry-installed source as code to review; inspect imports and any remote asset or network access it introduces.
- Keep source URLs and date of research in the provenance file. Distinguish tested behavior, documented behavior, and inferred recommendations.
- Do not imply a third-party project endorsed the custom skill.
- If license terms are modified, absent or ambiguous, do not vendor code automatically; use the official install method or request legal review.

## Primary references
- [shadcn-registry](https://ui.shadcn.com/docs/registry/registry-json)
- [isometric](https://isometric.buildlab.in/llms.txt)
- [rive-react](https://rive.app/docs/runtimes/react/react)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
