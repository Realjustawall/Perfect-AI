# Design of a cinematic site, end-to-end

Start from narrative storyboard, not a random effects checklist. For each scene define editorial purpose, word count, focal anchor, black/white/neutral lighting hierarchy, object geometry, camera pose, motion curve, overlap, scroll thresholds, exit condition and mobile version. Motion should emphasize a single meaningful story beat at a time. Use two-layer approach: semantic DOM typography, optional WebGL decorative layer, independent fallback.

Modes: instant functional, normal motion, enhanced GPU. Preserve same content hierarchy in all. Performance and accessibility act as gates, not post-launch polish. Storyboarding sheet fields: `sceneId,title,message,cta,progressStart,progressEnd,shapeState,camera,background,focusOrder,lowPower,reducedMotion,tests`.

Build one golden scene with tests then scale template; do not hand-tune 50 scenes without shared tokens/controller.
