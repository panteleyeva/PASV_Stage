

describe('Main Page', () => {
    it('should verify that Title "Progress Monitor" is present', function () {
        browser.url('https://stage.pasv.us/');
        const mainTitle = $('//span[@id="site-name"]');
        const textTitle = mainTitle.getText();
        expect(textTitle).toEqual('Progress Monitor');
    });

    it('should verify that Progress Monitor button ia active', function () {
        const mainTitle = '//span[@id="site-name"]';
        const result = $(mainTitle).isClickable();
        expect(result).toEqual(true);
    });
    it('should verify that login button is present and title is "Login" ', function () {
        const loginButton = '//a[@qa="login-link"]';
        const loginButtonText = $(loginButton).getText();
        expect(loginButtonText).toEqual('Login');
    });
    it('should verify that login button is active', function () {
        const loginButton = '//a[@qa="login-link"]';
        const result = $(loginButton).isClickable();
        expect(result).toEqual(true);
    });


})