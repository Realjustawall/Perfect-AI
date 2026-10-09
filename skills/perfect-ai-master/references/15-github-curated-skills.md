# GitHub engineering skill / repository intelligence — curated references

> These links are **not** embedded GitHub-owned SKILL.md files. Each relevant workflow is independently implemented in bundled Perfect_AI skills. Before installing upstream source, audit LICENSE, dependencies and version. Some repositories are libraries, not agent skills.

| Upstream | Task/why | Direct link |
|---|---|---|
| Vercel React Best Practices | async waterfalls, bundle, SSR/RSC, memoization | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Vercel Web Design Guidelines | usability, focus, forms, layout, accessibility | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Superpowers systematic-debugging | root cause, reproductions, instrumentation | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers test-driven-development | red/green/refactor, independent tests | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers verification-before-completion | evidence based verification | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers brainstorming | requirements and tradeoff discovery | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers writing-plans | incremental engineering work plans | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers executing-plans | checkpoints, validation | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers requesting-code-review | review gates, severity | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers receiving-code-review | evidence-backed change handling | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers using-git-worktrees | isolation and safe workspace | [obra/superpowers](https://github.com/obra/superpowers) |
| Superpowers finishing-a-development-branch | merge/cleanup/release | [obra/superpowers](https://github.com/obra/superpowers) |
| UI UX Pro Max | product-oriented design system selection | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| Codex skill-creator | progressive disclosure and skill testing | [openai/skills](https://github.com/openai/skills) |
| React Three Fiber | declarative WebGL React scenes | [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) |
| Drei | camera/GLTF/helpers useful for R3F | [pmndrs/drei](https://github.com/pmndrs/drei) |
| React Postprocessing | bloom/DoF/compositing | [pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing) |
| Three.js | scenes/geometry/shader/glTF | [mrdoob/three.js](https://github.com/mrdoob/three.js) |
| Anime.js | timeline/scroll/SVG/text/WAAPI | [juliangarnier/anime](https://github.com/juliangarnier/anime) |
| VibeFarsi | RTL components/animations/templates/design systems | [TronIsHere/vibefarsiui](https://github.com/TronIsHere/vibefarsiui) |
| shadcn/ui | accessible components and distribution | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) |
| Tailwind CSS | design tokens utilities | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) |
| Radix Primitives | headless accessibility primitives | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Floating UI | anchored popovers and collision handling | [floating-ui/floating-ui](https://github.com/floating-ui/floating-ui) |
| Motion | animation alternative (avoid conflicting ownership) | [motiondivision/motion](https://github.com/motiondivision/motion) |
| Lenis | smooth scroll; accessibility/canvas caution | [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) |
| GSAP | independent commercial licensing review required | [greensock/GSAP](https://github.com/greensock/GSAP) |
| Playwright | browser screenshots, e2e, responsiveness | [microsoft/playwright](https://github.com/microsoft/playwright) |
| axe-core | accessibility audits | [dequelabs/axe-core](https://github.com/dequelabs/axe-core) |
| Lighthouse CI | performance regression gating | [GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) |
| Vitest | unit test framework | [vitest-dev/vitest](https://github.com/vitest-dev/vitest) |
| Testing Library | behavior-focused React tests | [testing-library/react-testing-library](https://github.com/testing-library/react-testing-library) |
| Zod | runtime form schemas | [colinhacks/zod](https://github.com/colinhacks/zod) |
| React Hook Form | performant accessible forms | [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form) |
| TanStack Query | async data caching | [TanStack/query](https://github.com/TanStack/query) |
| TanStack Table | headless table state | [TanStack/table](https://github.com/TanStack/table) |
| i18next | locale and plural translations | [i18next/i18next](https://github.com/i18next/i18next) |
| next-intl | Next.js i18n and routing | [amannn/next-intl](https://github.com/amannn/next-intl) |
| Embla Carousel | accessible gesture carousel | [davidjerleke/embla-carousel](https://github.com/davidjerleke/embla-carousel) |
| Lucide | iconography system | [lucide-icons/lucide](https://github.com/lucide-icons/lucide) |
| Recharts | responsive charts | [recharts/recharts](https://github.com/recharts/recharts) |
| visx | SVG charts custom | [airbnb/visx](https://github.com/airbnb/visx) |
| Leva | developer controls for 3D | [pmndrs/leva](https://github.com/pmndrs/leva) |
| Theatre.js | visual timeline authoring | [theatre-js/theatre](https://github.com/theatre-js/theatre) |
| Rive | state machine authored animations | [rive-app/rive-js](https://github.com/rive-app/rive-js) |
| Lottie Web | vector animation player | [airbnb/lottie-web](https://github.com/airbnb/lottie-web) |
| Vazirmatn | Persian typeface (licensing to verify) | [rastikerdar/vazirmatn](https://github.com/rastikerdar/vazirmatn) |

## Codex source hygiene
- Never automatically execute third-party `postinstall`, unchecked shell scripts or unpinned remote arbitrary code as part of repository discovery.
- Do not represent a named repository as a local bundled Skill unless its original files and license are actually present.
- Verify license per selected upstream path; a repository-wide MIT label does not override nested license restrictions.
- Only install explicitly approved packages. No MCP in any part of this pack.
- Capture permalink / pinned tag / commit and attribution for legally copied source.
