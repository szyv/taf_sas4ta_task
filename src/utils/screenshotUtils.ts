import { Page, TestInfo } from "@playwright/test";

export default class ReportUtils {

    public static async screenshot( page: Page, testInfo: TestInfo, description?: string,) {
        const screenshot = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        await testInfo.attach(description, { body: screenshot, contentType: 'image/png' });
    }

}