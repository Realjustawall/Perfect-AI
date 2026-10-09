# Cinematic Animation Engine — production engineering reference

Use a single master-clock/progress coordinator with explicit ownership over each property. Animate DOM/SVG with Anime.js/GSAP/Motion only when needed; use Rive for authored state machines, Lottie for exported vector loops, Theatre.js for precise sequenced camera/object paths. Define interruption, rewind, reduced-motion end state and background-tab behavior for every sequence.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. narrative-storyboard

**Mechanism:** Draft beat sheet for anticipation, action, hold, release and transition.

**Failure pressure:** Do not animate elements without narrative purpose.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 2. timeline-orchestration

**Mechanism:** Build non-overlapping property ownership and dependency graph of sequences.

**Failure pressure:** No competing transform animation writes.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 3. animejs-stagger

**Mechanism:** Use stagger with deterministic order, boundaries and reduced-motion fallback.

**Failure pressure:** Do not animate 1000 DOM nodes individually.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 4. gsap-scroll

**Mechanism:** Tie one scrubbed timeline to scroll and register cleanup/refresh on resize.

**Failure pressure:** Do not duplicate a scroll owner.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 5. motion-react-presence

**Mechanism:** Use Motion presence states for route/modal transitions, layout stability and focus restoration.

**Failure pressure:** Avoid exit animations that trap focus.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 6. rive-state-machines

**Mechanism:** Bind Rive boolean/number/trigger inputs to semantic React state.

**Failure pressure:** Keep HTML control fallback for inaccessible canvas UI.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 7. lottie-vector

**Mechanism:** Render looped exported vector assets with pause/resume and static fallback.

**Failure pressure:** Limit JSON size and canvas overdraw.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 8. theatre-sequencer

**Mechanism:** Author timeline values in project sheet and export committed state to production.

**Failure pressure:** Do not include studio UI in production bundle.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 9. morph-target-pipeline

**Mechanism:** Interpolate matching topology, normals and bounded weights.

**Failure pressure:** Do not morph meshes with mismatched vertex counts.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 10. camera-cinematic

**Mechanism:** Use camera paths, easing, focus and parallax with mobile-safe crop.

**Failure pressure:** Prevent subject leaving mobile frustum.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 11. kinetic-typography

**Mechanism:** Sequence split spans by word/grapheme preserving accessible source text.

**Failure pressure:** Avoid duplicating text in screen readers.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 12. audio-reactive

**Mechanism:** Extract FFT bands and smooth values; require opt-in for microphone/audio.

**Failure pressure:** No autoplay audio without user activation.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 13. scroll-narrative

**Mechanism:** Separate scene chapters and map progress with clamped sections and reversible animation.

**Failure pressure:** Avoid broken back-scroll state.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

### 14. cross-engine-clock

**Mechanism:** Broadcast normalized timeline time to Three.js/canvas/DOM on one rAF.

**Failure pressure:** Avoid independent rAF loops for same stage.

**Execution:** Define a single progress clock and ownership map; implement intro, sustain, exit and reversible seek; provide disabled-motion final state.

**Acceptance:** Seek normalized timeline at 0, 0.25, 0.5, 0.75, 1 and backward; assert no duplicate raf loops.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.
