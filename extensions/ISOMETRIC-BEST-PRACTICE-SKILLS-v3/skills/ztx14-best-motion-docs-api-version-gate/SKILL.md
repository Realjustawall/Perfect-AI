---
name: ztx14-best-motion-docs-api-version-gate
description: Prevent agents from copying current Motion APIs into older projects without checking package versions and migration requirements.
---

# Gate Motion examples on the installed API version

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Any Motion implementation, refactor, or use of newly documented hooks/components.

## Procedure
1. Inspect `package.json`, the lockfile, package manager, and actual import specifiers before selecting APIs.
2. Check whether the project uses `motion/react`, legacy `framer-motion`, or another animation package. Do not interchange import paths blindly.
3. Consult the relevant official page for the exact feature and compare it with the installed package version and changelog/migration notes.
4. Prefer the project’s already installed API when it meets the requirement. Propose an upgrade separately if necessary.
5. Use TypeScript or build diagnostics as evidence that the API exists in the installed version; do not treat a webpage example alone as compile proof.

## Avoid
- Do not add a second animation package just because a tutorial imports it.
- Do not upgrade the package lockfile incidentally.
- Do not assume names and import paths from Framer Motion are identical to current Motion.

## Acceptance checks
- [ ] Version and import path were confirmed.
- [ ] Any upgrade is a deliberate separate change.
- [ ] Build/typecheck evidence is reported accurately.

## Primary references
- https://motion.dev/docs/react
- https://motion.dev/docs/ai-kit-install

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
