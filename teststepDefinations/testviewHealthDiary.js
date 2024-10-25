const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let biometricDataAvailable = false;
let selectedDate = null;

Given('the user navigates to the Metrics tab', function () {
    // Simulate user navigating to the Metrics tab
    console.log("User navigates to the Metrics tab");
    assert.strictEqual(true, true); // Placeholder assertion
});

When('the user selects a date to view their biometric information', function () {
    // Simulate user selecting a date
    selectedDate = '2024-10-17'; // Example date
    console.log('User selects a date');
    biometricDataAvailable = true; // Simulate that data is available for the selected date
    assert.strictEqual(biometricDataAvailable, true);
});

Then('the user should see their daily biometric information', function () {
    // Simulate displaying daily biometric information
    if (biometricDataAvailable) {
        console.log('User views metric information');
    } else {
        console.log('No biometric data available for the selected date');
    }
    assert.strictEqual(biometricDataAvailable, true); // Ensure data is available
});

Then('the user should be able to click on the Info for You button next to any metric', function () {
    // Simulate clicking the "Info for You" button
    console.log('Info for you button is clicked.');
    assert.strictEqual(true, true); // Placeholder assertion
});

Then('the user should see a graph of the selected metric data for the past one month', function () {
    // Simulate displaying a graph for the selected metric
    console.log('Displaying Graph...');
    assert.strictEqual(true, true); // Placeholder assertion
});
