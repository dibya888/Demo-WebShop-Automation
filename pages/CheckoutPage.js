class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkoutHeader = page.locator('h1').filter({ hasText: 'Checkout' });
        this.checkoutAsGuestButton = page.getByRole('button', { name: 'Checkout as Guest' });
        this.firstNameInput = page.locator('#BillingNewAddress_FirstName');
        this.lastNameInput = page.locator('#BillingNewAddress_LastName');
        this.emailInput = page.locator('#BillingNewAddress_Email');
        this.companyInput = page.locator('#BillingNewAddress_Company');
        this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
        this.stateDropdown = page.locator('#BillingNewAddress_StateProvinceId');
        this.cityInput = page.locator('#BillingNewAddress_City');
        this.address1Input = page.locator('#BillingNewAddress_Address1');
        this.address2Input = page.locator('#BillingNewAddress_Address2');
        this.zipInput = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');
        this.faxInput = page.locator('#BillingNewAddress_FaxNumber');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async checkoutAsGuest() {
        await this.checkoutAsGuestButton.click();
    }

    async fillIfEmpty(locator, value) {
        const currentValue = await locator.inputValue();
        if (!currentValue && value) {
            await locator.fill(value);
        }
    }

    async selectCountry(countryName) {
        await this.countryDropdown.selectOption({ label: countryName });
    }

    async selectState(stateName) {
        await this.stateDropdown.selectOption({ label: stateName });
    }

    async fillBillingDetails(details) {
        await this.fillIfEmpty(this.firstNameInput, details.firstName);
        await this.fillIfEmpty(this.lastNameInput, details.lastName);
        await this.fillIfEmpty(this.emailInput, details.email);
        await this.fillIfEmpty(this.companyInput, details.company);
        await this.selectCountry(details.country);
        await this.selectState(details.state);
        await this.fillIfEmpty(this.cityInput, details.city);
        await this.fillIfEmpty(this.address1Input, details.address1);
        await this.fillIfEmpty(this.address2Input, details.address2);
        await this.fillIfEmpty(this.zipInput, details.zip);
        await this.fillIfEmpty(this.phoneInput, details.phone);
        await this.fillIfEmpty(this.faxInput, details.fax);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}

export default CheckoutPage;