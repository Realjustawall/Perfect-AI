# Pixel-level visual regression, browser verification and confidence reporting

Screenshots have deterministic font loads, animation pause/seek time, stable content, seeded data, fixed viewport/DPR and known browser version. Record CSS layout metadata, screenshot by browser size, diffs with tolerance only for known antialias variability. Compare **meaningful visible elements** not just whole-page RGB. Detect right-to-left clipping, horizontal overflow, sticky overlap, 3D fallback, CTA disappearing, content behind navbar.

Do not claim pixel-identical reference recreation without authorized original assets/source and pixel-diff against original at matched dimensions/times. Distinguish code inspection, source verification, runtime browser smoke, screenshot QA and real device QA.

Suggested Playwright configurations: chromium/webkit/firefox where available; widths 320 390 768 1024 1440; reducedMotion='reduce'; locale='fa-IR'; colorScheme='dark'; deviceScaleFactor=2; orientation landscape; extra suites for offline/no-JS. Retake baselines only after inspecting intended changes.
