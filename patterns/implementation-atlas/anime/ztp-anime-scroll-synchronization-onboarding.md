# Pattern: Scroll-linked reveal for Onboarding steps

**Pattern ID:** `ztp-anime-scroll-synchronization-onboarding`  
**Technique:** ANIME / Scroll-linked reveal  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://animejs.com/documentation/events/onscroll

## Why and when

Bind progression to scroll location; test reverse scroll. In the **Onboarding steps** context: numbered steps and continue control. Important constraint: **workflow progress must be understandable without motion**. 

## Implementation prerequisites

- npm install animejs. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-scroll-synchronization-onboarding" lang="fa" dir="rtl" aria-label="Onboarding steps">
  <h2 data-zt-heading>Onboarding steps: clear, real heading</h2>
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

```javascript
import { animate, onScroll } from 'animejs';
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  animate('#zt-scroll-synchronization-onboarding [data-zt-item]', { translateY: [26, 0], opacity: [0.35, 1], ease: 'linear', autoplay: onScroll({ target: '#zt-scroll-synchronization-onboarding', sync: true }) });
}
```

**Runtime contract:** Import the installed v4 package through your existing bundler. Use initial content visibility that remains intact if JavaScript fails. Check exact signature for the installed minor version and convert demo selectors into component refs when needed.

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

- [ ] Correct semantic hierarchy and real content for onboarding steps.
- [ ] Verified: step navigation and disabled state.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.
