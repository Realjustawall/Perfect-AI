# Design Intelligence Engine — production engineering reference

Establish constraints and information hierarchy before choosing a visual language. Score design candidates for user task fit, accessibility, novelty, content, brand fidelity and implementation budget. Return a traceable decision record: problem, audience, approved mood, disallowed clichés, palette, typography, layout, motion owner, and skill shortlist. Use deterministic recommendations first, creative divergence second. Never infer fake user studies.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. intent-classifier

**Mechanism:** Map explicit customer goal, action, audience and constraints into structured fields with confidence and unknowns.

**Failure pressure:** Do not equate product category with visual style.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 2. brand-extraction

**Mechanism:** Read assets and source materials; extract logo geometry, typography cues, tone and semantic colors.

**Failure pressure:** Do not invent brand colors from an industry stereotype.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 3. audience-archetypes

**Mechanism:** Make explicit expected literacy, device context, urgency and accessibility needs.

**Failure pressure:** Do not present invented personas as user research.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 4. visual-language-selector

**Mechanism:** Score editorial, utilitarian, playful, cinematic, brutalist, premium and accessible styles against requirements.

**Failure pressure:** Reject clichéd gradients without a stated reason.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 5. reference-moodboard

**Mechanism:** Capture evidence-backed crop, composition, type rhythm, contrast and interaction for each reference.

**Failure pressure:** Keep observed and inferred details separate.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 6. information-architecture

**Mechanism:** Build hierarchical page maps around user questions, content priority and primary journeys.

**Failure pressure:** Avoid decorative sections with no job.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 7. motion-engine-router

**Mechanism:** Choose CSS, Anime.js, GSAP, Motion, Rive, Theatre or Three.js per owned property and use case.

**Failure pressure:** Prevent two engines competing for the same transform.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 8. skill-retrieval-ranking

**Mechanism:** Select a small set of precise Skill files via keyword, purpose and dependency matching.

**Failure pressure:** Avoid loading all 1500+ Skill files into context.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 9. style-diversity-guard

**Mechanism:** Evaluate similarity to default layouts, hero tropes and repeated cards; choose a divergent composition.

**Failure pressure:** Do not trade readability for novelty.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 10. decision-trace

**Mechanism:** Record alternatives, rejected solutions, constraints, risks, confidence and testable acceptance criteria.

**Failure pressure:** Do not claim algorithmic taste is objective.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 11. project-brief-validator

**Mechanism:** Check supplied language, content, target browsers, library versions, performance and delivery criteria.

**Failure pressure:** Do not ask user to repeat known constraints.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

### 12. design-brief-to-tokens

**Mechanism:** Translate final choices into semantic CSS and type/space/motion tokens.

**Failure pressure:** Preserve brand restrictions over arbitrary palette generation.

**Execution:** Capture a normalized DesignBrief JSON; enumerate 3 alternatives; score with written justification; emit a decision record and selected Skill names.

**Acceptance:** Run design router on at least 3 dissimilar briefs and check no identical automatic palettes/engines are forced.

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
