# Perfect AI — Codex Skills

**Perfect AI** is the renamed distribution of the Perfect_AI GITHUB DESIGN ENGINEERING all-in-one skills pack. It contains the **same 6,571 original files, byte-for-byte**, under the new `Perfect-AI/` root, plus additive English/Persian guides, safe Windows installation and GitHub publishing helpers.

- Repository: https://github.com/Realjustawall/Perfect-AI
- 2,702 `SKILL.md` files, including 2,050 core and 652 extension skills
- No MCP required; some third-party CLI tools require separate installations
- No Jiro.build examples

## Windows install

Unzip and open PowerShell in the `Perfect-AI` directory.

```powershell
.\install\install-perfect-ai.ps1 -ProjectPath "C:\Projects\YourSite" -Execute -CopyExtensionAssets
```

Default mode (without `-Execute`) previews installation. Existing skills and extension directories are never overwritten.

## GitHub upload

With Git for Windows authenticated and the ZIP available locally:

```powershell
.\tools\push-perfect-ai.ps1 -ZipPath "C:\Users\YOU\Downloads\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```

This publishes the source tree into `package/` and the ZIP into `releases/` on `main`, with SHA-256 verification of the 6,571 original files, refusing to overwrite different content. See `PERFECT-AI-START-HERE-FA.md` for full Persian directions.

## Preservation verification

```powershell
py -3 .\tools\verify-perfect-ai.py ".\Perfect_AI_by_JustAWall_All_In_One_Codex_Skills.zip"
```
