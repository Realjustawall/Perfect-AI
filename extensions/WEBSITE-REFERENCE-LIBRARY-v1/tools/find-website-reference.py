#!/usr/bin/env python3
"""Search the isolated Perfect AI website design reference catalog."""
from __future__ import annotations
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "catalog.json"
BRANDS = ROOT / "examples" / "brands"

def norm(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[_/\\\-]+", " ", s.casefold())).strip()

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("query", nargs="*", help="keywords to search for")
    parser.add_argument("--theme", choices=("light", "dark", "mixed"), help="filter by reference theme")
    parser.add_argument("--deep", action="store_true", help="search full DESIGN.md, tokens.json, and CSS files")
    parser.add_argument("--limit", type=int, default=15, help="maximum results (default: 15)")
    args = parser.parse_args()
    terms = [norm(q) for q in args.query if norm(q)]
    if not terms:
        parser.error('provide search terms, e.g. "editorial serif"')
    if args.limit < 1:
        parser.error("--limit must be at least 1")

    try:
        data = json.loads(CATALOG.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"Cannot read reference catalog: {exc}")
        return 2

    results = []
    for item in data.get("references", []):
        if args.theme and item.get("theme") != args.theme:
            continue
        corpus = " ".join(str(item.get(k, "")) for k in ("name", "title", "theme", "tagline", "summary", "id"))
        full_doc = ""
        if args.deep:
            base = BRANDS / item["name"]
            chunks = []
            for filename in ("DESIGN.md", "tokens.json", "variables.css", "theme.css"):
                try:
                    chunks.append((base / filename).read_text(encoding="utf-8", errors="replace"))
                except OSError:
                    continue
            full_doc = " ".join(chunks)
            corpus += " " + full_doc
        normalized_corpus = norm(corpus)
        hits = sum(1 for term in terms if term in normalized_corpus)
        if hits:
            name_text = norm(item.get("name", ""))
            title_text = norm(item.get("title", ""))
            rank_score = hits
            if terms and name_text == " ".join(terms):
                rank_score += 100
            elif any(term and name_text.startswith(term) for term in terms):
                rank_score += 20
            if any(term and term in title_text for term in terms):
                rank_score += 8
            results.append((rank_score, hits, hits == len(terms), item, full_doc))

    if not results:
        print("No matches found. Try broader keywords or omit --theme.")
        return 0

    # Prefer exact brand names, then complete term matches and higher match scores.
    results.sort(key=lambda row: (row[2], row[0], row[1], len(row[3].get("summary", ""))), reverse=True)
    exact = [r for r in results if r[2]]
    shown = (exact if exact else results)[:args.limit]
    print(f"Website reference library: {len(data.get('references', []))} references; showing {len(shown)} result(s)")
    if not exact and len(terms) > 1:
        print("No entry matched every term; showing best partial matches.")
    for rank_score, hits, all_hits, item, full_doc in shown:
        print(f"\n{item['name']}  | theme={item.get('theme','unknown')} | match={hits}/{len(terms)}")
        print(f"  {item.get('summary','')[:340]}")
        if args.deep and full_doc:
            lower = norm(full_doc)
            match_at = min((lower.find(term) for term in terms if lower.find(term) >= 0), default=-1)
            if match_at >= 0:
                print(f"  excerpt: …{lower[max(0, match_at-90):match_at+210]}…")
        print(f"  design: {item['files']['design']}")
        print(f"  tokens: {item['files']['tokens']}")
        print(f"  CSS:    {item['files']['theme']}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
