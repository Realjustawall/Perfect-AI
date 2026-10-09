# Detailed playbook: Microsoft — Frontend Design Review
Original: https://github.com/microsoft/skills/blob/main/.github/skills/frontend-design-review/SKILL.md
License handling: MIT

## Trigger matrix
- Activate for: PR review, design system compliance, creative quality, frontend UX audit
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Choose one review type: PR, creative, design-system, accessibility, or product-task flow.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Create an inventory of components and states used by the changed screen.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Check task hierarchy, primary actions, recoverability and keyboard navigation.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Compare existing DESIGN.md tokens and actual computed styles for representative components.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Audit error, empty, loading, offline and permission-denied states.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Output severity, evidence, remediation, owner and acceptance criteria; never assert tests you did not run.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- A reviewer can reproduce critical issues by route + viewport + steps.
- Token violations are enumerated with file references.
- Keyboard/focus outcomes are proven by interaction rather than static markup alone.

## Negative cases
- Avoid relying solely on aria attributes for accessibility.
- Do not turn an opinion into a blocking bug without criteria.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.