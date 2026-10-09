import { defineConfig, devices } from '@playwright/test';
const projects = [
 {name:'desktop-chromium-ltr',use:{...devices['Desktop Chrome'],locale:'en-US',reducedMotion:'no-preference'}},
 {name:'desktop-firefox-ltr',use:{...devices['Desktop Firefox'],locale:'en-US',reducedMotion:'no-preference'}},
 {name:'desktop-webkit-ltr',use:{...devices['Desktop Safari'],locale:'en-US',reducedMotion:'no-preference'}},
 {name:'mobile-chromium-rtl',use:{...devices['Pixel 5'],locale:'fa-IR',reducedMotion:'no-preference'}},
 {name:'mobile-webkit-rtl',use:{...devices['iPhone 12'],locale:'fa-IR',reducedMotion:'reduce'}},
 {name:'reduced-motion-desktop',use:{...devices['Desktop Chrome'],reducedMotion:'reduce'}},
];
export default defineConfig({testDir:'./tests',timeout:30000,retries:process.env.CI?1:0,reporter:[['list'],['html',{open:'never'}]],use:{baseURL:process.env.ZT_TEST_URL||'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure',video:'retain-on-failure'},projects});
