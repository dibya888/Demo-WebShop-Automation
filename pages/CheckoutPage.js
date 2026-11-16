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
        this.shippingAddressSection = page.locator('#opc-shipping');
        this.shippingAddressDropdown = page.locator('#shipping-address-select');
        this.shippingAddressContinueButton = this.shippingAddressSection.locator('.new-address-next-step-button');
        this.shippingMethodSection = page.locator('#opc-shipping_method');
        this.groundShipping = page.locator('#shippingoption_0');
        this.nextDayAirShipping = page.locator('#shippingoption_1');
        this.secondDayAirShipping = page.locator('#shippingoption_2');
        this.shippingMethodContinueButton = this.shippingMethodSection.locator('.shipping-method-next-step-button');
        this.paymentMethodSection = page.locator('#opc-payment_method');
        this.cashOnDeliveryOption = page.locator('#paymentmethod_0');
        this.checkMoneyOrderOption = page.locator('#paymentmethod_1');
        this.creditCardOption = page.locator('#paymentmethod_2');
        this.purchaseOrderOption = page.locator('#paymentmethod_3');
        this.paymentMethodContinueButton = this.paymentMethodSection.locator('.payment-method-next-step-button');
        this.paymentInfoSection = page.locator('#opc-payment_info');
        this.paymentInfoContinueButton = this.paymentInfoSection.locator('.payment-info-next-step-button');
        this.confirmOrderSection = page.locator('#opc-confirm_order');
        this.confirmOrderButton = this.confirmOrderSection.locator('.confirm-order-next-step-button');
        this.orderSuccessMessage = page.getByText('Your order has been successfully processed!');
        this.orderNumber = page.locator('ul.details li').first();
        this.orderDetailsLink = page.getByRole('link', { name: 'Click here for order details.' });
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
        if (stateName) {
            await this.stateDropdown.selectOption({ label: stateName });
        }
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

    async selectShippingAddress(address) {
        await this.shippingAddressDropdown.selectOption({ label: address });
    }

    async continueShippingAddress() {
        await this.shippingAddressContinueButton.click();
    }

    async selectShippingMethod(method) {
        if (method === 'Ground') {
            await this.groundShipping.check();
        } else if (method === 'Next Day Air') {
            await this.nextDayAirShipping.check();
        } else if (method === '2nd Day Air') {
            await this.secondDayAirShipping.check();
        } else {
            throw new Error(`Invalid shipping method: ${method}`);
        }
    }

    async continueShippingMethod() {
        await this.shippingMethodContinueButton.click();
    }

    async selectPaymentMethod(method) {
        if (method === 'Cash on Delivery') {
            await this.cashOnDeliveryOption.check();
        } else if (method === 'Check / Money Order') {
            await this.checkMoneyOrderOption.check();
        } else if (method === 'Credit Card') {
            await this.creditCardOption.check();
        } else if (method === 'Purchase Order') {
            await this.purchaseOrderOption.check();
        } else {
            throw new Error(`Invalid payment method: ${method}`);
        }
    }

    async continuePaymentMethod() {
        await this.paymentMethodContinueButton.click();
    }

    async continuePaymentInfo() {
        await this.paymentInfoContinueButton.click();
    }

    async confirmOrder() {
        await this.confirmOrderButton.click();
    }

    async getOrderNumber() {
        return await this.orderNumber.textContent();
    }

    async openOrderDetails() {
        await this.orderDetailsLink.click();
    }
}

export default CheckoutPage;