class RegisterPage {
    constructor(page) {
        this.page = page;
        this.genderMaleRadio = page.locator('#gender-male');
        this.genderFemaleRadio = page.locator('#gender-female');
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.successMessage = page.locator('.result');
        this.continueButton = page.locator('.register-continue-button');
    }

    async goto() {
        await this.page.goto('/register');
    }

    async register(gender, firstName, lastName, email, password) {
        if (gender.toLowerCase() === 'male') {
            await this.genderMaleRadio.check();
        } else if (gender.toLowerCase() === 'female') {
            await this.genderFemaleRadio.check();
        }
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();
    }

    async continueToHome() {
        await this.continueButton.click();
    }
}

export default RegisterPage;