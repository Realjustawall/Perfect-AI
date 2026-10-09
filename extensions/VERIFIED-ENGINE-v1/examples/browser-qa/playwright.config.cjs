const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests', timeout: 25_000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { outputFolder:'./test-reports/html', open:'never' }]],
  outputDir: './test-reports/artifacts',
  use: {
    trace: 'retain-on-failure', screenshot: 'only-on-failure',
    video: 'retain-on-failure', actionTimeout: 8000,
  },
  projects: [
    { name:'chromium', use:{...devices['Desktop Chrome']} },
    { name:'mobile-chromium', use:{...devices['Pixel 7']} },
    { name:'firefox', use:{...devices['Desktop Firefox']} },
    { name:'webkit', use:{...devices['Desktop Safari']} },
  ],
});
