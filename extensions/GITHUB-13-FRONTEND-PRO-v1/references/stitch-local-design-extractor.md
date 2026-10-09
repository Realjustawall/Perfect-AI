# Detailed playbook: Google Stitch — Local Design Extraction (No MCP)
Original: https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md
License handling: Apache-2.0

## Trigger matrix
- Activate for: extract design tokens from local frontend, CSS, React, Vue, Svelte; no Stitch API or MCP
- Review only by default. Read existing code and record version/stack first.

## Actions with evidence
### Step 1: Scan local project only, honoring .gitignore and excluding vendor/build assets.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 2: Extract CSS custom properties, @theme declarations, font families, spacing, shadows, radii and layout primitives.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 3: Record file path and selector for each extracted token; identify likely dark/light theme scopes.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 4: Compare CSS tokens with Tailwind/Bootstrap theme configuration where available.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 5: Create DESIGN.md with known facts and explicit UNKNOWN fields; no fabricated values.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

### Step 6: Validate representative computed styles in browser before treating extracted tokens as authoritative.
Inputs: project files and supplied brand evidence.
Action: implement the smallest measurable unit and preserve previous behavior.
Proof: target selector/route + screenshot or CLI log + explicit pass/fail/no-run.
Fallback: report blocked dependencies, keep code untouched.

## Acceptance checklist
- Extraction completes offline and does not invoke Stitch/MCP.
- Every asserted token contains file/selector provenance.
- Unknown logo/brand values remain unknown until supplied.

## Negative cases
- Regex-based extraction is a preliminary inventory, not a full CSS parser.
- Do not merge all values from nested selectors into global theme.

## Source licensing and limits
The contents of this playbook are new, project-specific procedural guidance. Referenced upstream code may require separate license notices, attribution, or compatibility review before vendoring.