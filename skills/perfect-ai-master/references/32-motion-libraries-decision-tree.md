# Motion engine taxonomy — avoid conflating libraries

**Anime.js** (`animejs` v4): timeline, stagger, SVG helpers, text splitting, ScrollObserver, draggable, WAAPI adapter. Official: https://animejs.com/documentation/

**Motion** (`motion`): separate modern library with `animate()`, `scroll()`, `inView()`, React integration, hybrid/mini engines, view transitions. Official: https://motion.dev/docs/animate ; https://motion.dev/docs/scroll . "animate.js" in user requests may mean generic animate() or one of several unrelated legacy repos—do not assume the same package.

**Animate.css** (`animate.css`): class-based ready-made 2D entrance/emphasis/exit effects; use sparingly, avoid complex timeline orchestration; respect reduced motion. Official https://animate.style/

**GSAP**: imperative timeline and ScrollTrigger (pin/scrub/matchMedia), strong scene choreography; licensing and plugin terms must be verified. https://gsap.com/docs/v3/Plugins/ScrollTrigger/

**Three.js**: GPU 3D rendering, scene/camera/shaders/animation; not a substitute for accessible DOM. **CSS transitions/keyframes, WAAPI, View Transitions**: native first for common states. **Rive/Lottie**: runtime of authored files; vector/state-machine motion rather than arbitrary 3D engine. **Lenis**: optional smooth scrolling, never hijack native behavior by default.

## Pick one property owner
CSS hover transform, Anime.js scrub transform, Motion layout transform and GSAP scroll trigger **must not simultaneously modify the same transform style**. Assign DOM motion owner and 3D scene motion owner separately, and one shared progress controller. Maintain a scene graph and lifecycle cleanup.

## Decision
Simple hover: CSS; transitions across pages: native View Transition/Motion; timeline SVG lettering: Anime.js; advanced pinned storytelling: Anime.js observer or GSAP; geometry/shaders: Three.js; keyframed ready-made notification: Animate.css; complex React layout animation: Motion. Do not add every library just because it appears in this encyclopedia.
