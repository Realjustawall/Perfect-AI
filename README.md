# Perfect-AI — Zero_Tech Codex Skills

A repository for the **Zero_Tech GITHUB DESIGN ENGINEERING** all-in-one Codex skills pack.

> **Upload state (2026-10-09):** Repository initialized with the safe upload helper. The full 6,571-file source package and its ZIP have **not yet been uploaded**. Do not mistake this bootstrap for the full release.

## Current package inventory

| Property | Value |
| --- | --- |
| Archive | `Zero_Tech_GITHUB_DESIGN_ENGINEERING_All_In_One_Codex_Skills.zip` |
| Files | 6,571 |
| `SKILL.md` entries | 2,702 |
| ZIP size | 18,628,300 bytes |
| ZIP SHA-256 | `44a32033be8898c7fde06286e4ed3594f606b3e4dbdb7fff4b972c2d8fd20ff2` |
| Top-level folder inside ZIP | `Zero_Tech_TITAN_PLUS_Codex_Skills/` |

Includes main skills, 3D/WebGPU workflows, design/motion, test tooling, GitHub Design Engineering and other Zero_Tech add-ons. The Jiro.build sample add-on is **excluded**.

## Upload the exact package from Windows

1. Obtain the original ZIP from your ChatGPT conversation.
2. Have Git for Windows and PowerShell available; authenticate `git` with GitHub.
3. Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\tools\push-package.ps1 -ZipPath "C:\path\to\Zero_Tech_GITHUB_DESIGN_ENGINEERING_All_In_One_Codex_Skills.zip"
```

The helper validates the exact archive SHA-256, extracts all files safely into a cloned repository, **does not overwrite any existing tracked file**, commits the new content to `main`, and includes a copy of the original ZIP under `releases/`. Inspect the commit/diff before using the repository as a source for production.

## Security and licenses

Skill files, dependencies and bundled references have differing licenses and validation status. Review their included notices before redistributing or reusing assets. Skill documentation is not proof that every third-party integration has passed browser, GPU, or Windows tests.

## No MCP required

The Zero_Tech workflow is designed to work with Codex CLI and the tools specified by each skill. Some integrations require separately installed npm/Python tools.
