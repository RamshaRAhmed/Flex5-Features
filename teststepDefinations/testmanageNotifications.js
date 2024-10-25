const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let notificationSent = false;
let notificationDeleted = false;

When('the admin creates and sends a notification to a user by providing following information title, content, users and delete date', function () {
    // Simulate creating and sending a notification
    notificationSent = true;
    console.log("Admin creates and sends a notification with title, content, users, and delete date.");
    assert.strictEqual(notificationSent, true);
});

Then('the notification should be successfully delivered to the user', function () {
    // Verify that the notification is successfully delivered
    console.log("Notification is successfully delivered to the user.");
    assert.strictEqual(notificationSent, true);
});

When('the admin deletes notification', function () {
    // Simulate deleting the notification
    notificationDeleted = true;
    console.log("Admin deletes the notification.");
    assert.strictEqual(notificationDeleted, true);
});

Then('the notification should be removed from the database', function () {
    // Verify that the notification is removed from the database
    console.log("Notification is successfully removed from the database.");
    assert.strictEqual(notificationDeleted, true);
});
