# Premium Design Critic — production engineering reference

Evaluate at multiple viewports with explicit criteria instead of subjective random scores. Inspect content hierarchy, font rhythm, alignment, contrast, interaction affordances, novelty, motion cohesion and task completion. Output prioritized issues each with evidence, recommended code-level fix and verification method. Never conflate a computed aesthetic heuristic with human judgment.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. visual-hierarchy

**Mechanism:** Check primary action and reading path against actual user goal.

**Failure pressure:** Avoid equally weighted elements.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 2. composition-critique

**Mechanism:** Assess negative space, balance, focal point and asymmetric intentionality.

**Failure pressure:** Do not default to centered symmetrical 3-column hero.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 3. typography-critique

**Mechanism:** Inspect font pairing, scale, Persian shaping, line-length and alignment.

**Failure pressure:** No giant display text clipping mobile.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 4. color-critique

**Mechanism:** Check palette purpose, role hierarchy, contrast, theme and screen CVD views.

**Failure pressure:** No arbitrary neon branding.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 5. interaction-critique

**Mechanism:** Inspect signifiers, state feedback, error prevention and keyboard parity.

**Failure pressure:** No decorative button without action.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 6. motion-critique

**Mechanism:** Verify rhythm, sequencing, easing, reverse scroll and motion ownership.

**Failure pressure:** No random perpetual motion overload.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 7. authenticity-anti-cliche

**Mechanism:** Flag default gradient blob, hollow metrics, stock hero tropes and unsupported proof.

**Failure pressure:** Do not accuse all gradients of being bad.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 8. content-critique

**Mechanism:** Check clarity, specificity, relevance and real trust signals.

**Failure pressure:** No invented testimonials or statistics.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 9. multiview-audit

**Mechanism:** Assess the same visual goal at 320/768/1440 and 400% zoom.

**Failure pressure:** No desktop-only judgement.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 10. prioritized-fix-plan

**Mechanism:** Rank defects by user impact, scope, confidence and estimated effort.

**Failure pressure:** Do not refactor unrelated systems for visual polish.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

### 11. before-after-diff

**Mechanism:** Save visual evidence and summary of fixed vs remaining issues.

**Failure pressure:** Never claim improvement without corresponding evidence.

**Execution:** Score by rubric with visual evidence; generate ranked changes and explicitly measure a re-render.

**Acceptance:** Inspect priority action clarity and contrast at mobile and desktop; repeat after patch.

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
