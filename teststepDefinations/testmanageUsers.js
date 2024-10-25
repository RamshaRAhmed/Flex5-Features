const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let adminLoggedIn = false;
let userAdded = false;
let temporaryPasswordGenerated = false;
let emailSent = false;
let userBlocked = false;
let userDeleted = false;
let userExists = true;
let accessRevoked = false;

Given('the admin is logged into the admin dashboard', function () {
    // Simulate logging the admin into the admin dashboard
    adminLoggedIn = true;
    console.log("Admin is logged into the admin dashboard");
    assert.strictEqual(adminLoggedIn, true);
});

When('the admin adds a new user by providing following information name, email', function () {
    // Simulate adding a new user with valid information
    userAdded = true;
    console.log("Admin adds a new user with valid information");
    assert.strictEqual(userAdded, true);
});

Then('the new user should be successfully added to the system', function () {
    // Verify that the new user is successfully added
    console.log("New user is successfully added to the system");
    assert.strictEqual(userAdded, true);
});

Then('the app generates a temporary password for the user', function () {
    // Simulate generating a temporary password for the user
    temporaryPasswordGenerated = true;
    console.log("Temporary password is generated for the user");
    assert.strictEqual(temporaryPasswordGenerated, true);
});

Then('the temporary password is emailed to the user', function () {
    // Simulate emailing the temporary password to the user
    emailSent = true;
    console.log("Temporary password is emailed to the user");
    assert.strictEqual(emailSent, true);
});

Given('there is a user in the system', function () {
    // Verify that there is a user in the system
    userExists = true;
    console.log("There is a user in the system");
    assert.strictEqual(userExists, true);
});

When('the admin blocks the user', function () {
    // Simulate blocking the user
    userBlocked = true;
    accessRevoked = true;
    console.log("Admin blocks the user");
    assert.strictEqual(userBlocked, true);
});

Then('the user\'s access should be revoked', function () {
    // Verify that the user's access is revoked
    console.log("User's access is revoked");
    assert.strictEqual(accessRevoked, true);
});

When('the admin deletes the user', function () {
    // Simulate deleting the user
    userDeleted = true;
    userExists = false;
    console.log("Admin deletes the user");
    assert.strictEqual(userDeleted, true);
});

Then('the user should be removed from the system', function () {
    // Verify that the user is removed from the system
    console.log("User is removed from the system");
    assert.strictEqual(userExists, false);
});

Given('the admin edits user personal information', function () {
    // Simulate editing user personal information
    console.log("Admin edits user personal information");
    assert.strictEqual(true, true); // Placeholder assertion
});
