import test from '../utils/baseTest';
import { expect } from '@playwright/test'
import ReportUtils from '../utils/screenshotUtils';


test('@smoke Simple test #1', async ({ mainPage, page }, testInfo) => {

  // eslint-disable-next-line playwright/expect-expect
  await test.step(`Navigate to Application`, async () => {
    await mainPage.navigateToURL();
    await mainPage.acceptCookies();
  });
  await mainPage.goToIndastriesWithinSidePanel();

  await mainPage.goToCareers();

  // // Capture a screenshot and attach it (for Report Portal)
  ReportUtils.screenshot(page, testInfo, test.name);

  await expect(page).toHaveURL("https://www.epam.com/careers");
});
