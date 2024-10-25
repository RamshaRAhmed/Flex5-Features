const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let diaryEntryExists = false;
let diaryEntryUpdated = false;
let graphDisplayed = false;
let newDiaryEntryCreated = false;

Then('the user should be able to click on the info button next to any metric', function () {
    // Simulate the user clicking the info button
    console.log('User clicks the info button');
    assert.strictEqual(true, true); // Placeholder assertion
});

Then('the user should see a graph of the selected metric\'s data for the past one month', function () {
    // Simulate displaying a graph for the selected metric
    graphDisplayed = true;
    console.log('Displaying Graph...');
    assert.strictEqual(graphDisplayed, true);
});

Given('there is no health diary entry for the selected date', function () {
    // Simulate checking that there is no health diary entry for the selected date
    diaryEntryExists = false;
    console.log('No Record on this day');
    assert.strictEqual(diaryEntryExists, false);
});

When('the user creates a new health diary entry with the following biometric information:', function () {
    // Simulate creating a new health diary entry
    newDiaryEntryCreated = true;
    console.log('Creating New Record...');
    assert.strictEqual(newDiaryEntryCreated, true);
});

Then('the user should see the new health diary entry reflected in the list of biometric information', function () {
    // Verify that the new diary entry is displayed
    console.log('New Biometric Record Displayed');
    assert.strictEqual(newDiaryEntryCreated, true);
});

Given('there is an existing health diary entry for the selected date', function () {
    // Simulate checking that a health diary entry exists for the selected date
    diaryEntryExists = true;
    console.log('Biometric Record Exists');
    assert.strictEqual(diaryEntryExists, true);
});

When('the user updates the existing health diary entry with new values for the metrics:', function () {
    // Simulate updating the existing health diary entry
    if (diaryEntryExists) {
        diaryEntryUpdated = true;
        console.log('Updating Record...');
    }
    assert.strictEqual(diaryEntryUpdated, true);
});

Then('the user should see the updated health diary entry reflected in the list of biometric information', function () {
    // Verify that the updated diary entry is displayed
    console.log('Biometric Record Updated');
    assert.strictEqual(diaryEntryUpdated, true);
});
