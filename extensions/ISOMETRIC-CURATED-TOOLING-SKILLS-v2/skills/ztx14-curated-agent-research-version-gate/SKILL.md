---
name: ztx14-curated-agent-research-version-gate
description: Require agents to inspect official current docs and local package versions before using animation or registry APIs.
---

# Ground implementation in current installed APIs

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Evidence-first protocol
1. Inspect package manifest, lockfile, local source, framework/build configuration, and the exact registry item JSON before suggesting an API.
2. Prefer official docs and repository source for framework/library contracts. Treat examples from posts or model memory as secondary.
3. Record API/version assumptions that could change behavior, especially Motion imports, GSAP cleanup, Lenis loop ownership, shadcn registry formats and browser test-provider configuration.
4. When a claim affects a design choice, cite the official page in the PR/report or keep a short source note in the skill/task output.
5. Do not claim to have executed a test, installed a package, visited a browser, or measured FPS unless tool output or the user environment proves it.
6. If docs and installed source disagree, follow the installed version for code and call out the mismatch for a deliberate upgrade decision.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [registry](https://isometric.buildlab.in/r/registry.json)
- [motion-spring](https://motion.dev/docs/react-use-spring)
- [gsap-matchmedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/)
- [vitest-browser](https://vitest.dev/guide/browser/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.
