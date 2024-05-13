const { Given, When, Then } = require('@cucumber/cucumber');

Given('the admin is logged into the admin dashboard', function () {
    // Code to log the admin into the admin dashboard
    console.log("Admin is logged into the admin dashboard");
});

When('the admin adds a new user with valid information', function () {
    // Code to add a new user with valid information
    console.log("Admin adds a new user with valid information");
});

Then('the new user should be successfully added to the system', function () {
    // Code to verify that the new user is added successfully
    console.log("New user is successfully added to the system");
});


Given('there is a user in the system', function () {
    // Code to verify that there is a user in the system
    console.log("There is a user in the system");
});

When('the admin blocks the user', function () {
    // Code to block the user
    console.log("Admin blocks the user");
});

Then('the user\'s access should be revoked', function () {
    // Code to verify that the user's access is revoked
    console.log("User's access is revoked");
});


When('the admin deletes the user', function () {
    // Code to delete the user
    console.log("Admin deletes the user");
});

Then('the user should be removed from the system', function () {
    // Code to verify that the user is removed from the system
    console.log("User is removed from the system");
});
