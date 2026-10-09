# Animation ownership reference

- Anime.js owns DOM opacity/translateY of headline entry, **not** the camera transform.
- Theatre.js owns the sheet/camera position/FOV, requiring authored state and compatible @theatre/core.
- Rive owns only its canvas state machine, fired by an accessible real button, requiring a separately licensed `.riv` asset.
- For WebAudio reactive work, call `AudioContext.resume()` after a user action and stop processing when media pauses. Never play surprise audio.
- Use CSS reduced-motion baseline and avoid two drivers on the same property.

All are integration starters. No exported Rive asset or authored Theatre keyframes have been bundled.
