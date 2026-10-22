# Persian Typography & Multi-Agent Squad

Append-only add-on for Perfect AI. It adds portable agent-role profiles, reusable Skills, a Persian-font catalog and a mandatory Persian typography rule. It does not replace any existing project file.

## What this extension adds
- 13 specialist role profiles and matching Skills.
- A coordinator protocol with parallel research, non-overlapping implementation ownership, handoffs, evidence-based review, and a single final integration owner.
- 20 Persian/Arabic-script font entries with source/license links and candid glyph-coverage/maintenance caveats.
- A mandatory rule: if any user-facing content is Persian, a verified Persian-capable font must actually load; Vazirmatn is the default.
- OFL use-rights guidance: commercial use and bundling are permitted under the relevant OFL version's conditions; never sell the font file by itself; preserve required notices/license if redistributing font binaries.

## Integration
Load the orchestrator skill first, then assign the `agents/*.md` profiles to separate agents if the host supports subagents. If the host only supports one agent, follow the same roles sequentially. These files describe roles and workflows; they do not provision or connect agents in an external runtime automatically.
