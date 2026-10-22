---
name: ztx15-multiagent-file-ownership
description: Multi-agent file ownership protocol. Use this when implementing, reviewing, licensing, or orchestrating Persian-aware web interfaces and agents.
---

# Multi-agent file ownership protocol

Before parallel work, the coordinator assigns one write owner per file/path. Specialists may read shared context but must not concurrently write the same component, CSS token file, manifest, lockfile or test fixture.

Use a simple work ledger: task ID, agent, owned paths, dependencies, expected output, tests, status. Shared config/dependency changes belong to the architect or integrator only. Code reviewers and auditors are read-only until they return findings. Integrate patches serially, run tests after integration and repeat review if a shared contract changes.

If the platform lacks real subagents, perform the same roles sequentially. Never claim concurrency that did not happen.

