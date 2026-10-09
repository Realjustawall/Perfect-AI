# Detailed playbook: Web 3D Asset Pipeline — GLB/LOD/KTX2
Original: https://github.com/openai/plugins/blob/main/plugins/game-studio/skills/web-3d-asset-pipeline/SKILL.md
License handling: not verified in repository; independent adaptation

## Trigger matrix
- Activate for: 3D asset cleanup, Blender GLB export, meshopt, draco, textures and collision proxies
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Preserve original source asset and record license, unit scale, pivot and animation clips.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Export glTF 2.0/GLB, inspect mesh materials, skins, morph targets and texture count.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Set geometry and texture budgets by device tier and scene importance.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Compare Meshopt versus Draco size, decode time and rendered quality before adopting.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Use KTX2 compression selectively; confirm decoder/transcoder files in deployed build.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Create LOD levels and collision proxies when justified by scene and interaction.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 7: Test repeated asset mount/unmount and track GPU resources; do not assume transfer bytes equal GPU memory.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- GLB reopens and all animations/skins survive optimization.
- Bundle includes needed decoder files and URLs work on nested deployment paths.
- Original model and licensing notes are retained.

## Negative cases
- Compression may worsen runtime decode on some devices.
- Do not throw away morphs, normals or skinning silently.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.