
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Test execution
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,

  // Generate both reports
  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
    ['allure-playwright', {
      resultsDir: 'allure-results',
    }],
  ],

  // Shared browser settings
  use: {
    baseURL: 'https://demowebshop.tricentis.com',

    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  // Cross-browser execution
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
