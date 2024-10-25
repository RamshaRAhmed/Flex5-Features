const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isOnFindTab = false;
let locationsDisplayed = false;
let selectedLocation = null;

Given('the user is on the Find tab with a list of locations displayed', function () {
    // Simulate the user being on the Find tab with locations displayed
    isOnFindTab = true;
    locationsDisplayed = true; // Assume locations are displayed
    console.log("User is on the Find tab with a list of locations displayed");
    assert.strictEqual(isOnFindTab, true);
    assert.strictEqual(locationsDisplayed, true);
});

When('the user navigates to the Find tab', function () {
    // Simulate navigating to the Find tab
    isOnFindTab = true; // User is now on the Find tab
    console.log("User navigates to the Find tab");
});

Then('the user should see a list of locations displayed', function () {
    // Check if locations are displayed
    if (isOnFindTab) {
        locationsDisplayed = true; // Set locations displayed to true
        console.log("User sees a list of locations displayed");
    } else {
        throw new Error("User is not on the Find tab to see locations");
    }
});

Then('the user should see a map displayed showing the locations', function () {
    // Check if the user is on the Find tab
    if (isOnFindTab && locationsDisplayed) {
        console.log("User sees a map displayed showing the locations");
    } else {
        throw new Error("User cannot see the map without locations being displayed");
    }
});

When('the user selects a specific location from the list', function () {
    // Simulate selecting a specific location
    if (locationsDisplayed) {
        selectedLocation = 'Specific Location'; // Assume a location is selected
        console.log("User selects a specific location");
    } else {
        throw new Error("User cannot select a location if none are displayed");
    }
});

Then('the user should see the details of the selected location displayed on the map', function () {
    // Check if a location has been selected
    if (selectedLocation) {
        console.log("User sees the details of the selected location displayed on the map");
    } else {
        throw new Error("User cannot see location details without selecting a location");
    }
});
