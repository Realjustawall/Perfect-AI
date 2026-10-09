# kinetic-typography — independent recipe

**Domain:** Cinematic Animation / Multi-engine  
**Why it exists:** Animate words/chars via masks with semantic readable baseline and bidi-correct grouping.

## Configuration and boundaries
Inputs: storyboard, timeline keyframe map, scroll state, semantic controls and compatible installed versions.

## Step-by-step execution
1. State observable success behavior in one sentence: Animate words/chars via masks with semantic readable baseline and bidi-correct grouping.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

## Required acceptance
1. Reverse scrolling yields same scene at same normalized progress.
2. Reduced motion displays full content in useful order.
3. Single owner controls each transform property; cleanup on route change.

## Example baseline (adapt to this topic)
```js
import { animate, createTimeline, stagger } from 'animejs';
const tl = createTimeline({ defaults: { ease: 'out(3)', duration: 680 }, autoplay: false });
tl.add('.headline-word', { y: ['100%', '0%'], opacity: [0, 1], delay: stagger(36) });
// Drive with an explicit state machine or ScrollObserver; do NOT let GSAP simultaneously own y/opacity.
// On dispose: revert or cancel animations and observers after checking installed API version.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [animejs](https://animejs.com/documentation/)
- [theatre](https://www.theatrejs.com/docs/latest/api/core)
- [rive](https://rive.app/docs/runtimes/react/react)
- [lottie](https://lottiefiles.com/)
