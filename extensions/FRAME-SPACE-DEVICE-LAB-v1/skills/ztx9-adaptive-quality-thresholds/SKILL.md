---
name: ztx9-adaptive-quality-thresholds
description: Device-aware 30/60/90/120 Hz animation quality policy for Codex Perfect_AI production websites. Additive to all previous skills.
---

# Device-aware 30/60/90/120 Hz animation quality policy

## Task-specific procedure
Measure p50/p95/p99 rAF intervals, adapt deadlines to panel Hz, compare three warm runs, adjust DPR and GPU complexity only when data shows degradation.

## Integration
Read `.agents/ztx9-frame-space-device-lab/references/06-real-device-profiler.md` and execute its validation contract. Start by establishing baseline and technology versions; avoid forcing this Skill on unrelated routes or states. After integration, run browser/device tests applicable to this feature, compare evidence and provide the exact files changed.

## Completion criteria
Record screenshot/report or measurements, testing environment, pass/fail and unresolved issues. Preserve old skills and functions. The mere existence of this SKILL.md is not evidence of implementation.
