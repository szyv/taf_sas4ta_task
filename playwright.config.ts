import { defineConfig, devices } from '@playwright/test';

const RPconfig = {
  apiKey: 'nVFm_HqJO2HPEXaP5-fMNVXIkCk',
  endpoint: 'https://demo.reportportal.io/api/v1',
  project: 'szyv_personal',
  launch: 'szyv_TEST_EXAMPLE',
  attributes: [
    {
      key: 'key',
      value: 'value',
    },
    {
      value: 'value',
    },
  ],
  description: 'Your launch description',
};

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  outputDir: 'test-results',
  use: {
    baseURL: 'https://www.epam.com/',
    trace: 'on-first-retry',
  },

  projects: [

    {
      name: 'login',
      grep: /@smoke/
    },
    {
      name: 'depend e2e',
      grep: /@e2e/,
      dependencies: ['login'],
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});


