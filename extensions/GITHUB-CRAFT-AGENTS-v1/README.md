# Perfect_AI GITHUB DESIGN ENGINEERING v1

This is an **add-only** extension of Perfect_AI REALTIME 3D POWERHOUSE. Includes **37 newly authored offline Codex skills**, detailed workflows for nine confirmed GitHub projects, isolated tools and example applications. All 6,514 old entries are preserved in the enclosing ZIP; test proof is shipped separately.

Important: this ZIP does **not** claim to contain full original GitHub projects or all their official sub-skills. Original upstream copies are not bundled by default. Official sources can be staged **non-destructively** from GitHub by running `python tools/sync_upstreams.py --repo ... --execute` once network access exists; where license is unclear/restricted, source-stage is intentionally disabled.

## Systems
- [Impeccable Design Craft](https://github.com/pbakaus/impeccable): `ztgc-impeccable-design-craft` (Apache-2.0)
- [Emil Design Engineering](https://github.com/emilkowalski/skills): `ztgc-emil-design-engineering` (MIT)
- [Taste Skill](https://github.com/Leonxlnx/taste-skill): `ztgc-taste-creative-direction` (MIT)
- [Official shadcn/ui Workflow](https://github.com/shadcn-ui/ui): `ztgc-shadcn-ui-workflow` (MIT)
- [Agent Browser CLI](https://github.com/vercel-labs/agent-browser): `ztgc-agent-browser-cli` (Apache-2.0)
- [React Doctor CLI](https://github.com/millionco/react-doctor): `ztgc-react-doctor-cli` (Modified MIT: AI training and substantially paid hosted service restrictions)
- [Remotion Production Skills](https://github.com/remotion-dev/skills): `ztgc-remotion-production` (NO clear top-level redistributable license discovered in skills repo; Remotion runtime has separate eligible-use license)
- [shadcn Improve Advisor](https://github.com/shadcn/improve): `ztgc-shadcn-improve-advisor` (MIT)
- [Emil Prototype Variants](https://github.com/emilkowalski/skills): `ztgc-emil-prototype-variants` (MIT)

## Installation on Windows
From the extracted Perfect_AI root, in PowerShell:

```powershell
.\extensions\GITHUB-CRAFT-AGENTS-v1\install\install-windows.ps1 -ProjectPath "C:\Projects\YourSite" # dry run
.\extensions\GITHUB-CRAFT-AGENTS-v1\install\install-windows.ps1 -ProjectPath "C:\Projects\YourSite" -Execute
```

Each skill is copied into `.agents/skills/` iff its name does not already exist; support files are copied into `.perfect-ai-extensions/GITHUB-CRAFT-AGENTS-v1/` iff target does not exist. No existing files overwritten. Start a new Codex session after adding skills.

## Official source staging (optional, NEVER auto-run)
Use tools/sync_upstreams.py to stage licensed original Markdown and scripts into NEW `.perfect-ai-external-sources` folder, not into prior files. This requires internet, opt-in execute and license review; Remotion and React Doctor are intentionally excluded from automatic source staging. Do not run downloaded scripts without inspecting them.

## Local tools and examples
- `tools/route.py`: conservative intent routing, not an AI benchmark.
- `tools/layout_variant.py`: deterministic design exploration manifest generator.
- `tools/evidence_plan.py`: evidence-to-implementation handoff without editing project source.
- `tools/validate_pack.py`: YAML frontmatter and dependency path validation.
- `tools/sync_upstreams.py`: opt-in, capped upstream source-stage, license-sensitive.
- `examples/prototype-picker/`: original, offline, interactive HTML/CSS/JS variant picker.
- `examples/remotion-demo/`: an authored small React video composition; npm installation needed.
- `tests/`: stdlib and Node tests, distinct from runtime browser/GPU verification.

## Limits
Cannot certify original upstream CLI behavior, actual React build, remotion encoding, or browser rendering in this sandbox unless those tests have been executed. Upstream versions change, so read CLI help and project lock files before use.
