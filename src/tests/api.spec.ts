import { test, expect } from '@playwright/test';

test.use({
    baseURL: "https://reqres.in/",
});

test.describe.parallel('API test', () => {
    test('GET', async ({ request }) => {
        const response = await request.get(`/api/users/2`);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.data).toHaveProperty("email", "janet.weaver@reqres.in");

        console.info(responseBody.data);
    });
});