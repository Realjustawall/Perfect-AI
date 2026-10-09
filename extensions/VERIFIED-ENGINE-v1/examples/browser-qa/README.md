# Browser QA: deterministic fixture, real browser tests

From this directory: `npm install` (requires network) then `npx playwright install chromium` and `npm run test:chromium`. You may install Firefox/WebKit too and run `npm test`. The tests use a bundled file fixture by default. To test your site set `Perfect_AI_TEST_URL=http://localhost:4173/` (PowerShell `$env:Perfect_AI_TEST_URL='http://localhost:4173/'`) and adapt selectors to the actual site instead of relying on fixture labels.

Failure artifacts: `test-reports/artifacts` includes trace.zip for failing tests and screenshot/video. Inspect: `npx playwright show-trace path/to/trace.zip`. This fixture is a **2.5D CSS animation** test harness, **not** proof that a Three.js scene ran. For real 3D use a dedicated WebGL integration test in the target app.
