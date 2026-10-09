# Motion timing, springs, stagger and state transitions

Define motion token system: durations 120/180/260/400/650ms (illustrative, not universal), easing intent, spatial distance, exit vs enter, interruption and reduced mode. Use springs when continuity matters; easing curves when deterministic seek/timeline matters.

- Entrance: opacity + translate in small range, stagger 30–90ms, limit cumulative delays that block task completion.
- Exit: shorter than entrance, preserves visual continuity and focus; no hidden content in accessibility tree while still interactive.
- Scrub: progress-based interpolation and clamping; never sum delta frames if reverse scrolling must restore exact state.
- Drag: pointer velocity + spring return/clamp; honor reduced-motion and keyboard equivalent; avoid scrolling conflicts.
- For Three.js, use quaternion slerp for robust rotations and no gimbal jumps; spring damp camera target; avoid per-frame allocations.

## Audit
Check 60/120Hz refresh independence; background tab resume, animation interruption, navigation/unmount cleanup, both pointer types, meaningful state update accessibility and reduced-motion. Animation without clear purpose is an interaction defect, not extra quality.
