---
name: ztgc-remotion-production
description: "Remotion Production Skills specialist for Perfect_AI; use for Create and render deterministic React-based video compositions with audio, captions, fonts and safe media provenance."
---

# Remotion Production Skills — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [remotion-dev/skills](https://github.com/remotion-dev/skills/blob/main/skills/remotion-best-practices/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Create and render deterministic React-based video compositions with audio, captions, fonts and safe media provenance.

## Actual procedure
1. Confirm whether output is video, still image or browser animation: prefer Remotion only for media renders/compositions.
2. Set fps, durationInFrames, width, height, safe zones and seeded random sources before animation work.
3. Use useCurrentFrame and frame interpolation, deterministic assets and seekable animation; never use wall-clock timers for render.
4. Plan media licensing, subtitles, audio peak levels, codecs, color, font loading and preview/render parity.
5. Render sample frames and final artifact; verify A/V sync and replayable exact frames using the installed CLI.

## Acceptance gates
- [ ] Do not copy upstream remotion-dev/skills text until its redistribution permission is verified
- [ ] Remotion library usage subject to its runtime license; npm is not bundled
- [ ] Use supported browser codecs and avoid assuming WebCodecs available everywhere

## Terminal workflow (verify commands on installed version)
```powershell
npx remotion compositions src/index.ts
npx remotion still src/index.ts Hero /tmp/hero.png --frame=30
npx remotion render src/index.ts Hero out/video.mp4
```

## Licensing, external tools and provenance
- Upstream: https://github.com/remotion-dev/skills
- Upstream source SHA: `77537a314531982ca870478d276de97982ec57bf` (the inspected main skill, not the new original work).
- License noted at inspection: **NO clear top-level redistributable license discovered in skills repo; Remotion runtime has separate eligible-use license**.
- Dependencies: npx skills add remotion-dev/skills (only after reviewing upstream terms); Remotion npm dependencies.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-remotion-video-composition-frame-integrity` — Fix frame rate, duration, frame markers, easing and deterministic sources; sample start/mid/end as stills.
- `ztgc-remotion-video-captions-and-rtl` — Provide readable caption safe zones and Arabic/Persian font shaping; confirm line breaking at final video dimensions.
- `ztgc-remotion-video-audio-and-export` — Balance soundtrack and speech; define output codec, render speed and licensing; verify exported duration and audible sync.
