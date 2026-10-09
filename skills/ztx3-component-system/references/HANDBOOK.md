# Component Architecture & Design System — production engineering reference

Implement headless state/behavior, semantic accessible markup and visual skin separately. Build React/TypeScript contracts, Storybook states, automated interaction tests, RTL, responsive containers and token inheritance. Choose Radix/shadcn/Ark/Headless only per ecosystem compatibility, never mix redundant primitives without a plan.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. component-ownership

**Mechanism:** Document public props, events, slots, keyboard contract, tokens and package boundaries.

**Failure pressure:** No hidden global style coupling.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 2. radix-primitives

**Mechanism:** Wrap Radix dialogs/popovers with controlled states and focus restoration.

**Failure pressure:** Do not override built-in focus management blindly.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 3. shadcn-variants

**Mechanism:** Treat copied source components as owned local code with variant APIs.

**Failure pressure:** Avoid patching upstream internals without tests.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 4. ark-ui-machines

**Mechanism:** Implement headless machine-state transitions and slots in Ark UI.

**Failure pressure:** Preserve SSR/hydration state consistency.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 5. headless-ui

**Mechanism:** Map disclosure/menu/dialog interactions to keyboard and pointer semantics.

**Failure pressure:** Do not attach click to generic div.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 6. storybook-csf

**Mechanism:** Create stories for loading/error/empty/success/rtl/dark/mobile states.

**Failure pressure:** Avoid stories that only render happy path.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 7. state-boundary

**Mechanism:** Define loading, empty, partial, error, offline and retry for every async view.

**Failure pressure:** Do not show fake success while promise pending.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 8. form-patterns

**Mechanism:** Use label/control/help/error linkage, validation timing and server errors.

**Failure pressure:** Avoid validation nagging before interaction.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 9. accessibility-audit

**Mechanism:** Assert roles, focus order, Escape, keyboard operation and zoom behavior.

**Failure pressure:** Automated axe is not substitute for manual SR test.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 10. design-token-inheritance

**Mechanism:** Expose CSS custom properties for density, color, shape and motion.

**Failure pressure:** No hardcoded accent in internal component.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 11. version-migration

**Mechanism:** Pin versions, document breaking changes, run codemods/test snapshots.

**Failure pressure:** Do not upgrade 4 UI libraries simultaneously.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

### 12. package-registry

**Mechanism:** Maintain component provenance, dependency map and deprecation policy.

**Failure pressure:** Never duplicate 3 near-identical modal implementations.

**Execution:** Define a typed component contract; implement semantic state transitions and storybook fixtures; map variants to design tokens.

**Acceptance:** Test keyboard focus/Escape, loading/error/empty and RTL using automated and manual cases.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.
