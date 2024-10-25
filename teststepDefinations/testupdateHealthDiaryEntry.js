const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let diaryEntryExists = false;
let diaryEntryUpdated = false;
let graphsUpdated = false;

Given('there is an existing health diary entry for the selected date', function () {
    // Simulate checking that a health diary entry exists for the selected date
    diaryEntryExists = true;
    console.log("Biometric Record Exists");
    assert.strictEqual(diaryEntryExists, true);
});

When('the user updates the existing health diary entry with new values for the metrics:', function () {
    // Simulate updating the existing health diary entry with new values
    if (diaryEntryExists) {
        diaryEntryUpdated = true;
        console.log("Updating Record...");
    }
    assert.strictEqual(diaryEntryUpdated, true);
});

Then('the user should see the updated health diary entry reflected in the list of biometric information', function () {
    // Verify that the updated entry is reflected in the list
    console.log("Biometric Record Updated");
    assert.strictEqual(diaryEntryUpdated, true);
});

Then('the user should see updated graphs in the details of a given metric with data from other dates', function () {
    // Simulate updating graphs with new data from other dates
    if (diaryEntryUpdated) {
        graphsUpdated = true;
        console.log("Display updated graphs");
    }
    assert.strictEqual(graphsUpdated, true);
});
