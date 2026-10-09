---
name: ztx8-autonomous-lab-master
description: Perfect_AI additive quality lab. Evidence-based self-correction, many site-type-specific reviewer agents, 3D composition, rendered color schemes, brand, responsive/mobile GPU optimization, and Windows Codex CLI workflows.
---
# Perfect_AI Autonomous Quality Lab — v1

## Absolute preservation rule
All 2133 previous skills, former recipes and all 5467 earlier ZIP entries must remain byte-identical. New resources go only under `extensions/AUTONOMOUS-QUALITY-LAB-v1/`. Installation is additive; any existing destination is skipped.

## Dispatch and activation
1. Analyze user's exact site type, render modes, languages, input modalities, brand identity and actual runtime stack.
2. Read `config/site-types.json`; run `scripts/choose_reviewers.py` for relevant specialists, not all specialists for every site.
3. Select 3–12 useful new ztx8 skills by the actual task, with previous Perfect_AI skills for dependencies. Never load all skills into context.
4. Enforce approved brand source of truth and user-specified restrictions. Unknown fields remain unknown.
5. Build or fix a route, run browser evidence, choose critical defects, trace root cause, make one bounded change, rerun tests. Repeat up to 4 rounds with no unattended destructive actions.
6. Render 5 palette variants on real components if palette work is requested; brand-locked hues may not be changed.
7. Use accurate 3D bounding volume + camera FOV + screen-safe slot on viewport changes; adapt GPU workload rather than removing all mobile motion.
8. Route feedback to independent roles (critic, advocate, brand guardian, motion director, mobile/GPU, conversion, localization etc). Arbiter merges evidence, preserves positives.
9. Do not claim a browser test when only syntax was checked or a desktop emulation when not on physical device.

## Concrete workflow
Windows: `py -3 -m pip install playwright pillow numpy` then `py -3 -m playwright install chromium` (explicit user action). Audit: `py -3 scripts/audit_browser.py --url http://127.0.0.1:5173 --out evidence`.
Read-only loop: `py -3 scripts/self_correct.py --url http://127.0.0.1:5173 --project . --brand brand-identity.json --out evidence/loop`.
Explicit write mode: add `--apply --i-understand-writes` and ensure a clean Git tree; Codex CLI must be installed and logged in.

## Completion gate
Explain tests, PASS/FAIL/NOT_TESTED, evidence paths, known limits, unchanged features and unverified devices. No silent removal or overwrites.
