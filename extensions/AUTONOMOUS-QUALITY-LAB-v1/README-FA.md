# Perfect_AI AUTONOMOUS QUALITY LAB — additive extension

**Do not delete or rewrite any previous ZIP file.** Source archive: `Perfect_AI_MOTION_BRAND_MULTIAGENT_All_In_One.zip`; all 19 topic clusters, 181 NEW local skills and matching recipes added under extension prefix only.

## What was added
- Bounded self-correction with real Chromium/Playwright screenshots + source-cause repair prompts (default audit-only).
- 26 real 3D model/scene blueprints; practical Three.js fit/projection, R3F geometry component and adaptive GPU quality controller.
- Dynamic reviewers based on 15 site categories and feature flags, with read-only Codex CLI agent workers and approved brand intake.
- Color Intelligence 4.0: five renderable palettes with contrast reports and brand token locks.
- Typography, font performance, RTL, component responsive tests, scroll + motion language, dependency inspection, static quality scanning.
- Offline demo of scroll-controlled CPU-projected 3D geometry, with 16+ mobile/desktop test cases.

## Windows quickstart
1. Extract entire ZIP. Existing skills remain unchanged.
2. From main extracted ZIP folder run `powershell -ExecutionPolicy Bypass -File .\extensions\AUTONOMOUS-QUALITY-LAB-v1\install\install-windows.ps1 -ProjectPath 'C:\Projects\YourSite' -WhatIf` (only preview).
3. Rerun without `-WhatIf` after reviewing paths. The installer never overwrites existing directories.
4. Copy `config/brand-identity.example.json` outside the addon to `brand.json`, set actual identity and `approved: true` only after approval.
5. `py -3 -m pip install playwright pillow numpy` then `py -3 -m playwright install chromium`.
6. Run local web site and execute audit: `py -3 scripts/audit_browser.py --url http://127.0.0.1:5173 --out .zt-evidence --quick`.
7. Self-correct in audit-only mode: `py -3 scripts/self_correct.py --url http://127.0.0.1:5173 --project . --brand brand.json --out .zt-loop`. Actual write requires explicit flags and clean Git.

## Verification status
This archive is a tooling and skills package, not a prebuilt universal website. Included runnable scripts are tested locally; dependent external React/Three production projects require installation and integration. Mobile emulation does NOT certify performance on physical devices. No promise of constant 60fps.

## Sources
- https://playwright.dev/docs/test-snapshots
- https://playwright.dev/docs/emulation
- https://threejs.org/docs/pages/Box3.html
- https://r3f.docs.pmnd.rs/advanced/scaling-performance
- https://github.com/vercel-labs/agent-skills
- https://github.com/obra/superpowers
- https://github.com/garrytan/gstack

GitHub pages are cited as conceptual references; no upstream GitHub skill files were copied into this extension. License compliance must be verified before vendoring third-party code or binary assets.
