# Visual Regression Root-Cause — Evidence-based workflow

## Inputs
A stable baseline PNG and current PNG at same viewport, OS/font/locale/zoom; DOM layout snapshots for each (save via `capture-layout.mjs`), matching screenshot IDs and test metadata. Mask moving clocks, dynamic ads and user content. For motion, use Animation Frame Inspector to capture corresponding frame IDs.

## Root-cause analysis
1. Generate pixel diff bounding box, changed pixel ratio and optional heatmap via Pillow `visual-root-cause.py`. Distinguish alignment/antialiasing noise from meaningful regions.
2. Compare matching DOM elements by `data-testid`, otherwise `id`, then deterministic DOM path. Compute bounding rectangle deltas and selected CSS differences: font-family/size/weight/line-height/transform/overflow/position/gap/display/opacity.
3. Rank suspects by intersection-over-union with changed pixel region, geometric delta, changed CSS properties, position in DOM hierarchy. Parent shifts may displace all children; favor earliest displaced common ancestor.
4. Attach probable source file only when explicit `data-zt-source` marker, React development owner stack, sourcemap or test map supports it. No certainty based solely on CSS classname or path guess.
5. Produce concrete hypotheses and proposed test: `font swapped → line wrap ↑`, `parent gap modified`, `sticky offset wrong`, `canvas camera aspect mismatch`.

## Threshold policies
0.5% changed pixels is not automatically a failure across OS/GPU: use component-specific baselines and diff thresholds, lock fonts and DPR. Detect blanks and script errors separately. Low confidence candidate should be labeled speculative. Never auto-change production code on weak pixel heuristic alone.

## Quality gates
- Report must include PNG paths, viewport and screenshot environment, top causes and confidence.
- Before/after comparison of same route, locale, animation frame and data.
- Failed-to-load baseline = ERROR, not pass.
- If source mapping absent, provide element selector and CSS differences instead of inventing filename.
