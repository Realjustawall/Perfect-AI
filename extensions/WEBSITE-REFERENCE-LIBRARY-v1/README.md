# Isolated Website Design Reference Library — Perfect AI

This additive extension contains 494 website design references from the user-provided `TEMPS.rar`, preserved under `examples/brands/`. Each source reference retains its four original files: `DESIGN.md`, `theme.css`, `tokens.json`, and `variables.css`.

## Browse and search

The bundle is a **searchable visual-design reference library**, not 494 runnable websites and not a claim that Perfect AI authored those brands' websites. To browse the local gallery, run a local server from the repository root:

```bash
python -m http.server 8000
```

Open `http://127.0.0.1:8000/extensions/WEBSITE-REFERENCE-LIBRARY-v1/examples/gallery-site/`. A local HTTP server is required because the gallery fetches `catalog.json`.

Search reference descriptions, tokens, and CSS on demand:

```bash
python extensions/WEBSITE-REFERENCE-LIBRARY-v1/tools/find-website-reference.py "editorial serif" --deep
python extensions/WEBSITE-REFERENCE-LIBRARY-v1/tools/find-website-reference.py "dashboard" --theme dark --deep
```

The machine-readable index is `catalog.json`.

## Isolation policy

- Do not preload the entire library. Search first, then open only 1–3 relevant references.
- The user's approved brand and the existing project's design system take precedence over every reference.
- Never import multiple `theme.css` files together by default. Map selected ideas to the target project's own tokens and namespace variables.
- Do not mix unrelated typography, spacing, radius, container-width, or breakpoint scales. Normalize selected values into a coherent responsive scale and validate mobile-to-desktop layouts.
- No runnable site assets, screenshots, fonts, or third-party dependencies are bundled here.

## Provenance and rights

`TEMPS.rar` was user-provided. Original reference content and names are preserved for traceability; the license status of every brand/reference has not been independently verified. Do not present the library as proof of authorship or ownership by Perfect AI.
