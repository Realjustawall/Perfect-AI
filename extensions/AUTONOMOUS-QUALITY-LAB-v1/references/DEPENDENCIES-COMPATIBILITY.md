# Dependency/version intelligence (Windows)

Before adding packages, inspect `package.json`, lockfile, `npm ls`, TypeScript/React version, browser support, CDN usage and package licenses. Never assume newest package automatically works with current stack. R3F, Drei, Three and React must use compatible peer ranges established from installed manifests. If a version mismatch appears, show specific installed values and a migration plan; don't silently reinstall or overwrite lockfile.

Prefer one motion owner per transform: choose GSAP, Anime.js or Motion for a target property, with Three.js rotation controlled through a single uniform/controller. Keep CSS animation for accessible microinteractions where appropriate. Audit packages with `npm audit` but consider advisories case by case. Preserve npm lockfile reproducibility.
