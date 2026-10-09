# text-masking — independent recipe

**Domain:** Advanced Typography Engine  
**Why it exists:** Create overflow/mask reveal without hiding focus or essential copy.

## Configuration and boundaries
Inputs: FA/EN copy, actual font files/licenses, fallback metrics and visual hierarchy.

## Step-by-step execution
1. State observable success behavior in one sentence: Create overflow/mask reveal without hiding focus or essential copy.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: rem/clamp type scale, robust script shaping and bidi isolation, enforce max measure and font-display, preserve accessible text under kinetic animation.

## Required acceptance
1. Persian joins/diacritics remain intact; Latin terms isolated.
2. 400% zoom and missing-font fallbacks are readable.
3. Kinetic typography retains accessible original text and reduced-motion version.

## Example baseline (adapt to this topic)
```html
<h1 lang="fa" dir="rtl">با <bdi dir="ltr">Perfect_AI</bdi> طراحی کنید</h1>
```
```css
h1 { font-size: clamp(2rem, 1.2rem + 3vw, 5.5rem); line-height: 1.2; overflow-wrap: anywhere; }
.prose { max-inline-size: 70ch; line-height: 1.8; font-synthesis: none; }
[lang=fa] { letter-spacing: normal; }
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [mdn-containers](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [wcag](https://www.w3.org/TR/WCAG22/)
