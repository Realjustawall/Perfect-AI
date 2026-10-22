---
name: ztx14-best-motion-ai-kit-for-agents
description: Evaluate and document the official Motion AI Kit skill and hosted MCP for the project’s coding agent without silently changing project or agent configuration.
---

# Use the official Motion AI Kit and MCP deliberately

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
The task needs current Motion API documentation, usage examples, or an agent-side Motion skill. This is especially useful for Cursor, Claude Code, Copilot, Gemini CLI, Amp, and OpenCode workflows.

## Procedure
1. Inspect the repo and agent setup first. Identify which coding agent is active, whether a `/motion` skill already exists, and whether a Motion MCP entry is configured.
2. Read the current official install guide before running an installer. The current documented command is `npx motion-ai`; it asks whether setup is project-local or global and which agent to configure.
3. Do not execute installation automatically during a code task. Present the scope and files/configuration that may change, or follow the project’s explicit tool-install policy.
4. When authorized, run the documented installer at the intended scope, then inspect the diff and agent config. Verify the skill can retrieve current docs/examples.
5. If an old config points to a local MCP command requiring a `TOKEN`, compare it with the current official migration guidance; do not copy API keys into repo files or logs.
6. Keep generated source code compatible with the package version installed in the target project; current docs are evidence for API shape, not proof that the project has the same version.

## Avoid
- Do not assume a free docs/MCP server includes premium Motion+ capabilities.
- Do not claim the official skill is installed unless the relevant files and agent config were inspected.
- Do not overwrite pre-existing agent settings without an explicit diff/review.

## Acceptance checks
- [ ] The selected agent and installation scope are stated.
- [ ] No installer ran without authorization.
- [ ] Any setup diff is inspected and secrets are not added to version control.
- [ ] The exact Motion documentation/version consulted is recorded.

## Primary references
- https://motion.dev/docs/ai-kit-install
- https://motion.dev/docs/react

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
