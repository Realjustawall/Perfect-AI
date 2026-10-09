# VibeFarsi item: `magnetic-button` (animations)

- **Origin/catalog**: https://vibefarsi.ir/animations/magnetic-button
- **Official install** (in compatible project; after CLI dry run): `npx vibefarsi add magnetic-button`
- **Source status here**: original behavior specification, **NOT downloaded upstream component source**.

## Functional behavior
Implement a `magnetic-button` from the official registry if installed; otherwise build an independently authored component matching user requirements. Define props, events, states, accessible names, user interactions and error outcomes before visuals.

## Integration plan
1. Inspect existing React project, Tailwind v4, locale, icon system and tokens.
2. `npx vibefarsi add magnetic-button --dry-run` and review proposed files; install only if desired/compatible.
3. Create a demo route with actual data/content, one responsive mobile viewport and desktop viewport.
4. **Timeline, initial/final poses and motion role**: handle scroll reverse, hover cancel, reduced motion, no infinite loop leak and low powered devices.
5. If enhancing with Anime.js, isolate animated wrapper from library's own state transforms; test cleanup and reduced motion.

## Unique implementation recipe
**Effect**: gentle pointer attraction. **Implementation mechanic**: normalized cursor delta to spring. **Specific risk**: keyboard focus no motion dependence.

**Animation ownership:** CSS/Anime.js or SVG owns transforms, never two simultaneously. Provide `prefers-reduced-motion` static complete content.

## Acceptance tests
- No focus loss, clipping or overflow, stable layout on small widths.
- No hidden critical content when JS/animation is disabled.
- If installed, compare markup against actual upstream source and adapt without removing license notices.
