class LoginPage{
    constructor(page){
        this.page = page;
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.rememberMeCheckbox = page.locator('#RememberMe');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.errorMessage = page.locator('.validation-summary-errors');
    }

    async goto(){
        await this.page.goto('/login');
    }

    async login(email, password, rememberMe = false){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        if (rememberMe) {
            await this.rememberMeCheckbox.check();
        }
        else {
            await this.rememberMeCheckbox.uncheck();
        }
        await this.loginButton.click();
    }
}

export default LoginPage;