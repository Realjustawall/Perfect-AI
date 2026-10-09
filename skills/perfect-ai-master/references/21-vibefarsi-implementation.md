# VibeFarsi full offline-capable integration workflow (NO MCP)

Official source: https://vibefarsi.ir/docs and https://vibefarsi.ir/skills
Official repository: https://github.com/TronIsHere/vibefarsiui (MIT noted on its README; recheck license in your selected release).

## Meaning of "all" in this pack
- Bundled: complete slug index of **279** advertised items from the previously observed catalog, one original acceptance/implementation contract per slug, grouped design and motion guidance, and install scripts.
- Not bundled: VibeFarsi's original component implementations, animations, themes, or other source (cannot be downloaded to this container). The install scripts download them into **your own React project** on your machine via **official CLI**, not MCP.
- The 14 `zt-*` localization skills are independently authored alternatives, not upstream maintained originals.
- `npx vibefarsi list` should be used to reconcile catalog changes on the date of installation.

## Supported local install (React + Tailwind CSS v4)
1. Save/commit project. Check package manager, tsconfig aliases and React/Tailwind version. Do not install all if incompatible.
2. Inspect and run `npx vibefarsi@latest init --dry-run` then `npx vibefarsi@latest init` (with user approval). It writes `vibefarsi.json`, theme tokens, fonts, RTL configs and models' instructions as described by official docs.
3. Dry-run selected items: `npx vibefarsi add button calendar price --dry-run` then install them, or run bundled `install/install-vibefarsi-all.ps1 -ProjectPath ... -Execute` to install every advertised installable asset (can be resource-intensive).
4. Run package manager lockfile update, typecheck and build; examine generated CSS import collisions and type aliases.
5. Check `registry-index.json`, individual item cards in `registry/vibefarsi-items` and real installed code. Do not treat explanatory cards as source code.
6. If want true offline portability after first install, commit copied components and installed packages to lockfile/package cache. Browser app itself does not require MCP to run.

## Install safety
- Default automation is DRY-RUN. Explicit `-Execute` (Windows) or `--execute` (Linux/macOS) required to change a project.
- Do not execute remote installers without reviewing dependencies, license and project compatibility.
- Installable categories: components, blocks, charts, animations, backgrounds, templates, sites, design-systems, skills; treat theme / installation paths specially. CLI support for every slug may evolve; skip and log unavailable slugs rather than asserting success.
- This process downloads the upstream implementation; generated documentation files are original, not unauthorized repackaging.

## Category-specific acceptance
- Components: all prop states, focus-visible, keyboard, controlled/uncontrolled, RTL and tooltips/popovers boundary flipping.
- Blocks: real content, fluid columns, CTA semantics, image alt and layout shift prevention.
- Charts: data array contract, date/number localization, accessible table alternatives, color-blind encodings.
- Animations: purpose, timeline, performance, cleanup, pointer/keyboard, reduce-motion.
- Backgrounds: decorative pointer-events none, text contrast at worst pixel, mobile fallback, overdraw.
- Templates/Sites: route/a11y/SEO/loading/errors, design tokens and actual data or explicit samples.
- Themes: role mapping/contrast on every state, no arbitrary magic values.
- Skills: individually install Codex skill directories where upstream CLI may output to `.claude/skills` (copy to `.agents/skills` only after inspection).
