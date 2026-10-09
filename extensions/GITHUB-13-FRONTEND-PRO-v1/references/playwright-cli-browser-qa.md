# Detailed playbook: Playwright CLI — Browser QA Without MCP
Original: https://github.com/microsoft/playwright/blob/main/docs/src/getting-started-cli.md
License handling: Apache-2.0

## Trigger matrix
- Activate for: browser automation, screenshots, scroll and pointer interactions from Windows Codex
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Check Node 20+, local project URL and permitted host; install CLI only with project approval.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Launch browser with explicit viewport and capture page snapshot.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Exercise click, type, navigation, focus, scroll and screenshot for core flows.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Record console/network errors, layout overflow and interaction failures.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Add deterministic Playwright Test specs for repeatable checks rather than relying solely on CLI sessions.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Capture visual evidence at fixed locale/theme/time, and do not pretend simulated mobile is physical hardware.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Smoke test works in local browser without MCP.
- Screenshots, log, viewport, locale and browser are saved.
- Reduced motion and touch input use distinct test scenarios.

## Negative cases
- Do not confuse Playwright CLI with its MCP server.
- Do not hard-code element refs across sessions; refresh snapshots.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.