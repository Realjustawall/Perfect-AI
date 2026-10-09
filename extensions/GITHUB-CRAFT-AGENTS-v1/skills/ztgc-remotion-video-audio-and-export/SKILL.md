---
name: ztgc-remotion-video-audio-and-export
description: "Focused Perfect_AI Remotion Production Skills specialist: video audio and export"
---

# Video Audio And Export

## Responsibility
Balance soundtrack and speech; define output codec, render speed and licensing; verify exported duration and audible sync.

## Entry conditions
- Load the parent `$ztgc-remotion-production` only when Remotion Production Skills is relevant to this task.
- Collect concrete routes/files, user objective, dependency versions and current behavior.
- Do not rename or delete old skills or overwrite existing project content.

## Method
1. Confirm whether output is video, still image or browser animation: prefer Remotion only for media renders/compositions.
2. Set fps, durationInFrames, width, height, safe zones and seeded random sources before animation work.
3. Use useCurrentFrame and frame interpolation, deterministic assets and seekable animation; never use wall-clock timers for render.
4. Plan media licensing, subtitles, audio peak levels, codecs, color, font loading and preview/render parity.
5. Render sample frames and final artifact; verify A/V sync and replayable exact frames using the installed CLI.

## Specialized verification
- [ ] Do not copy upstream remotion-dev/skills text until its redistribution permission is verified
- [ ] Remotion library usage subject to its runtime license; npm is not bundled
- [ ] Use supported browser codecs and avoid assuming WebCodecs available everywhere

## Tool usage and artifacts
- Tools: npx skills add remotion-dev/skills (only after reviewing upstream terms); Remotion npm dependencies.
- Evidence: baseline, exact reproduction command, before/after details, screenshot or console logs when relevant.
- Minimum outcome: separate PASS/FAIL/NOT_RUN records, with a description of any unavailable runtime or device.
- Reference: `https://github.com/remotion-dev/skills/blob/main/skills/remotion-best-practices/SKILL.md`. This locally authored guidance is not a copied GitHub Skill.
