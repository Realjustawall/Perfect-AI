# Storybook + Vitest integration (React + Vite)

Inside an **existing authorized Vite/React project**, install and configure `npx storybook add @storybook/addon-vitest` and `npx storybook add @storybook/addon-a11y` (create Storybook first if needed with the current Storybook setup wizard). Copy source component and stories below to the project's src folder, then run `npx vitest run --project=storybook` only after confirming the addon registered that project name. Ensure `parameters.a11y.test = 'error'` is enforced for stable states. For alternate frameworks, adapt stories and framework typing rather than blindly copying files.

Acceptance: Idle, Loading, Disabled, PersianRTL, LongLabel and interaction stories render; keyboard and click cause accessible outcome; screenshot state matrix includes mobile widths; Vitest actually runs in browser and saves a test report. Treat missing browser binaries as not-run.
