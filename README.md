# Perfect AI — by JustAWall

**Perfect AI** is an all-in-one Codex skill collection created by **JustAWall** (GitHub: [@Realjustawall](https://github.com/Realjustawall)).

**Official repository:** https://github.com/Realjustawall/Perfect-AI

**MCP is not required.** This archive contains all skill directories and integrations from the assembled release, including 3D/WebGPU, motion, interaction, design, accessibility, testing, advanced browser workflows, and video tooling. Some workflows require separately installed npm or Python packages, and external tools or GPUs for full end-to-end verification.

## Install on Windows (PowerShell)

1. Extract the ZIP.
2. Open PowerShell from the extracted `Perfect-AI` folder.
3. Run the installer from that folder:

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\MyWebsite" -Execute -CopyExtensionAssets
```

To preview without writing, omit `-Execute`. Existing installed skill folders are not overwritten. Then restart Codex.

## Publish this complete release to GitHub

1. Install Git for Windows and sign in to GitHub.
2. Download this entire ZIP.
3. Clone the official repository and run its safe upload script:

```powershell
git clone https://github.com/Realjustawall/Perfect-AI.git
cd Perfect-AI
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOU\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

The upload script checks the expected ZIP SHA-256, refuses to overwrite conflicting existing files, and stages the full extracted contents under `package/` and the ZIP under `releases/`.

## Verification and historical checksums

All code, assets and nested legacy copies are rebranded to the single product identity **Perfect AI**. Therefore previously generated checksums for pre-rebrand archives are historical records, **not valid checksums for the renamed files**. The authoritative current checksums are in `PERFECT-AI-CURRENT-SHA256.json` and `SHA256SUMS.txt`. Validate the distribution with `python tools/verify-perfect-ai-current.py` after extracting.

## Rights and accuracy

Project curation, original scripts, and packaging: **JustAWall**. Third-party materials retain their original copyright and licensing terms. Adding a skill guide does not grant ownership of a third-party project. Static recipes and adapter samples are not a guarantee that every browser/GPU integration has been tested on your device.
