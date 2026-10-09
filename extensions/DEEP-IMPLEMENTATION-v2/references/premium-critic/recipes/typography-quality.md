# typography-quality — independent recipe

**Domain:** Premium Design Critic  
**Why it exists:** Assess letter shaping, bilingual rhythm, headline display and readable long-form measures.

## Configuration and boundaries
Inputs: target brief, rendered screenshots/recordings, interaction QA and brand evidence.

## Step-by-step execution
1. State observable success behavior in one sentence: Assess letter shaping, bilingual rhythm, headline display and readable long-form measures.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: score visual hierarchy, content credibility, distinctiveness, motion meaning, typography, color and mobile; propose ranked fix list backed by screenshots.

## Required acceptance
1. Each critique includes screenshot evidence and severity.
2. Rejected clichés explained relative to product brief.
3. Recommended redesign tested for regressions.

## Example baseline (adapt to this topic)
```json
{"criterion":"visual-hierarchy","evidence":"mobile-390.png: primary CTA below decorative hero and requires excessive scroll","severity":"high","fix":"move action next to value proposition","verify":"rerun mobile screenshot + keyboard tab order"}
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
- [playwright](https://playwright.dev/docs/test-snapshots)
