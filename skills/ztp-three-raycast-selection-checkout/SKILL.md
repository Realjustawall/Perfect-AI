---
name: ztp-three-raycast-selection-checkout
description: Apply Accessible 3D picking via three to a checkout form, including implementation code, responsive constraints, RTL, reduced motion and browser acceptance tests. Use for checkout animation or responsive frontend engineering.
---

# Codex skill: Accessible 3D picking for Checkout form

For each user request, inspect existing code first, apply the practical implementation below (do not just describe it), retain all existing product functionality, and test the actual result. The snippet is a starting integration recipe, not a complete standalone application. Avoid MCP and avoid fetching untrusted code automatically.

# Pattern: Accessible 3D picking for Checkout form

**Pattern ID:** `ztp-three-raycast-selection-checkout`  
**Technique:** THREE / Accessible 3D picking  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://threejs.org/docs/

## Why and when

Pick meshes using Raycaster, with keyboard-accessible DOM alternative. In the **Checkout form** context: fields, payment details and submit control. Important constraint: **critical controls must never be draggable or under animation**. **Use only as noninteractive, aria-hidden decorative scene.** Keep the actual checkout form in accessible HTML, outside canvas.


## Implementation prerequisites

- npm install three. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-raycast-selection-checkout" lang="fa" dir="rtl" aria-label="Checkout form">
  <h2 data-zt-heading>Checkout form: clear, real heading</h2>
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

**Scaffold note:** The checkout form requires extra interactive implementation: validation, focus and error summary. The basic scaffold is illustrative and not a complete application flow.

## Technique implementation

```javascript
import * as THREE from 'three';
const raycaster=new THREE.Raycaster(), mouse=new THREE.Vector2();
function pick(e){const box=renderer.domElement.getBoundingClientRect();mouse.set(((e.clientX-box.left)/box.width)*2-1,-((e.clientY-box.top)/box.height)*2+1);raycaster.setFromCamera(mouse,camera);const hit=raycaster.intersectObjects(scene.children,true)[0];if(hit) document.querySelector('#zt-raycast-selection-checkout [data-zt-status]').textContent='3D element selected';}
renderer.domElement.addEventListener('click',pick);
// Mirror all selection actions in DOM buttons and remove handler on dispose.
```

**Runtime contract:** Bootstrap once: `const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(42,1,.1,100); const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true}); camera.position.z=5; const clock=new THREE.Clock();` Mount the renderer canvas inside `[data-zt-scene]`, add ambient/directional light for standard materials, and drive `update(delta,elapsed)` from a single `requestAnimationFrame` loop. The snippet is inserted into this host. Test WebGL context loss, reduced motion, and cleanup. The GLB URL is a placeholder until an asset is supplied.

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

- [ ] Correct semantic hierarchy and real content for checkout form.
- [ ] Verified: validation, focus and error summary.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.
