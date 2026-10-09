# Detailed playbook: Vibe Design MD — Reference to DESIGN.md
Original: https://github.com/aakashdhar/vibe-skill/blob/main/vibe-design-md/SKILL.md
License handling: not confirmed; independent adaptation

## Trigger matrix
- Activate for: user-provided mockup, screenshot, existing HTML, desired visual identity
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Request source screenshot/site files if they are not provided; do not invent exact pixels.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Classify evidence into measured DOM values, estimated visual values, or user preferences.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Measure layout scale, gutters, font structure, foreground/background roles and component shapes.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Record brand identity constraints and disallowed elements; distinguish resemblance from exact source parity.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Export DESIGN.md with provenance, confidence and responsive variants.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Make a side-by-side browser fixture and report unreconciled differences.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Provenance/confidence are attached to every nontrivial inferred decision.
- No external live site is scraped without user authorization and working tool.
- Both RTL and LTR components have explicit font stacks and spacing rules.

## Negative cases
- Do not claim pixel-perfect from a single screenshot.
- Do not fetch a named brand token catalog unless it exists and is licensed.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.