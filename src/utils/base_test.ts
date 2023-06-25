
import { test as baseTest, webkit } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

const test = baseTest.extend<{ mainPage: MainPage }>({
    mainPage: async ({ page, context }, use) => {
        await use(new MainPage(page, context));
    }
});

baseTest.beforeAll(async () => {
    console.log("Before All step");
});

baseTest.beforeEach(async () => {
    console.log("Before Each step");
});

baseTest.afterEach(async () => {
    console.log("After Each step");
});

baseTest.afterAll(async () => {
    console.log('After All step');
});

export default test;
