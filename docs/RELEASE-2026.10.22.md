# Perfect AI — snapshot 2026.10.22

User-supplied distribution: 9,027 files, 3,109 unique SKILL.md paths/IDs, 2,050 core skills and 1,059 extension skills across 15 skill-bearing packs. 12,632 ZIP entries, including directories; 30,917,478 compressed bytes and 60,678,127 uncompressed file bytes.

Original ZIP SHA-256: `b59d684a098da51ca397fe7499dda348945316c56e8f05c2f0fc2f1ab2c55ffd`.

The original distribution is published unchanged as `Perfect-AI-2026.10.22.zip`. Source files are applied at the repository root. Uploaded English/Persian READMEs are preserved verbatim under docs/archive; the entry-point READMEs are redesigned. Existing Git history and all 6,581 baseline file paths are preserved. Against the old payload, the supplied ZIP adds 2,446 paths and changes 8; it removes 0 file paths. Checks use decompressed SHA-256 values and ZIP CRC tests, not only filenames.

The old hash manifests predate additions. distribution-manifest.json and tools/verify-distribution.py cover this repository snapshot, including release parts and new documentation. The archive itself retains all original bytes and historical manifests.

Vazirmatn 33.003 (OFL-1.1) supplies custom artwork glyphs. The cmap contains all required Persian letters/digits; HarfBuzz shapes text before it is converted to SVG paths. External fonts are unnecessary when displaying this SVG artwork.

These package checks do not execute all 3,109 skill workflows or validate every third-party integration. The original Bash installer covers core skills only; the PowerShell installer covers the full collection and skips existing directories.
