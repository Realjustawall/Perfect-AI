# Detailed playbook: Navigator — Visual Regression and CI
Original: https://github.com/alekspetrov/navigator/blob/main/skills/visual-regression/SKILL.md
License handling: MIT

## Trigger matrix
- Activate for: visual snapshots, CI screenshot baselines, Storybook, Percy/Chromatic/Backstop
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Pick the smallest stable units: story, route, component state.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Fix font readiness, animation time, network data, locale, DPR and browser version.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Capture baselines and document approval ownership.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Compare images with threshold; save failure diff heatmaps and DOM snapshots.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Integrate into CI as opt-in check with artifacts; avoid expensive full-site permutation explosion.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Require human sign-off for intentional large visual changes.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Baseline and changed screenshots are reproducible under same browser/version.
- Diff image and failing selector/context are attached to CI report.
- Motion-specific tests are separated from static snapshot tests.

## Negative cases
- Do not use zero-pixel diff on unrelated GPU drivers.
- Do not automatically approve new baselines after code changes.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.