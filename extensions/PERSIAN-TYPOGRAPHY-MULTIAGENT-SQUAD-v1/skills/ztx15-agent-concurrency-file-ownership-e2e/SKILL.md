---
name: ztx15-agent-concurrency-file-ownership-e2e
description: Prevent conflicting writes during parallel agent work through file ownership, isolated worktrees, serialized integration, and post-merge validation.
---

# Multi-Agent Concurrency and File Ownership

## Rules
- Create a task graph before parallel work. Each write task must have an explicit allow-list of files/paths.
- Multiple agents may research the same topic, but one file has exactly one active writer at a time. Cross-file interfaces and schema decisions are owned by the architect/orchestrator.
- For code changes, prefer isolated branches/worktrees or separate patch files. If isolation is unavailable, serialize write operations.
- An agent must not reformat or opportunistically refactor files outside its allow-list.
- Shared manifests, lockfiles, route registries, package configuration, global CSS and agent indexes are integration-owned unless expressly assigned.
- Merge one result at a time; inspect conflicts and resulting diff before taking the next. Never resolve a conflict by silently choosing one agent's content.

## Required workflow
1. Record ownership map and expected outputs.
2. Launch only independent work in parallel.
3. Require each agent to identify exactly which paths it touched.
4. Review each patch in isolation.
5. Merge serially and rerun relevant checks after integration.
6. Audit the final file inventory and confirm no unrelated deletes or rewrites occurred.

## Stop condition
If two agents need to write the same file, pause one writer and ask the orchestrator to sequence the edits. Do not rely on last-write-wins behavior.
