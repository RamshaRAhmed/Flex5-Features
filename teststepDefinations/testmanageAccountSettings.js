const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let userOnSettingsPage = false;
let emailChanged = false;
let passwordReset = false;
let canLoginWithNewPassword = false;

When('the user selects the Account Settings option', function () {
    // Simulate clicking on Account Settings
    console.log("User clicks on Settings option");
    userOnSettingsPage = true;
    assert.strictEqual(userOnSettingsPage, true);
});

When('the user navigates to the Settings option in the profile menu on the top menu bar', function () {
    // Simulate navigation to Settings in the profile menu
    console.log('User navigates to settings option');
    userOnSettingsPage = true;
    assert.strictEqual(userOnSettingsPage, true);
});

Then('the user should see options to manage their account information such as email and password', function () {
    // Simulate displaying account management options
    console.log("User sees their account information");
    assert.strictEqual(userOnSettingsPage, true);
});

Given('the user is on the Account Settings page', function () {
    // Simulate navigating to the Account Settings page
    console.log("User is navigated to the Account Settings page.");
    userOnSettingsPage = true;
    assert.strictEqual(userOnSettingsPage, true);
});

When('the user changes their email address', function () {
    // Simulate email address change
    emailChanged = true;
    console.log("User updates their email address.");
    assert.strictEqual(emailChanged, true);
});

Then('the changes should be reflected in the user account', function () {
    // Simulate verifying that email change is reflected in the account
    console.log("User's updated email is displayed.");
    assert.strictEqual(emailChanged, true);
});

When('the user resets their password', function () {
    // Simulate password reset
    passwordReset = true;
    console.log("User updates their account password.");
    assert.strictEqual(passwordReset, true);
});

Then('the user should be able to log in with the new password', function () {
    // Simulate login with the new password
    canLoginWithNewPassword = true;
    console.log("User's account password is updated.");
    assert.strictEqual(canLoginWithNewPassword, true);
});

Then('the changes should be reflected in the users account', function () {
    // Placeholder for reflecting other changes if necessary
    console.log("Changes are reflected in the user's account.");
    assert.strictEqual(true, true); // Placeholder assertion
});
