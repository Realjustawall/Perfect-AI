# Licenses, attribution, provenance

The ZIP contains original Perfect_AI bridge code and Skill prose, NOT copies of upstream third-party source trees or copyrighted sample 3D assets.
The upstream packages must be installed separately in the destination app under their respective licenses. Confirm upstream transitive dependencies and lockfile in production. No MCP is needed.

- **pmndrs/drei-vanilla**, MIT: https://github.com/pmndrs/drei-vanilla — SplatLoader and Splat patterns; npm package @pmndrs/vanilla. Check the upstream LICENSE for full terms.
- **takahirox/tsl-node-editor**, MIT: https://github.com/takahirox/tsl-node-editor — Experimental upstream node UI patterns only; not vendored. Check the upstream LICENSE for full terms.
- **pmndrs/postprocessing**, Zlib-style: https://github.com/pmndrs/postprocessing — EffectComposer and post-processing framework. Check the upstream LICENSE for full terms.
- **Vanilagy/mediabunny**, MPL-2.0: https://github.com/Vanilagy/mediabunny — Decoded video samples; dependency installed via npm and not redistributed in ZIP. Check the upstream LICENSE for full terms.
- **repalash/threepipe**, Apache-2.0: https://github.com/repalash/threepipe — Scene viewer/editor plugin patterns; dependency installed via npm. Check the upstream LICENSE for full terms.

Important: The Mozilla Public License v2 may impose source-file obligations when distributing modified MPL-covered code. This archive does **not** vendor or modify upstream Mediabunny source. If the end product distributes third-party bundled JS, supply license notices and satisfy the actual upstream license.

`@pmndrs/vanilla` is the documented loader for legacy `.splat`; `.ksplat` and `.ply` need a suitable alternate pipeline. Third-party room/object captures are excluded.
