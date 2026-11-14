import {test, expect} from '@playwright/test';
import ProductPage from '../pages/ProductPage.js';
import RegisterPage from '../pages/RegisterPage.js';
import CartPage from '../pages/CartPage.js';

test.describe('Register and Cart Tests', () => {
    test('Register and Verify Cart Test', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const email = `c.ronaldo+${Date.now()}@example.com`;
        await registerPage.goto();
        await registerPage.register('Male', 'Cristiano', 'Ronaldo', email, 'Password123!');
        await expect(registerPage.successMessage).toBeVisible();
        await expect(registerPage.successMessage).toContainText('Your registration completed');
        await registerPage.continueToHome();
        await productPage.openComputersCategory();
        await productPage.openDesktopsSubcategory();
        await productPage.openProductPage();
        await productPage.selectProcessor('14');
        await productPage.selectRAM('15');
        await productPage.selectHDD('400 GB [+100.00]');
        await productPage.selectOS('Windows 10 [+60.00]');
        await productPage.selectSoftware('Microsoft Office [+50.00]');
        await productPage.setQuantity('5');
        await productPage.addToCart('5');
        await cartPage.goto();
        await expect(cartPage.productName).toHaveText('Build your own computer');
        await expect(cartPage.productAttributes).toContainText('Processor: 2.5 GHz Intel Pentium Dual-Core E2200 [+15.00]');
        await expect(cartPage.productAttributes).toContainText('RAM: 2 GB');
        await expect(cartPage.productAttributes).toContainText('HDD: 400 GB [+100.00]');
        await expect(cartPage.productAttributes).toContainText('OS: Windows 10 [+60.00]');
        await expect(cartPage.productAttributes).toContainText('Software: Microsoft Office [+50.00]');
        await expect(cartPage.cartQuantityInput).toHaveValue('5');
    });
});
