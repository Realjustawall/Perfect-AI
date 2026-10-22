# Perfect AI — snapshot 2026.10.22

User-supplied distribution: 9,027 files, 3,109 unique SKILL.md paths/IDs, 2,050 core skills and 1,059 extension skills across 15 skill-bearing packs. 12,632 ZIP entries, including directories; 30,917,478 compressed bytes and 60,678,127 uncompressed file bytes.

Original ZIP SHA-256: `b59d684a098da51ca397fe7499dda348945316c56e8f05c2f0fc2f1ab2c55ffd`.

The original distribution is published unchanged as `Perfect-AI-2026.10.22.zip`. Source files are applied at the repository root. Uploaded English/Persian READMEs are preserved verbatim under docs/archive; the entry-point READMEs are redesigned. Existing Git history and all 6,581 baseline file paths are preserved. Against the old payload, the supplied ZIP adds 2,446 paths and changes 8; it removes 0 file paths. Checks use decompressed SHA-256 values and ZIP CRC tests, not only filenames.

The old hash manifests predate additions. distribution-manifest.json and tools/verify-distribution.py cover this repository snapshot, including release parts and new documentation. The archive itself retains all original bytes and historical manifests.

Vazirmatn 33.003 (OFL-1.1) supplies custom artwork glyphs. The cmap contains all required Persian letters/digits; HarfBuzz shapes text before it is converted to SVG paths. External fonts are unnecessary when displaying this SVG artwork.

These package checks do not execute all 3,109 skill workflows or validate every third-party integration. The original Bash installer covers core skills only; the PowerShell installer covers the full collection and skips existing directories.

## Validation evidence

- Repository publication: 2,468 added regular-file paths and 8 changed baseline files; 0 removed baseline file paths. This includes the supplied package additions, preserved original READMEs, artwork, distribution parts, manifest, verifier and publishing workflow. The original ZIP has 9,027 files; the published repository has 9,049 regular files including its new manifest.
- Package verification: ZIP CRC and decompressed SHA-256 comparisons passed; 3,109 skill files have 3,109 unique directory IDs. The local distribution verifier reported 0 errors. The initial release [GitHub Actions run](https://github.com/Realjustawall/Perfect-AI/actions/runs/39768443459) passed the full repository/ZIP verification and published the original ZIP with matching SHA-256. Later manifest changes repeat the same CI gate.
- Typography: Vazirmatn 33.003, source https://github.com/rastikerdar/vazirmatn, OFL-1.1; required notices are retained in docs/assets/Vazirmatn-OFL.txt. The exact TTF cmap contains `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹`. In the local browser QA page the actual font file loaded, `document.fonts.check` returned true, and Persian prose/shaping was visually inspected. Artwork uses HarfBuzz-shaped glyph outlines, so its display does not depend on a viewer downloading the font. Ordinary README text uses GitHub's own typography.
- Layout: 16 English/Persian README pages across the eight projects were rendered at 1280 × 1000; local images loaded without overflow. Perfect AI and ZDIS were also checked at 390 × 844 without page overflow. Persian captions, mixed-script content, code blocks and the showcase card were visually reviewed.
- Accessibility/performance review: action images have descriptive localized alt text and normal anchor destinations; SVG assets are static and require no scripts, external fonts or animation. No automated accessibility scanner, Lighthouse run or full light-theme regression suite was performed. The artwork check does not certify every packaged external workflow, GPU integration or third-party project.
