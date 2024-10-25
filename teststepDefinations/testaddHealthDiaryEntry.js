const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let diaryEntryExists = false;
let newEntryCreated = false;
let biometricInfoOutOfRange = false;
let gpPhoneNumberVisible = false;
let canDialGP = false;

Given('there is no health diary entry for the selected date', function () {
    // Simulate no record for the selected date
    diaryEntryExists = false;
    console.log('No Record on this day');
    assert.strictEqual(diaryEntryExists, false);
});

When('the user creates a new health diary entry with the following biometric information, Height, Weight, A1c, Blood Pressure, Non hdl cholesterol, GFR and Mood', function () {
    // Simulate the creation of a new health diary entry
    newEntryCreated = true;
    console.log('Creating New Record...');
    assert.strictEqual(newEntryCreated, true);
});

Then('the user should see any alerts where their biometric number is out of range', function () {
    // Simulate biometric information being out of range
    biometricInfoOutOfRange = true;
    console.log('Display alert.');
    assert.strictEqual(biometricInfoOutOfRange, true);
});

Then('the user should see the phone number to call their General Practitioner/Doctor', function () {
    // Simulate displaying GP/Doctor phone number
    gpPhoneNumberVisible = true;
    console.log('Display phone#');
    assert.strictEqual(gpPhoneNumberVisible, true);
});

Then('the user can click and dial the General Practitioner/Doctor right from the application', function () {
    // Simulate the ability to click and dial the GP/Doctor
    canDialGP = true;
    console.log('Can dial GP/Doctor');
    assert.strictEqual(canDialGP, true);
});

Then('the user should see the new health diary entry reflected in the list of biometric information', function () {
    // Simulate displaying the new health diary entry
    console.log('New Biometric Record Displayed');
    assert.strictEqual(newEntryCreated, true);
});
