class CartPage {
    constructor(page) {
        this.page = page;
        this.shoppingCartLink = page.locator('a.ico-cart').first();
        this.productRow = page.getByRole('row')
            .filter({ hasText: 'Build your own computer' });
        this.productName = this.productRow.locator('a.product-name');
        this.productAttributes = this.productRow.locator('div.attributes');
        this.cartQuantityInput = this.productRow.locator('input.qty-input');
        this.fictionProductRow = page.getByRole('row')
            .filter({ hasText: 'Fiction' });
        this.fictionProductName = this.fictionProductRow.locator('a.product-name');
        this.fictionProductAttributes = this.fictionProductRow.locator('div.attributes');
        this.fictionCartQuantityInput = this.fictionProductRow.locator('input.qty-input');
        this.termsOfServiceCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');
    }

    async goto() {
        await this.shoppingCartLink.click();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getProductAttributes() {
        return await this.productAttributes.textContent();
    }

    async getCartQuantity() {
        return await this.cartQuantityInput.inputValue();
    }

    async getFictionCartQuantity() {
        return await this.fictionCartQuantityInput.inputValue();
    }

    async agreeToTerms() {
        await this.termsOfServiceCheckbox.check();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

}

export default CartPage;