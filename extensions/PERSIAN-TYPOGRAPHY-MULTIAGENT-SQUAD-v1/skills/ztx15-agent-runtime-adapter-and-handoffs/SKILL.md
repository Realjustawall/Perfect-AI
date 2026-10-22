---
name: ztx15-agent-runtime-adapter-and-handoffs
description: Adapt role profiles and Skills to the actual agent host, choose managers-as-tools or handoffs, and avoid claiming unsupported subagent execution.
---

# Agent Runtime Adapter and Handoffs

## Goal
Turn the role profiles in `agents/*.md` into a host-appropriate workflow without assuming that markdown files create live agents.

## Runtime discovery
1. Identify the actual host (for example, OpenAI Agents SDK, Codex/IDE agent support, or a single-agent chat environment) and confirm its documented subagent/MCP/skill-loading capability.
2. If specialists should contribute bounded research while one coordinator owns the response, prefer a manager with specialists exposed as tools. If a specialist should take over a branch, use a handoff. Use code-orchestrated steps when the flow must be deterministic and auditable.
3. Do not configure or install a new MCP server, run an installer, create account connections, expose tokens, or rewrite project settings without the required user approval and environment access.
4. If no real multi-agent runtime exists, execute the roles sequentially in one agent: research → architecture → implementation → review → QA → release audit. Label this as sequential role-based work, not live multi-agent execution.

## Handoff contract
Each role returns: objective, decisions, sources/evidence, owned files, changes made, test commands/results, unresolved risks, and next owner. The orchestrator merges results, resolves contradictions and owns the final answer.

## Sources
- https://openai.github.io/openai-agents-js/guides/multi-agent/
- https://openai.github.io/openai-agents-js/guides/handoffs/
- https://developers.openai.com/api/docs/guides/agents/orchestration
- https://motion.dev/docs/ai-kit
