

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.url("https://sso.teachable.com/secure/9521/identity/login/password");
    })

    afterEach(async () => {
        await browser.reloadSession();
    })

    it('Page Wdio test', async function () {    
        const pageTitle = await browser.getTitle();
        await expect(pageTitle).toEqual('Rahul Shetty Academy');
        //css, selector Lection 3, lesson 1
        await $('input[type="email"]').click();
        await $('input[type="email"]').addValue('a_niko415@mail.ru');
        await $('input[type="password"]').click();
        await $('input[type="password"]').addValue('Pavlusha_19');
    
        await $('input[type="submit"]').click();
        await $('ul.navigation').waitForEnabled()
        const secondPageTitle = await browser.getUrl();
        await expect(secondPageTitle).toEqual('https://courses.rahulshettyacademy.com/');
    });


    it('Error Message Contain Text', async () => {
    const pageTitle = await browser.getTitle();
    await expect(pageTitle).toEqual('Rahul Shetty Academy');

    await $('input[type="email"]').click();
    await $('input[type="email"]').addValue('a_niko416@mail.ru');
    await $('input[type="password"]').click();
    await $('input[type="password"]').addValue('Pavlusha_18');

    await $('input[type="submit"]').click();
    const errorMessage = await $('.text-with-icon').getText();
    await expect(errorMessage).toEqual('Your email or password is incorrect.');
    
});

it('Multiple Elements on the page', async () => {
    const signIn = await $('input[type="submit"]');
    const emailField = await $('input[type="email"]');
    const passwordField = await $('input[type="password"]');
    const homeNavBarName = await $('ul.navigation li:nth-child(1) .fedora-navbar-link');
    const pageTitle = await browser.getTitle();
    await expect(pageTitle).toEqual('Rahul Shetty Academy');
//clear the incorrect credenials and enter the valid one
    await emailField.click();
    await emailField.clearValue();
    await emailField.addValue('a_niko415@mail.ru');
    await passwordField.click();
    await passwordField.addValue('Pavlusha_19');

    await signIn.click();
    await $('ul.navigation').waitForEnabled()
    const secondPageTitle = await browser.getUrl();
    await expect(secondPageTitle).toEqual('https://courses.rahulshettyacademy.com/');
    //multiple elements on the page
    const homeText = await homeNavBarName.getText();

    await expect(homeText).toEqual('Home');

});

});
