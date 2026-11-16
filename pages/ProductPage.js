import { expect } from '@playwright/test';

class ProductPage {
    constructor(page) {
        this.page = page;
        this.computersCategoryLink = page.getByRole('link', { name: 'Computers', exact: true }).first();
        this.desktopsSubcategoryLink = page.getByRole('heading', { name: 'Desktops' }).getByRole('link',{name: 'Desktops', exact: true});
        this.productLink = page.getByRole('link', { name: 'Build your own computer', exact: true });
        this.processorDropdown = page.locator('#product_attribute_16_5_4');
        this.ramDropdown = page.locator('#product_attribute_16_6_5');
        this.hddOptions = page.locator('input[id^="product_attribute_16_3_6_"]');
        this.osOptions = page.locator('input[id^="product_attribute_16_4_7_"]');
        this.softwareOptions = page.locator('input[id^="product_attribute_16_8_8_"]');
        this.quantityInput = page.locator('#addtocart_16_EnteredQuantity');
        this.addToCartButton = page.locator('#add-to-cart-button-16');
        this.cartQuantity = page.locator('.cart-qty');
        this.fictionQuantityInput = page.locator('#addtocart_45_EnteredQuantity');
        this.fictionAddToCartButton = page.locator('#add-to-cart-button-45');
    }

    async goto() {
        await this.page.goto('/');
    }

    async openComputersCategory() {
        await this.computersCategoryLink.click();
    }

    async openDesktopsSubcategory() {
        await this.desktopsSubcategoryLink.click();
    }

    async openProductPage() {
        await this.productLink.click();
    }

    async selectProcessor(value) {
        await this.processorDropdown.selectOption({ value: String(value) });
    }

    async selectRAM(value) {
        await this.ramDropdown.selectOption({ value: String(value) });
    }

    async selectHDD(optionName) {
        const option = this.page.getByRole('radio', { name: optionName });
        await option.check();
        await expect(option).toBeChecked();
    }

    async selectOS(optionName) {
        const option = this.page.getByRole('radio', { name: optionName });
        await option.check();
        await expect(option).toBeChecked();
    }

    async selectSoftware(optionName) {
        const option = this.page.getByRole('checkbox', { name: optionName });
        await option.check();
        await expect(option).toBeChecked();
    }

    async setQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    async addToCart(expectedQuantity) {
        await this.addToCartButton.click();
        await expect(this.cartQuantity).toContainText(`(${expectedQuantity})`);
    }

    async setFictionQuantity(quantity) {
        await this.fictionQuantityInput.fill(String(quantity));
    }

    async addFictionToCart(expectedQuantity) {
        await this.fictionAddToCartButton.click();
        await expect(this.cartQuantity).toContainText(`(${expectedQuantity})`);
    }

}

export default ProductPage;