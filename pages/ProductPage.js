class ProductPage {
    constructor(page) {
        this.page = page;
        this.computersCategoryLink = page.locator('a[href="/computers"]');
        this.desktopsSubcategoryLink = page.locator('a[href="/desktops"]');
        this.productLink = page.locator('a[href="/build-your-own-computer"]');
        this.processorDropdown = page.locator('#product_attribute_16_5_4');
        this.ramDropdown = page.locator('#product_attribute_16_6_5');
        this.hddOptions = page.locator('input[id^="product_attribute_16_3_6_"]');
        this.osOptions = page.locator('input[id^="product_attribute_16_4_7_"]');
        this.softwareOptions = page.locator('input[id^="product_attribute_16_8_8_"]');
        this.quantityInput = page.locator('#addtocart_16_EnteredQuantity');
        this.addToCartButton = page.locator('#add-to-cart-button-16');
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

    async selectHDD(optionId) {
        await this.page.locator(`#${optionId}`).check();
    }

    async selectOS(optionId) {
        await this.page.locator(`#${optionId}`).check();
    }

    async selectSoftware(optionId) {
        await this.page.locator(`#${optionId}`).check();
    }

    async setQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

}

export default ProductPage;