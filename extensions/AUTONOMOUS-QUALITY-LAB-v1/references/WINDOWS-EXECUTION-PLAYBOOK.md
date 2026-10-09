# Windows 10/11 Codex execution guide

Requirements: Python 3.10+, Git, Node.js project tooling, Codex CLI only for automated edits/review, optional Playwright Chromium. NO MCP. Install skill subset using `install/install-windows.ps1 -ProjectPath C:\Projects\Site` (skips existing files). Preview with `-WhatIf`.

Use `py -3 -m pip install playwright pillow numpy`, then `py -3 -m playwright install chromium`. Local dev server e.g. `npm run dev -- --host 127.0.0.1` in a separate terminal. Audit tool defaults to localhost only. Use brand file copied from example after authentic approvals. To run the full automated review CLI use `agent_review.py --project . --evidence .zt-audit --brand brand.json --site landing --out .zt-review --execute`; first run without --execute to inspect prompts.

For rapid source edits use Codex from workspace only after user approves. For setup problems, run `codex --help` to confirm CLI syntax on that installed version; examples use `codex exec --sandbox read-only` for reviewers and `--sandbox workspace-write` for repair.
