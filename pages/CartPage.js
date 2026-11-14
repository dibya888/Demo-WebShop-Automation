class CartPage {
    constructor(page) {
        this.page = page;
        this.shoppingCartLink = page.locator('a.ico-cart').first();
        this.productRow = page.getByRole('row')
            .filter({ hasText: 'Build your own computer' });
        this.productName = this.productRow.locator('a.product-name');
        this.productAttributes = this.productRow.locator('div.attributes');
        this.cartQuantityInput = this.productRow.locator('input.qty-input');
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

}

export default CartPage;