---
name: ztx4-skill-trust-security-skill-relevance-ranking
description: "Implement skill relevance ranking for Skill Verification & Security with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Skill Verification & Security / skill-relevance-ranking

## Precise purpose
Limit retrieval to task-relevant skills and document why each was loaded.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/skill-trust-security.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/skill-trust-security.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: archive/git file set, declared license, origin commit, installed skill directory and permissions.

## Implementation workflow for this technique
1. **Identify specific need:** Limit retrieval to task-relevant skills and document why each was loaded.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: SHA-256 baseline, inspect untrusted directives for destructive commands/exfiltration, namespace skill additions, never overwrite existing files by default.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `skill-relevance-ranking` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Limit retrieval to task-relevant skills and document why each was loaded.
- Tests: detectable malicious sample, deliberate name collision, byte-identical old ZIP entries, no remote execution, provenance ledger.
- No original archive entries missing or altered.; Unsafe inbound instructions and license restrictions reported.; Default installer never overwrites existing skill folders.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [github-awesome](https://github.com/frankxai/awesome-design-agent-skills)
- [github-frontend](https://github.com/hueyexe/frontend-agent-skills)
