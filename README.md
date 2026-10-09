# Perfect AI

**Perfect AI** is the new name of the former Zero_Tech GITHUB DESIGN ENGINEERING all-in-one Codex skills pack.

> **Publication status:** The repository contains the publication guide and helper. The complete source tree and ZIP release are **not on GitHub until the upload command below succeeds**.

## Current release

- Filename: `Perfect_AI_All_In_One_Codex_Skills.zip`
- Package root: `Perfect-AI/`
- Original files preserved byte-for-byte: **6,571**
- Codex skills: **2,702**
- New additive files: **6**
- ZIP size: **18,667,144 bytes**
- ZIP SHA-256: `77dfa38d913d6d2308a0fd6f928b811366d0ccdc6ba5d07920dbc32a6ddf5108`
- MCP: **not required**
- Jiro.build sources/examples: **not included**

The root folder was renamed, while the bytes of all original files are preserved. Legacy internal documents may still mention Zero_Tech as a former name.

## Install Codex skills on Windows

1. Download **Perfect_AI_All_In_One_Codex_Skills.zip** from the ChatGPT conversation.
2. Extract it. Open PowerShell in the extracted `Perfect-AI` directory.
3. Run:

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\MyWebsite" -Execute -CopyExtensionAssets
```

The project directory must exist. Installation skips all existing skills and extension directories; it never overwrites them. Remove `-Execute` to preview. Restart Codex.

## Publish full source + archive to this repository

Prerequisites: Git for Windows, authenticated GitHub access with permission to push to `main`, and the downloaded ZIP on your computer.

Clone this repository and run the **verified** uploader:

```powershell
git clone https://github.com/Realjustawall/Perfect-AI.git
cd Perfect-AI
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOU\Downloads\Perfect_AI_All_In_One_Codex_Skills.zip"
```

The script checks the **exact ZIP SHA-256** and only stages **new additions**. It refuses overwrites of differently hashed files. It pushes extracted source to `package/` and the original ZIP to `releases/`.

Alternatively, run the uploader that is included under `Perfect-AI/tools/push-perfect-ai.ps1` inside the ZIP; that variant verifies the SHA-256 of each of the 6,571 legacy files using the embedded manifest.

## Verification

The ZIP includes `tools/verify-perfect-ai.py` and `PERFECT-AI-LEGACY-SHA256.json`. The original files were individually verified before distribution and no old data was deleted.

## Notice

Skill documentation does not mean every GPU/browser/npm integration has been independently tested. Review individual licensing notes when redistributing third-party references. The old `tools/push-package.ps1` is deprecated and belongs to the prior archive name.
