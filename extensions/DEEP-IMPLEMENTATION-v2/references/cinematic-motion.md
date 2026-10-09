# Cinematic Animation / Multi-engine — deep implementation playbook

**Purpose:** Choreograph intentional, reversible animation without competing animation libraries or inaccessible motion.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Create a timecode/storyboard including audio ownership and reduced-motion version.
2. Assign one engine per transform/property; orchestrate with shared normalized playback state.
3. Keep animated DOM and GPU scene driven by shared time or scroll, not nested uncontrolled RAF loops.
4. Scrub, rewind, pause, destroy and recreate cleanly; handle tab visibility and route transitions.
5. Validate reduced motion, keyboard navigation, timing continuity and mobile low-power path.

## Inputs / design constraints
Inputs: storyboard, timeline keyframe map, scroll state, semantic controls and compatible installed versions.

## Preferred implementation approach
Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

## Representative source template
```js
import { animate, createTimeline, stagger } from 'animejs';
const tl = createTimeline({ defaults: { ease: 'out(3)', duration: 680 }, autoplay: false });
tl.add('.headline-word', { y: ['100%', '0%'], opacity: [0, 1], delay: stagger(36) });
// Drive with an explicit state machine or ScrollObserver; do NOT let GSAP simultaneously own y/opacity.
// On dispose: revert or cancel animations and observers after checking installed API version.
```

## Cross-cutting quality gates
1. Reverse scrolling yields same scene at same normalized progress.
2. Reduced motion displays full content in useful order.
3. Single owner controls each transform property; cleanup on route change.

## Deep technique reference — all 22 features

### 01. `animejs-timeline`

**Output / operation:** Build Anime.js createTimeline sequences with overlap, labels and reversible events.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animejs-timeline.md) · Skill `$ztx4-cinematic-motion-animejs-timeline`
### 02. `animejs-stagger`

**Output / operation:** Stagger semantic child elements with bounded delay and reset/reveal behavior.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animejs-stagger.md) · Skill `$ztx4-cinematic-motion-animejs-stagger`
### 03. `animejs-scroll-observer`

**Output / operation:** Connect Scroll Observer to explicit scroll range and progress with reverse-scroll correctness.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animejs-scroll-observer.md) · Skill `$ztx4-cinematic-motion-animejs-scroll-observer`
### 04. `animejs-split-text`

**Output / operation:** Split textual visual layers while keeping a meaningful accessible text representation.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animejs-split-text.md) · Skill `$ztx4-cinematic-motion-animejs-split-text`
### 05. `animejs-svg-motion`

**Output / operation:** Animate path progress, drawable strokes and morphs only on compatible path topology.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animejs-svg-motion.md) · Skill `$ztx4-cinematic-motion-animejs-svg-motion`
### 06. `gsap-scrolltrigger`

**Output / operation:** Scrub pinned scenes responsibly and refresh trigger measurements on resize.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/gsap-scrolltrigger.md) · Skill `$ztx4-cinematic-motion-gsap-scrolltrigger`
### 07. `motion-layout-animate`

**Output / operation:** Animate React layout with Motion ownership and respect exit/unmount transitions.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/motion-layout-animate.md) · Skill `$ztx4-cinematic-motion-motion-layout-animate`
### 08. `css-native-waapi`

**Output / operation:** Prefer CSS transitions/keyframes or Web Animations API for simple isolated motion.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/css-native-waapi.md) · Skill `$ztx4-cinematic-motion-css-native-waapi`
### 09. `rive-state-machine`

**Output / operation:** Bind Rive state inputs to meaningful product states and provide semantic non-canvas controls.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/rive-state-machine.md) · Skill `$ztx4-cinematic-motion-rive-state-machine`
### 10. `rive-input-routing`

**Output / operation:** Map pointer/keyboard actions to Rive inputs with accessible status and cleanup.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/rive-input-routing.md) · Skill `$ztx4-cinematic-motion-rive-input-routing`
### 11. `lottie-renderer`

**Output / operation:** Load bounded JSON or dotLottie with poster and reduced-motion first-frame fallback.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/lottie-renderer.md) · Skill `$ztx4-cinematic-motion-lottie-renderer`
### 12. `theatre-sequence`

**Output / operation:** Bind Theatre.js sheet objects and sequence positions to real scene or UI state.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/theatre-sequence.md) · Skill `$ztx4-cinematic-motion-theatre-sequence`
### 13. `theatre-camera-rig`

**Output / operation:** Drive Three.js camera transforms via Theatre sheet props with constrained lens bounds.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/theatre-camera-rig.md) · Skill `$ztx4-cinematic-motion-theatre-camera-rig`
### 14. `multi-engine-clock`

**Output / operation:** Use one source-of-truth progress for Anime.js, GSAP, Three.js and Theatre where possible.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/multi-engine-clock.md) · Skill `$ztx4-cinematic-motion-multi-engine-clock`
### 15. `scroll-cinema-stages`

**Output / operation:** Define discrete semantic stages in a sticky section driven by a continuous normalized scroll value.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/scroll-cinema-stages.md) · Skill `$ztx4-cinematic-motion-scroll-cinema-stages`
### 16. `kinetic-typography`

**Output / operation:** Animate words/chars via masks with semantic readable baseline and bidi-correct grouping.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/kinetic-typography.md) · Skill `$ztx4-cinematic-motion-kinetic-typography`
### 17. `audio-reactive-motion`

**Output / operation:** Use Web Audio analyser frequency bins with consent and disabled fallback when audio is absent.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/audio-reactive-motion.md) · Skill `$ztx4-cinematic-motion-audio-reactive-motion`
### 18. `audio-beat-synchronization`

**Output / operation:** Quantize keyframes to audio beat grid with drift correction and explicit playback control.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/audio-beat-synchronization.md) · Skill `$ztx4-cinematic-motion-audio-beat-synchronization`
### 19. `morphing-shape-timeline`

**Output / operation:** Interpolate matched 3D topology or normalized SVG paths, avoiding invalid topology jumps.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/morphing-shape-timeline.md) · Skill `$ztx4-cinematic-motion-morphing-shape-timeline`
### 20. `camera-parallax-story`

**Output / operation:** Move camera and scene layers within comfort budgets, provide motion-off experience.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/camera-parallax-story.md) · Skill `$ztx4-cinematic-motion-camera-parallax-story`
### 21. `reduced-motion-staging`

**Output / operation:** Preserve information order without automatic motion when user prefers reduced motion.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/reduced-motion-staging.md) · Skill `$ztx4-cinematic-motion-reduced-motion-staging`
### 22. `animation-lifecycle-audit`

**Output / operation:** Audit RAF, timers, observers, timelines and cleanup across route mounts and unmounts.

**Implementation:** Implementation: define owner per animated property; use Anime.js timeline/ScrollObserver, GSAP, Rive, Theatre or CSS only for its owned property; normalize reversible progress.

**Proof:** Tests: scrub forward/back, pause/resume, route unmount, keyboard activation, reduced-motion information parity, no conflicting transforms.

[Dedicated recipe](./cinematic-motion/recipes/animation-lifecycle-audit.md) · Skill `$ztx4-cinematic-motion-animation-lifecycle-audit`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [animejs](https://animejs.com/documentation/)
- [theatre](https://www.theatrejs.com/docs/latest/api/core)
- [rive](https://rive.app/docs/runtimes/react/react)
- [lottie](https://lottiefiles.com/)
