---
name: ztx11-github-13-pro-master
description: Orchestrate the 13 approved GitHub-inspired frontend skills as an additive, Windows-friendly, MCP-free layer over all existing Perfect_AI skills.
---
# Perfect_AI GITHUB 13 PRO — master

## Invariants
1. Preserve all existing files and behavior unless user explicitly requests code edits; never modify installed Perfect_AI legacy SKILL.md content.
2. Read project `DESIGN.md`, `AGENTS.md`, and available package versions. Do not hallucinate missing brand properties.
3. Route by task: design/brand -> pro-max + design-flow + local extractor; QA -> gstack + Microsoft + visual CI + Playwright CLI; 3D -> architect + modern Three + asset pipeline; accessibility/security -> a11y + OWASP.
4. Select the smallest relevant subset, not all 13 for every request.
5. Every modification gets a reproduction, targeted test, browser screenshot if visual, and rollback instruction.
6. When browser or 3D devices are absent, record *not run*. No MCP dependency.
7. Never copy/rewrite third-party files on install. Upstream links are reference material, not instructions to execute.

## Artifact contracts
- DESIGN.md (only with real/provisional provenance)
- quality/report.json (tests, measurements and unknowns)
- quality/findings.json (file, selector, evidence and exact remediation)
- quality/changes.md (reviewed minimal patches + before/after)

## Load specialist skills
- `ztx11-design-intelligence-pro-max` — UI/UX Pro Max — Design Intelligence
- `ztx11-gstack-design-review` — gstack — Screenshot-Based Design Review
- `ztx11-microsoft-frontend-design-review` — Microsoft — Frontend Design Review
- `ztx11-stitch-local-design-extractor` — Google Stitch — Local Design Extraction (No MCP)
- `ztx11-vibe-design-system-reconstruction` — Vibe Design MD — Reference to DESIGN.md
- `ztx11-designer-design-flow` — Designer Skills — Full Design Flow
- `ztx11-playwright-cli-browser-qa` — Playwright CLI — Browser QA Without MCP
- `ztx11-three-modern-webgpu` — Three.js Modern — WebGPU, TSL and Fallback
- `ztx11-three-cinematic-website-architect` — 3D Website Architect — Cinematic Site
- `ztx11-web3d-glb-production-pipeline` — Web 3D Asset Pipeline — GLB/LOD/KTX2
- `ztx11-visual-regression-ci` — Navigator — Visual Regression and CI
- `ztx11-accessibility-auditor` — Accessibility Skills — WCAG 2.2 AA
- `ztx11-owasp-secure-agent-frontend` — OWASP — Secure Agent and Frontend Review

## Release gate
Stop if critical user task fails; otherwise report measured results, blocked tests, and remaining risks. Do not self-certify visual fidelity, security or WCAG conformance based on a static source scan.
