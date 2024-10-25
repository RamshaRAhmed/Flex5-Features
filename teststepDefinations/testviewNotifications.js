const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isOnNotificationTab = false;
let notifications = [];

When('the user clicks on the notification icon to go to the Notification tab', function () {
    // Simulate clicking on the notification icon
    isOnNotificationTab = true; // User is redirected to the notification tab
    console.log("User clicks the notification icon");
});

Then('the user should be redirected to the notification tab', function () {
    // Verify if the user is redirected
    assert.strictEqual(isOnNotificationTab, true);
    console.log("Redirected to Notification Tab.");
});

Then('the user should see a list of their notifications', function () {
    // Check if there are notifications to display
    if (notifications.length > 0) {
        console.log("User sees all their notifications");
    } else {
        console.log("No notifications to display");
    }
});

Then('if there are no notifications', function () {
    // Check if there are no notifications
    if (notifications.length === 0) {
        console.log("No new notifications found.");
    }
});

Then('the user should see a message indicating that there are no notifications available', function () {
    // Check if there are no notifications and display a message
    if (notifications.length === 0) {
        console.log("Nothing to display");
    }
});

// Example to simulate adding notifications (for demonstration purposes)
Given('the user has notifications', function () {
    // Simulating existing notifications
    notifications = ['Notification 1', 'Notification 2'];
    console.log("User has notifications");
});

Given('the user has no notifications', function () {
    // Clear notifications for this scenario
    notifications = [];
    console.log("User has no notifications");
});
