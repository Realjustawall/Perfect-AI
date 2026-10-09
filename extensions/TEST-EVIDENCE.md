# Test evidence ledger (creation environment)

- **DONE**: 7 Node.js unit tests pass: contrast, OKLCH gamut, grayscale, palette count, CVD preview format, skill router, frame budget.
- **DONE**: 16 Chromium UI checks pass: 8 widths (320,360,390,430,768,1024,1440,1920) × regular/reduced motion, no horizontal overflow, working keyboard Escape/menu and direction toggle, no JS errors. The test navigated via set_content because file/localhost URL navigation was blocked in this sandbox.
- **DONE**: NEXUS Skill frontmatter parsed as valid YAML; new skills have unique names.
- **DONE**: Original archive member payload SHA256 verified unchanged after final packaging (see preservation tool).
- **NOT RUN**: Full production R3F example dependency installation, TSX bundling, GPU FPS measurement, visual-regression baselines on target hardware.
- **NOT RUN**: Dynamic Rive exported .riv assets or Theatre project real scene (source snippets require user-owned assets and compatible installed libraries).
- **NOT DONE**: Pixel-perfect reproduction of proprietary source from any referenced website.

Treat unrun checks as work remaining, not evidence of passing.
