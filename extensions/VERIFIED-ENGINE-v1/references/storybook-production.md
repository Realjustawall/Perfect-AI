# Storybook + Vitest

## Implementation and version check
Choose the installed framework first. Modern Vitest addon works for **Vite-backed** Storybook projects and browser mode. Verify installed Storybook/Vitest combo; do not pretend Next/Webpack has the same integration. Start `npx storybook add @storybook/addon-vitest`, then `npx storybook add @storybook/addon-a11y` in an authorized project. For current Storybook, interaction play functions should import expect from `storybook/test`; consult installed package types.

## Story matrix / acceptance
Render states Idle, Hover, Focus, Disabled, Loading, Empty, Error and Success. Include Persian long copy, English short copy, responsive 320/390/768/1440 and color modes. Interactive stories need role-based queries, stable test ids only when unavoidable. `parameters.a11y.test = 'error'` can gate automated failures, but does not replace screen reader and keyboard audits. Visual stories must freeze camera/animation or assert at deterministic progress.

## Coverage & evidence
Report number of written stories, scenarios exercised, running browser, test failures, screenshots and whether tests actually ran. Use `npx vitest run --project=storybook` only when this project is configured with that project name. Do not claim a screenshot test ran if only a DOM snapshot was generated.
