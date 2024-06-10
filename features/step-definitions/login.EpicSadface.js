import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^user is on login page$/, async () => {
    await browser.url('https://www.saucedemo.com/');
});

When(/^user clicks on login button$/, async () => {;
await $('#login-button').click()
});

Then(/^“Epic sadface: Username is required” error message is visible$/, async () => {;
    await expect($('#login_button_container')).toHaveText('Epic sadface: Username is required')
});
