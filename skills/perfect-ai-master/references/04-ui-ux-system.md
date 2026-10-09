# UI/UX — from user need to full product system

## A. Strategy and information architecture

Begin with user jobs-to-be-done, core action, navigational map, trust requirements, mobile constraints, measurable success signal. For a product landing page: primary task = understand value → inspect capabilities → see proof → find docs → take CTA. Avoid fake statistics/case studies.

Content priority: headline communicates **what**, subhead **how/benefit**, visual **demonstrates**, CTA **next action**; sub-navigation predictable; information hierarchy scales on narrow screens.

## B. Design system anatomy

1. Foundations: layout grid, spacing scale, typography tokens, color roles, radii, border widths, elevation, iconography, motion durations, focus.
2. Primitives: Stack, Inline, Container, Grid, Box, Text, Button, Link, Input, Label, Separator.
3. Composites: form field with errors/help, navigation, card, modal, sheet, tabs, command palette, data table.
4. Patterns: authentication, loading/empty/error/success, filtering, pagination, dashboard, checkout, comparison, onboarding, confirmation, disclosure.
5. Templates: header/hero/features/stats/process/gallery/FAQ/contact/footer.
6. Governance: variants, source tokens, deprecation, docs, accessibility acceptance criteria, tests, localization.

### Typography

Use local licensed font (Vazirmatn freely available; verify license file), sensible type ramp (`clamp` display only), body 16–18px with Persian line-height 1.7–1.95, display 1.2–1.5 depending script and weight. Avoid arbitrary negative letter spacing on Persian words. Use `font-variant-numeric: tabular-nums` for tabular data; isolate code/model names LTR. Test font fallback before JS loads and line wrap after load. Use ZWNJ where Persian spelling requires it.

### Spacing and containers

Adopt consistent 4/8px spacing increments, with semantic tokens (1,2,3,4,6,8,12,16,24,32 in units) rather than unique margins per card. Desktop content max width around 72–90rem based on content; long reading copy narrower (~55–75 characters per line, language dependent). Hero intentionally may exceed reading width, body should not. White space creates hierarchy; not every section should be a grid of gradient cards.

### Shape

Choose one design motif: Perfect_AI editorial/industrial uses a consistent 0–10px or restrained 12–16px radius, thin strokes, crisp control borders, purposeful rings. If VibeFarsi design system selected, use its tokens rather than mixing radii ad hoc.

## C. Every UI component must have states

| Component | Required behavior | Accessibility/test |
| --- | --- | --- |
| Button | idle/hover/pressed/loading/disabled/focus | accessible name, keyboard enter/space, avoid double submit |
| Link | normal/hover/focus/visited where appropriate | real href, visible destination, distinguish from plain text |
| Input | empty/filled/focus/invalid/readonly/disabled | label, autocomplete, hint, aria-describedby |
| Checkbox/toggle | off/on/disabled/focus | actual input role, label click target |
| Select/combobox | closed/open/search/empty/loading | arrow navigation, Escape, active descendant |
| Tabs | active/inactive/focus | correct tablist/tab/tabpanel pattern |
| Dialog/sheet | closed/open/submitting/success/error | trap focus, Escape, restore focus, inert background |
| Tooltip | hidden/visible | nonessential info; don't hide required guidance here |
| Toast | enter/hold/exit | live region; no critical error only in ephemeral toast |
| Data table | loading/sorted/filtered/empty/paged | headers, sort state, keyboard, horizontal strategy |
| Carousel | idle/auto/drag/focus | pause autoplay, visible controls, no content inaccessible on mobile |
| 3D viewer | idle/drag/zoom/fullscreen/no-WebGL | keyboard alternative, interaction instructions, poster |
| Navigation | desktop/mobile/open/closed | visible active page, accessible toggle and escape |
| Chart | loading/loaded/filtered/empty | text summary/table equivalent, contrast and labels |

## D. UX interaction rules

- Discoverability: visual affordances for clickable things, real affordances for gestures, consistent arrow conventions in RTL.
- Feedback: on click response within a few 100ms via state indicator; asynchronous outcomes show progress, recovery path, errors.
- Forgiveness: undo reversible actions, confirmation only for destructive actions, persist draft if appropriate.
- No deceptive motion, artificial timers or fake urgency. Explicit disable + explanations rather than dead controls.
- Keyboard: tab sequence, focus ring, skip-to-content, no focus trapped behind canvas, Escape closes overlays, parity for hover interactions.
- Animation hierarchy: primary narrative gets attention; microinteractions subordinate; load animation should not delay content.
- Content microcopy: verbs first, specific errors, accessible plain language, localized numbers/dates when useful.

## E. Page-section templates

**Header:** brand link, navigation, theme/language if needed, primary CTA, mobile menu. Sticky/fixed only if it doesn't cover headings; scroll-margin-top for anchor jumps.

**Hero:** one h1, supporting statement, primary and secondary CTA if real, art as optional visual evidence, concise trust row only if factual. On 3D hero place heading in DOM and ensure clarity in reduced motion and WebGL fallback.

**Features:** 3–6 differentiation points grouped by what user accomplishes; no 12 tiny cards with repetitive copy. Alternate narrative sections, product proof, technical specs.

**Process:** numbered and ordered, ideally anchored to tangible actions; support RTL numbering and legible mobile vertical timeline.

**Demos:** actual interactive code, reset/replay, status explanation, keyboard access, pause.

**Footer:** navigation, docs, attribution, privacy/contact real URLs; no blank social links.

## F. UI audits

Run heuristic review: system visibility, real-world match, user control/freedom, consistency, error prevention, recognition over recall, efficiency, minimalist design, error recovery, help. For each problem document severity, screenshot/selector, reproduce steps, affected device and fix.

Performance is UX: loading/font flash, layout shift, scroll responsiveness, CTA responsiveness, interactive ready states, deep link behavior. See `08-quality-tests.md` for thresholds/checklists.
