# QA matrix and acceptance evidence

Machine-gated minimum: 320, 360, 390, 430, 768, 1024, 1440 and 1920px; reduced motion yes/no; scroll phases 0%, 33%, 68%, 100%; screenshots + console errors + horizontal overflow. These checks alone cannot prove full keyboard, function behavior or GPU smoothness. Add scenario-specific Playwright flows for modal/cart/form/filters and independent screen-reader/manual tests.

Track baseline screenshot difference with fixed content/viewport/font and freeze 3D timeline at an exposed test-seek hook; automate line-by-line screenshot comparison only when deterministic. Color variants need real UI renders. Every reported issue must have observed evidence.
