import { test, expect } from '@playwright/test';
import SearchPage from '../pages/SearchPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test('Search Product Test', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await page.goto('/');
    await searchPage.searchProduct('Fiction');

    await searchPage.openProduct();
    await expect(page).toHaveURL(/.*\/fiction/);

    const productPage = new ProductPage(page);
    await productPage.setFictionQuantity(10);
    await productPage.addFictionToCart(10);
    
    const cartPage = new CartPage(page);
    await cartPage.goto();
    const fictionCartQuantity = await cartPage.getFictionCartQuantity();
    expect(fictionCartQuantity).toBe('10');
    await cartPage.agreeToTerms();
    await cartPage.proceedToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkoutAsGuest();
    await checkoutPage.fillBillingDetails({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        company: 'Example Inc.',
        country: 'United States',
        state: 'New York',
        city: 'New York',
        address1: '123 Main St',
        address2: '',
        zip: '10001',
        phone: '555-1234'
    });
    await checkoutPage.continueCheckout();

    await checkoutPage.continueShippingAddress();

    await checkoutPage.selectShippingMethod('Next Day Air');
    await checkoutPage.continueShippingMethod();

    await checkoutPage.selectPaymentMethod('Cash on Delivery');
    await checkoutPage.continuePaymentMethod();

    await checkoutPage.continuePaymentInfo();

    await checkoutPage.confirmOrder();

    await expect(checkoutPage.orderSuccessMessage).toBeVisible();
    await expect(checkoutPage.orderNumber).toContainText('Order Number:');

    await checkoutPage.openOrderDetails();
});