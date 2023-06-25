import type { Page, BrowserContext, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class MainPage {

    readonly page: Page;
    readonly context: BrowserContext;
    readonly HAMBURGER_BUTTON: Locator;
    readonly SERVICES: Locator;
    readonly INDUSTRIES: Locator;
    readonly CAREERS: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        // webActions = new WebActions(this.page, this.context);
        this.HAMBURGER_BUTTON = page.locator('.hamburger-menu__button');
        this.SERVICES = page.getByRole('link', { name: 'Services' }).first();
        this.INDUSTRIES = page.getByText('Industries').nth(1);
        this.CAREERS = page.getByRole('link', { name: 'Careers' });
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
        await expect(this.page).toHaveURL(/.*epam.com/);
    }

    public async acceptCookies() {
        await this.page.getByRole('button', { name: 'Accept All' }).click();
    }

    async clickHamburgerButton() {
        await this.HAMBURGER_BUTTON.click();
    }

    async goToIndastriesWithinSidePanel() {
        await this.clickHamburgerButton();
        await this.page.getByText('Industries Consumer Consumer Packaged Goods Travel & Hospitality Retail Financia').first().click();
    }

    async goToCareers() {
        await this.navigateToURL();
        await this.CAREERS.click();
    }
}