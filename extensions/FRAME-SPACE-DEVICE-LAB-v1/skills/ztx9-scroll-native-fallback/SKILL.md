---
name: ztx9-scroll-native-fallback
description: Feature-detected CSS scroll animations for Codex Perfect_AI production websites. Additive to all previous skills.
---

# Feature-detected CSS scroll animations

## Task-specific procedure
Use CSS.supports for scroll() and view() independently, choose one engine, fall back to passive event + single RAF, never run both concurrently.

## Integration
Read `.agents/ztx9-frame-space-device-lab/references/02-scroll-compatibility.md` and execute its validation contract. Start by establishing baseline and technology versions; avoid forcing this Skill on unrelated routes or states. After integration, run browser/device tests applicable to this feature, compare evidence and provide the exact files changed.

## Completion criteria
Record screenshot/report or measurements, testing environment, pass/fail and unresolved issues. Preserve old skills and functions. The mere existence of this SKILL.md is not evidence of implementation.
