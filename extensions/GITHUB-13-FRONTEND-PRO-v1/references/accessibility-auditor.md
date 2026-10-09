# Detailed playbook: Accessibility Skills — WCAG 2.2 AA
Original: https://github.com/mgifford/accessibility-skills
License handling: AGPL-3.0 repository; no upstream source copied

## Trigger matrix
- Activate for: forms, tables, motion, screen reader, keyboard, RTL, reduced motion, accessible 3D
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Read project ACCESSIBILITY.md if supplied; use WCAG 2.2 AA as proposed default, not unsupported certification.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Inventory landmarks, headings, focus order, error states and non-pointer access.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Run axe-core tests and document rule coverage.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Perform manual keyboard, 200-400% zoom, screen-reader and touch spot checks.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Make moving content pauseable and support prefers-reduced-motion; preserve meaning when motion disabled.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Provide accessible text fallback for canvas, 3D and chart-based content.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Primary tasks are operable without mouse and errors are announced.
- No horizontal scrolling at equivalent 320 CSS px except necessary exceptions.
- Automated scan plus manual check evidence are both present.

## Negative cases
- A clean axe report does not certify WCAG conformance.
- Do not copy AGPL source into differently licensed distribution without review.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.