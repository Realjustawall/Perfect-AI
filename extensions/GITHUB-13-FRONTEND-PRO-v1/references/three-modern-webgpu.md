# Detailed playbook: Three.js Modern — WebGPU, TSL and Fallback
Original: https://github.com/Picaresco/threejs-skill
License handling: MIT

## Trigger matrix
- Activate for: Three.js WebGPU, TSL, shader material, version migration and feature support
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Detect installed Three.js version and rendering backend before choosing WebGPU APIs.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Define a WebGL2 fallback and static accessible representation; do not require experimental backend on every device.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Use correct color space, tone mapping, pixel ratio, material and lights for renderer.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Keep camera and subject placement dependent on container bounds and text exclusion zones.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Measure render timing separately from loading/compilation.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Dispose resources and stop animation when page hidden, unmounted or context lost.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Scene renders at 390/768/1440 on supported browser or fallback is shown.
- Changing DPR/resize does not crop the hero model or obscure text.
- Engine version and backend are recorded in evidence.

## Negative cases
- Do not claim WebGPU uniformly supported.
- Do not combine different animation engines against same material transform.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.