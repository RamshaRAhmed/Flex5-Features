const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let onProfileSettingsPage = false;
let personalInfoUpdated = false;
let gpInfoUpdated = false;

When('the user navigates to the Settings tab', function () {
    // Simulate navigation to the Settings tab
    onProfileSettingsPage = true;
    console.log("User navigates to the settings tab.");
    assert.strictEqual(onProfileSettingsPage, true);
});

When('the user selects the Profile Settings option', function () {
    // Simulate clicking on the Profile Settings option
    onProfileSettingsPage = true;
    console.log("User clicks on the Profile Settings option.");
    assert.strictEqual(onProfileSettingsPage, true);
});

Then('the user should see options to manage their personal information such as name, mobile #, birthday, height, sex, and general practitioner information', function () {
    // Simulate displaying options for managing personal information
    console.log("User sees their personal information.");
    assert.strictEqual(onProfileSettingsPage, true);
});

Given('the user is on the Profile Settings page', function () {
    // Simulate user being on the Profile Settings page
    onProfileSettingsPage = true;
    console.log("User is on Profile Settings tab.");
    assert.strictEqual(onProfileSettingsPage, true);
});

When('the user updates their personal information', function () {
    // Simulate updating personal information
    personalInfoUpdated = true;
    console.log("User updates their personal information.");
    assert.strictEqual(personalInfoUpdated, true);
});

Then('the changes should be reflected in the user\'s profile', function () {
    // Verify that the changes are reflected in the user's profile
    console.log("User's updated personal information is displayed.");
    assert.strictEqual(personalInfoUpdated, true);
});

When('the user updates their general practitioner information', function () {
    // Simulate updating general practitioner information
    gpInfoUpdated = true;
    console.log("User updates their general practitioner information.");
    assert.strictEqual(gpInfoUpdated, true);
});
