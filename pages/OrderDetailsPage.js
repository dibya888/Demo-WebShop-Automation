class OrderDetailsPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('h1');
        this.orderNumber = page.locator('.order-number');
        this.orderStatus = page.locator('.order-details');
        this.productName = page.locator('.products .data-table td.name a');
        this.productQuantity = page.locator('.products .data-table td.quantity');
        this.productTotal = page.locator('.products .data-table td.total');
        this.orderTotal = page.locator('.order-overview .order-total');
    }
}

export default OrderDetailsPage;