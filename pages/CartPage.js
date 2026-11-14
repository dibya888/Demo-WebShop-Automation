class CartPage {
    constructor(page) {
        this.page = page;
        this.shoppingCartLink = page.locator('a[href="/cart"]');
        this.productRow = page.locator('td.product')
            .filter({ hasText: 'Build your own computer' });
        this.productName = this.productRow.locator('a.product-name');
        this.productAttributes = this.productRow.locator('div.attributes');
        this.cartQuantityInput = this.productRow.locator('input.qty-input');
    }
}

export default CartPage;