# VibeFarsi item: `lapis` (design-systems)

- **Origin/catalog**: https://vibefarsi.ir/design-systems/lapis
- **Official install** (in compatible project; after CLI dry run): `npx vibefarsi add lapis`
- **Source status here**: original behavior specification, **NOT downloaded upstream component source**.

## Functional behavior
Implement a `lapis` from the official registry if installed; otherwise build an independently authored component matching user requirements. Define props, events, states, accessible names, user interactions and error outcomes before visuals.

## Integration plan
1. Inspect existing React project, Tailwind v4, locale, icon system and tokens.
2. `npx vibefarsi add lapis --dry-run` and review proposed files; install only if desired/compatible.
3. Create a demo route with actual data/content, one responsive mobile viewport and desktop viewport.
4. **CSS role tokens, semantic ramp and states**: handle light/dark contrast matrix, focus, borders, all interaction states.
5. If enhancing with Anime.js, isolate animated wrapper from library's own state transforms; test cleanup and reduced motion.

## Unique implementation recipe
**Token contract**: map brand/surface/foreground/focus/semantic/neutral scales; measure light and dark contrast.

## Acceptance tests
- No focus loss, clipping or overflow, stable layout on small widths.
- No hidden critical content when JS/animation is disabled.
- If installed, compare markup against actual upstream source and adapt without removing license notices.
