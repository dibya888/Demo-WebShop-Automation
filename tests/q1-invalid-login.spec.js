import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test.describe('Login Tests', () => {
    test('Invalid Login Test', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid@example.com', 'invalidpassword');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Login was unsuccessful. Please correct the errors and try again.');
        await expect(page).toHaveURL(/login/);
    });
});