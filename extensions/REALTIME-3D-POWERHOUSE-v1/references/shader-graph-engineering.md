# Visual Shader Graph Studio — Detailed engineering specification

## Outcome and ownership
Build editable typed node graphs, reject unsafe/cyclic input and export deterministic Three.js TSL material code; preview on the installed GPU backend and fall back when unsupported.

**Primary executable module:** `src/core/graph.mjs`. **Source:** https://github.com/takahirox/tsl-node-editor.
The current code provides a transparent end-to-end starter, not evidence that every upstream library is fully integrated or tested on every graphics backend.

## Accurate upstream API sketch
```js
const graph = createStarterGraph(); const tsl = compileTSL(graph); /* review generated module then bind colorNode to a NodeMaterial in installed Three.js */
```

## Work packages and gates

### 1. Typed Node Schema

**Requirement.** Define node id, operation, typed input edges, outputs, literal values and coordinate metadata.

**Implementation.** Validate required input shapes and forbid arbitrary eval, arbitrary imports, raw GLSL and untrusted data URLs. Extend the allowed op list with explicit tests.

**Acceptance.** Round-trip a deterministic JSON graph and reject duplicates, cycles and dangling edges.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 2. Dependency and Type Analysis

**Requirement.** Determine topological execution order and enforce float/vec2/vec3/vec4 compatibility before compilation.

**Implementation.** The included core checks graph validity and topology; implement stronger type inference before shipping graphs using heterogeneous scalar/vector connections.

**Acceptance.** Reject vec3 output piped into a scalar-only operation and catch an indirect dependency cycle.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 3. TSL Source Generation

**Requirement.** Convert supported nodes into version-correct imports and method calls for Three.js TSL.

**Implementation.** Use controlled code templates and stable identifier mapping, preserve numeric precision. Store generated source and source graph together. No eval in browser.

**Acceptance.** Unit test generated AST/source shape, run project build and render a material on the actual installed Three revision.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 4. Interactive Graph Workspace

**Requirement.** Display node cards, inputs, links and drag/reconnect actions with keyboard alternatives.

**Implementation.** Provide selection, undo/redo, zoom/pan, high-DPI interaction, accessibility text and edge hit tests. Demo supports node creation/position and programmatic linking; full socket dragging needs integration.

**Acceptance.** Create and reconnect via keyboard; verify zoom and drag on mouse and touch, validate export.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 5. GPU Live Material Preview

**Requirement.** Bind output to Three.js NodeMaterial for real-time preview with geometry and a color-managed renderer.

**Implementation.** Use WebGPURenderer only when supported and tested. Shader material compatibility, TSL symbols and backend details are version-sensitive; keep a separate lightweight fallback.

**Acceptance.** Render checker sphere and plane on required browsers; save screenshots and compile errors.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 6. Reusable Material Subgraphs

**Requirement.** Package node groups into reusable functions without fragile string concatenation.

**Implementation.** Namespaced parameters, deterministic versioning, recursion limits and safe imports; preserve provenance in exported graph.

**Acceptance.** Export nested group then import and verify no missing nodes or duplicate symbols.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 7. Shader Node Error Localization

**Requirement.** Map compile failures to node IDs and expose the bad edge or operation in editor.

**Implementation.** Include node-id comments in emitted code and capture renderer compile warnings. Link diagnostics back to a selected graph card.

**Acceptance.** Insert a deliberate invalid input and verify the correct node is selected with an actionable error.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 8. TSL Version Compatibility

**Requirement.** Check export against the installed Three.js package and pinned TSL APIs, not an assumed global.

**Implementation.** Experimental upstream node editor is not production-certified. Keep revisions and codegen contract in manifest; avoid latest-at-runtime CDN.

**Acceptance.** Build the generated shader under exact lockfile; flag unsupported renderer/backend instead of silently falling back.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 9. Shader Editor Accessibility

**Requirement.** Support RTL labels, English identifiers, focus and keyboard navigation in large graph UIs.

**Implementation.** Keep semantic input/control names separate from visual node labels; provide textual edge-list view and keyboard connection editing.

**Acceptance.** Tab/arrow traversal, reduced motion and 200% zoom must leave every connection operable.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 10. Shader Safety and Resource Limits

**Requirement.** Protect from arbitrarily large graphs, excessive recursion, shader compile stalls and untrusted graph JSON.

**Implementation.** Max nodes/depth, whitelist allowed operations and imported modules; prohibit JavaScript evaluation and network access from user graph data.

**Acceptance.** Fuzz graph input 1000 iterations; no execution of arbitrary code or browser hang.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

## Evidence and deployment gates
- SOURCE REVIEWED: package revision, current method signatures, license and controlled imports.
- UNIT PASS: deterministic state/timeline validations plus negative-path tests.
- BUILD PASS: `npm run build` with resolved/pinned versions in destination.
- BROWSER PASS: GPU screenshot on supported Chromium/Firefox/WebKit and a documented fallback.
- DEVICE PASS: responsive mobile GPU, touch, accessibility, p95 frame time and teardown measurements.
- PRODUCTION PASS: only when app-specific acceptance tests and asset rights are verified.

Never silently upgrade a status. No MCP. No CDN. No destructive edits to pre-existing skills.
