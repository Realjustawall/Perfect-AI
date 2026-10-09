---
name: ztp-native-safe-area-layout-pricing
description: Apply Safe-area aware layout via native to a pricing comparison, including implementation code, responsive constraints, RTL, reduced motion and browser acceptance tests. Use for pricing animation or responsive frontend engineering.
---

# Codex skill: Safe-area aware layout for Pricing comparison

For each user request, inspect existing code first, apply the practical implementation below (do not just describe it), retain all existing product functionality, and test the actual result. The snippet is a starting integration recipe, not a complete standalone application. Avoid MCP and avoid fetching untrusted code automatically.

# Pattern: Safe-area aware layout for Pricing comparison

**Pattern ID:** `ztp-native-safe-area-layout-pricing`  
**Technique:** NATIVE / Safe-area aware layout  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS/env

## Why and when

Correct safe-area/keyboard-height behavior on mobile. In the **Pricing comparison** context: plans, feature matrix, and CTA. Important constraint: **prices and feature availability must remain readable**. 

## Implementation prerequisites

- No dependency required. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-safe-area-layout-pricing" lang="fa" dir="rtl" aria-label="Pricing comparison">
  <h2 data-zt-heading>Pricing comparison: clear, real heading</h2>
  <div data-zt-collection>
    <p data-zt-item>Actual readable content; replace with verified product copy.</p>
  </div>
  <button type="button" data-zt-trigger>Open details</button>
  <span data-zt-status role="status"></span>
  <div data-zt-scene aria-hidden="true"></div>
  <!-- SVG-specific effects: add an accessible <svg> with [data-zt-path] and [data-zt-marker]. -->
  <!-- Draggable effect: add a nonessential visual node [data-zt-drag]. -->
  <!-- Dialog effect: add native <dialog> with [data-zt-close] control. -->
</section>
```

**Scaffold note:** Replace placeholder copy with project data, preserve heading hierarchy, and do not create imaginary claims.

## Technique implementation

```css
#zt-safe-area-layout-pricing{padding-inline:max(1rem,env(safe-area-inset-left)) max(1rem,env(safe-area-inset-right));padding-block-end:max(1rem,env(safe-area-inset-bottom));min-height:100svh;}
@supports(height:100dvh){#zt-safe-area-layout-pricing{min-height:100dvh;}}
#zt-safe-area-layout-pricing [data-zt-collection]{min-width:0;overflow-wrap:anywhere;}
@media(pointer:coarse){#zt-safe-area-layout-pricing :is(button,a,input,select){min-height:44px;}}
```

**Runtime contract:** If snippet uses JavaScript, place it in the existing app lifecycle and remove listeners/observers during teardown. If snippet uses CSS, include it in a bundled stylesheet with feature detection and sensible non-support fallback.

## Interaction specification

1. Initial: content is visible and usable without JS, including with WebGL unsupported.
2. Enter/gesture: motion runs only when useful; keyboard/touch users get the same affordance and outcome.
3. During interaction: preserve critical pointer events and focus. Avoid forced synchronous layout in a frame callback.
4. Cancel/interruption: dispose observers, timers, animation handles and GPU resources, restore original styles.
5. Reverse/navigate: scroll back restores progress or safely retains final state; no duplicate listeners after route changes.

## Responsive + RTL acceptance matrix

| Width or mode | Required behavior |
|---|---|
| 320–374px | one-column content, no horizontal overflow, full labels and usable tap targets |
| 375–767px | natural wrapping, dynamic browser chrome, safe-area padding |
| 768–1023px | 2-column only if container is wide enough; no reliance on hover |
| 1024–1439px | balanced layout and legible supporting copy, bounded motion amplitude |
| >=1440px | max-width limits; 3D/compositing resolution remains budgeted |
| Persian RTL | logical CSS properties, correct mixed-direction numerals and focus flow |
| 200–400% zoom | content reflows without clipped functional elements |
| Reduced motion / WebGL blocked | static readable content; controls remain functional |

## Definition of done

- [ ] Correct semantic hierarchy and real content for pricing comparison.
- [ ] Verified: screen-reader table/list equivalence.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.
