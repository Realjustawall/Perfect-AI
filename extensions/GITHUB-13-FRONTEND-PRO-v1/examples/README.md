# Local examples and verification

- Start the website locally; install `@playwright/test`; run the test spec from the project root using your Playwright configuration. These tests are generic starter tests, not evidence of any particular site passing.
- To profile Three.js models, load real project assets; use `three-placement.mjs` for camera bounding math and inspect in browser after fonts settle.
- For CSS token extraction use `python tools/design_extract.py --project <project> --output DESIGN.extracted.md`; source values are candidates, not brand approvals.
- For PNG comparison use `python tools/visual_diff.py --before a.png --after b.png --heatmap diff.png --report report.json` after `pip install pillow`.
