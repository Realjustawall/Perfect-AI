# Perfect_AI QA matrix — executable acceptance and manual evidence

| Test case | Target | Pass condition | Evidence |
|---|---|---|---|
| Layout 320/375/768/1024/1440 | all pages | no horizontal overflow; no clipped input/buttons | browser snapshots |
| Zoom 200%, font 200% | content | readable and no overlap | manual zoom |
| Persian RTL + embedded English | bidi | punctuation, inputs, mixed digits in correct order | visual + copy test |
| Keyboard nav Tab/ShiftTab/Escape/Enter/Space | controls | visible focus, correct popup escape and closure | Playwright |
| Contrast text/control/semantic | all states | AA thresholds, boundary visibility | color-engine + pixel check |
| prefers-reduced-motion | all motion | no critical content hidden; loops paused/stilled | emulated media |
| Scroll 0→1→0 at slow and fast rates | pinned scenes | deterministic object + text state | keyframe screenshots |
| Refresh at 50% scroll | pinned scenes | restored state without flash | Playwright reload |
| 3D WebGL unavailable | canvases | fallback hero/text still usable | mocked context |
| WebGL context loss | 3D | controlled reinitialization or fallback | manual context event |
| Background tab / visibility | loops | CPU/GPU suspended when inactive | performance monitor |
| CPU throttling / mobile DPR | 3D | degraded particle/FX settings without missing content | Chrome throttle |
| Unmount and route reentry 20 times | component resources | no accumulating listeners, canvases, WebGL contexts | memory profiles |
| Lighthouse / CWV | primary pages | targeted and documented LCP/CLS/INP budgets | Lighthouse report |
| Form bad data/loading/error/cancel | forms | accessible inline error, no silent failure | unit/e2e |
| No JavaScript | critical content | accessible static text/navigation where applicable | browser disable JS |
| Long Persian translations | all components | wrapping, no fixed height clipping | pseudo-locale |
| VibeFarsi registry install | integration | CLI dry-run then diff and license reviewed | terminal logs |

## Recommended Playwright commands after app dependencies installed
```bash
npx playwright install chromium
npx playwright test
npx lighthouse --help
```

Do not claim browser tested if only parsing JS passed. Compare screenshot images and report render quality separately from syntax validation.
