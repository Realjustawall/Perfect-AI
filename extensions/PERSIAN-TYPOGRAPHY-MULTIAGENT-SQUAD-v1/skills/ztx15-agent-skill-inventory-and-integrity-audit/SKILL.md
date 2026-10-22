---
name: ztx15-agent-skill-inventory-and-integrity-audit
description: Inventory every SKILL.md, reconcile counts and manifests, find duplicate IDs and verify append-only package integrity without overwriting files.
---

# Skill Inventory and Integrity Audit

## When to use
Use before packaging, after adding a batch of Skills, and whenever a user asks for a complete final archive or says that nothing may be removed.

## Procedure
1. Enumerate every `SKILL.md` under the repository, including extensions and nested examples. Count paths and distinct skill IDs separately; never infer totals from README prose alone.
2. Parse each frontmatter block enough to extract `name` and `description`. Report missing fields, duplicate IDs, duplicate paths, invalid encoding, empty body, and links to missing sibling files.
3. Reconcile counts across the filesystem, extension manifests, catalog JSON, and readmes. If those disagree, do not edit old files in append-only mode. Add a versioned correction note/catalog and explain which record is authoritative.
4. Before packaging, snapshot existing path → size/CRC (or cryptographic hash when feasible). After packaging, prove every prior path is still present and unchanged; separately list new paths.
5. Ensure all added Skills are discoverable in the full-skill manifest and the relevant extension index. Do not claim a Skill is executable code: a Skill is an instruction asset unless a runtime explicitly loads and executes it.
6. Validate ZIP structure, duplicate paths, CRCs, JSON parsing, Markdown UTF-8, and catalog references. Report skipped or time-limited checks honestly.

## Required report
Return base path, added path list, prior/after `SKILL.md` count, unique-ID count, duplicate/missing-reference issues, archive integrity result, and whether old content was proven unchanged. This audit owns verification, not implementation of unrelated product features.
