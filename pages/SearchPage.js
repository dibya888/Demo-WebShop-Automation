class SearchPage{
    constructor(page){
        this.page = page;
        this.searchInput = page.locator('#small-searchterms');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.searchResults = page.locator('h2.product-title a[href="/fiction"]');
    }

    async searchProduct(productName){
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async openProduct(){
        await this.searchResults.click();
    }

}

export default SearchPage;