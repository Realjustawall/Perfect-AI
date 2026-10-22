---
name: ztx15-agent-font-license-and-commercial-use-gate
description: Verify exact font release licenses, approve lawful use in commercial UI within license conditions, preserve notices, and block unverified proprietary assets.
---

# Font License and Commercial-Use Gate

## Project authorization
The project owner authorizes selecting and using fonts in the project catalog **to the extent the exact release license permits**. Prefer Vazirmatn for Persian UI when its exact package and glyph coverage check out. This instruction is not a license grant from the font author and is not blanket permission for proprietary fonts.

## Procedure
1. Resolve the exact family, release/tag/commit, package and downloaded file. Prefer upstream repositories or official font distribution services over mirrors.
2. Inspect the actual package license file and record its name/version. Do not rely solely on search snippets, old README text, file extension or catalog label.
3. For a release actually distributed under SIL OFL 1.1, use and bundling in commercial websites/apps are generally permitted under its conditions. If redistributing the font binary, include required copyright/license text, respect Reserved Font Name terms, follow modification/renaming conditions, and never sell the font by itself.
4. If the license is absent, ambiguous, proprietary, dual-licensed or differs from the catalog, stop and resolve the rights before bundling. Ask the project owner for a valid license when required; do not assume permission.
5. Track runtime delivery separately from legal rights: fonts loaded from a CDN still require terms-compliant use, and downloaded font files should have provenance recorded.
6. Do not state that “all catalog fonts are free” or “every font is commercially cleared”. Distinguish `license verified for exact release`, `family has upstream OFL but release unchecked`, and `verify-before-use`.

## Evidence record
Font family; version/commit; asset filename; upstream URL; exact license filename/version; modification status; bundling/notice obligations; glyph test; reviewer; date checked.

## Official references
- https://openfontlicense.org/ofl-faq/
- https://software.sil.org/fonts/faq/
- https://github.com/rastikerdar/vazirmatn
- https://github.com/aminabedi68/Estedad
