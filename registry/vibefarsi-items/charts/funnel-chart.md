# VibeFarsi item: `funnel-chart` (charts)

- **Origin/catalog**: https://vibefarsi.ir/charts/funnel-chart
- **Official install** (in compatible project; after CLI dry run): `npx vibefarsi add funnel-chart`
- **Source status here**: original behavior specification, **NOT downloaded upstream component source**.

## Functional behavior
Implement a `funnel-chart` from the official registry if installed; otherwise build an independently authored component matching user requirements. Define props, events, states, accessible names, user interactions and error outcomes before visuals.

## Integration plan
1. Inspect existing React project, Tailwind v4, locale, icon system and tokens.
2. `npx vibefarsi add funnel-chart --dry-run` and review proposed files; install only if desired/compatible.
3. Create a demo route with actual data/content, one responsive mobile viewport and desktop viewport.
4. **Data shape, domain, axis and readable marks**: handle empty/zero/negative/extreme values, tooltip keyboard, Persian digit options, accessible alternative data table.
5. If enhancing with Anime.js, isolate animated wrapper from library's own state transforms; test cleanup and reduced motion.

## Unique implementation recipe
**Data contract**: identify units, x/y axis meaning, dates/locale, null and negatives; provide accessible summary and data table. Color should not be the only encoding.

## Acceptance tests
- No focus loss, clipping or overflow, stable layout on small widths.
- No hidden critical content when JS/animation is disabled.
- If installed, compare markup against actual upstream source and adapt without removing license notices.
