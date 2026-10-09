# Perfect AI

**Perfect AI** — created and published by **JustAWall**.

**Official GitHub:** https://github.com/Realjustawall/Perfect-AI

This is a complete Codex skills collection for frontend engineering, 3D, motion, design, testing, accessibility, automation and production quality, **without requiring MCP**. Individual tools may need npm, Python or a GPU for integration tests.

## Full distribution

- Package: `Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip`
- Distribution root: `Perfect-AI/`
- Complete members: **6,580**
- `SKILL.md` files: **2,702**
- Creator: **JustAWall**
- SHA-256: `fbe8fd334217717a0e5b059382c262e70990a2a9f8510a4c5de7aa0865514f23`
- No Jiro samples or assets are included.

> **Publication status:** This repository currently includes setup and upload instructions. The full source tree and original ZIP must be uploaded using the command below. Do not mistake the README for a complete upload.

## Install on Windows

1. Download the complete ZIP from the ChatGPT conversation.
2. Extract it into a directory named `Perfect-AI`.
3. Open PowerShell inside that directory and run:

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\MyWebsite" -Execute -CopyExtensionAssets
```

The installer skips existing skill directories rather than overwriting them. Run without `-Execute` to preview.

## Upload every file to this GitHub repository

Install Git for Windows and authenticate with GitHub first. Then run:

```powershell
git clone https://github.com/Realjustawall/Perfect-AI.git
cd Perfect-AI
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOU\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

The wrapper verifies the exact ZIP digest, and executes the verified uploader bundled inside it. The uploader checks all source files against the live manifest, refuses conflicting overwrites, and stages source under `package/` and the ZIP under `releases/`.

## Verification

Inside the downloaded archive, run:

```powershell
python .\tools\verify-perfect-ai-current.py
```

This verifies the extracted folder against the current checksum manifest. All nested archives are included in the current brand identity.

**Project and collection: JustAWall.** Individual third-party libraries, referenced code and examples remain subject to their own copyright and licenses.