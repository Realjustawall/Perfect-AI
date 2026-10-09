# Production Quality Contract — No fabricated success

## Verification tiers
1. documented: Skill and recipe exist;
2. implemented: source integrates in an isolated example;
3. syntactic: JavaScript/Python compiles;
4. build-verified: target dependencies installed and build passes;
5. browser-verified: target browser recorded actual behavior;
6. device-verified: target hardware measured.
Never collapse these levels into a generic 'works'. A pass on Chromium does not imply Safari/Firefox. A mobile viewport simulation does not equal Android GPU testing.

## Evidence schema
Each check has status `pass|fail|not-run`, evidence path(s), timestamps and source of measurement. All required checks must `pass` to declare production verified; pending checks must remain visible to the user. Avoid force-updating the source repository on failed checks. Failed objective gates override subjective positive critiques.

## Cross-engine animation/3D ownership
Use a single owner for the same CSS transform or Three.js property, e.g., scroll controller sets target and Three.js RAF consumes it; never let GSAP and Anime.js independently set transform on the same node. Test reverse scroll, context-loss handling, responsive FOV / camera fit and reduced motion.

## Windows execution
PowerShell Core/Windows PowerShell, Node LTS, npm, Python 3.11+, Playwright browser install. `npx` package commands need network for first install, unless locally cached. Do not assume users have external tools installed.
