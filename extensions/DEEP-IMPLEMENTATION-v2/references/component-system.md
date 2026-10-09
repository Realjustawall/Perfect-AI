# Component Architecture & Design System — deep implementation playbook

**Purpose:** Produce reusable, accessible, testable components with explicit contracts across headless/UI frameworks.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Define primitives/tokens and functional component requirements before selecting a library.
2. Choose one interaction implementation per component; avoid nesting competing modal/popover stacks.
3. Specify props, controlled/uncontrolled state, variants, focus handling, loading/error/empty and localization.
4. Use Storybook stories to enumerate states, including RTL and narrow container.
5. Run keyboard, screen-reader semantics, visual regression and package-size checks.

## Inputs / design constraints
Inputs: props, interaction state diagram, design tokens, headless library selection and target languages.

## Preferred implementation approach
Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

## Representative source template
```tsx
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { busy?: boolean }
function ActionButton({busy=false,disabled,children,...rest}:ActionButtonProps){
  return <button {...rest} type={rest.type ?? 'button'} disabled={busy || disabled} aria-busy={busy}>{busy ? 'در حال انجام…' : children}</button>
}
// The button remains semantic and keyboard-operable; loading feedback must not erase context.
```

## Cross-cutting quality gates
1. Semantic names, roles, values and focus are correct.
2. Every variant has loading/error/empty/disabled/keyboard where relevant.
3. Storybook stories cover RTL, themes and narrow containers.

## Deep technique reference — all 20 features

### 01. `component-contracts`

**Output / operation:** Write typed props, emitted events, controlled state and semantic DOM requirements.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/component-contracts.md) · Skill `$ztx4-component-system-component-contracts`
### 02. `radix-primitive-composition`

**Output / operation:** Compose accessible Radix primitives with a shared design token layer.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/radix-primitive-composition.md) · Skill `$ztx4-component-system-radix-primitive-composition`
### 03. `shadcn-ui-patterns`

**Output / operation:** Use shadcn component source as owned application code and keep changes reviewable.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/shadcn-ui-patterns.md) · Skill `$ztx4-component-system-shadcn-ui-patterns`
### 04. `ark-ui-state-machines`

**Output / operation:** Map Ark UI logic/presentation slots and state to the product context.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/ark-ui-state-machines.md) · Skill `$ztx4-component-system-ark-ui-state-machines`
### 05. `headless-ui-dialogs`

**Output / operation:** Integrate Headless UI focus trapping, labels and restoration.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/headless-ui-dialogs.md) · Skill `$ztx4-component-system-headless-ui-dialogs`
### 06. `storybook-state-matrix`

**Output / operation:** Create stories for default/loading/error/empty/disabled/focus/RTL/dark/narrow.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/storybook-state-matrix.md) · Skill `$ztx4-component-system-storybook-state-matrix`
### 07. `controlled-uncontrolled-props`

**Output / operation:** Avoid desynchronization between parent state and internal uncontrolled behavior.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/controlled-uncontrolled-props.md) · Skill `$ztx4-component-system-controlled-uncontrolled-props`
### 08. `accessibility-naming`

**Output / operation:** Ensure label/role/value and accessible descriptions for every interactive affordance.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/accessibility-naming.md) · Skill `$ztx4-component-system-accessibility-naming`
### 09. `focus-trap-and-return`

**Output / operation:** Implement modal focus containment and restore focus on close without deadlocks.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/focus-trap-and-return.md) · Skill `$ztx4-component-system-focus-trap-and-return`
### 10. `keyboard-roving-tabindex`

**Output / operation:** Use roving tabindex for composite widgets rather than multiple tabbable duplicates.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/keyboard-roving-tabindex.md) · Skill `$ztx4-component-system-keyboard-roving-tabindex`
### 11. `forms-validation-states`

**Output / operation:** Validate field on appropriate timing, identify problems in text and preserve input.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/forms-validation-states.md) · Skill `$ztx4-component-system-forms-validation-states`
### 12. `empty-loading-error-success`

**Output / operation:** Design four non-happy-path states with accessible announcements and retry logic.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/empty-loading-error-success.md) · Skill `$ztx4-component-system-empty-loading-error-success`
### 13. `component-tokens`

**Output / operation:** Bind typography, spacing, radius, color and motion durations semantically.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/component-tokens.md) · Skill `$ztx4-component-system-component-tokens`
### 14. `css-framework-adapters`

**Output / operation:** Produce Tailwind and Bootstrap adapters without doubling interaction ownership.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/css-framework-adapters.md) · Skill `$ztx4-component-system-css-framework-adapters`
### 15. `rtl-and-bidi-contract`

**Output / operation:** Keep DOM meaningful when toggling direction; mirror only directional decorative assets.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/rtl-and-bidi-contract.md) · Skill `$ztx4-component-system-rtl-and-bidi-contract`
### 16. `responsive-component-containers`

**Output / operation:** Make component render correctly in 280px sidebar and 1200px main region.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/responsive-component-containers.md) · Skill `$ztx4-component-system-responsive-component-containers`
### 17. `storybook-visual-qa`

**Output / operation:** Capture component stories per theme/viewport for screenshot comparison.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/storybook-visual-qa.md) · Skill `$ztx4-component-system-storybook-visual-qa`
### 18. `version-upgrade-policy`

**Output / operation:** Audit dependency/changelog conflicts and avoid blind mass upgrades.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/version-upgrade-policy.md) · Skill `$ztx4-component-system-version-upgrade-policy`
### 19. `package-tree-shaking`

**Output / operation:** Keep component imports narrow and document expected bundle impact.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/package-tree-shaking.md) · Skill `$ztx4-component-system-package-tree-shaking`
### 20. `component-api-docs`

**Output / operation:** Document usage examples, limitations and decision records with each component.

**Implementation:** Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

**Proof:** Tests: Storybook story matrix, axe/manual keyboard, narrow container, RTL, focus return, route remount, no duplicate event owners.

[Dedicated recipe](./component-system/recipes/component-api-docs.md) · Skill `$ztx4-component-system-component-api-docs`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [storybook](https://storybook.js.org/docs)
- [radix](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [ark](https://ark-ui.com/docs/overview/introduction)
- [shadcn](https://ui.shadcn.com/docs)
- [headless](https://headlessui.com/)
