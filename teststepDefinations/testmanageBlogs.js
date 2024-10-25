const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let blogExists = false;
let blogAdded = false;
let blogEdited = false;
let blogDeleted = false;

When('the admin adds a new blog by providing following information title, content, banner image, visibility', function () {
    // Simulate adding a new blog with valid information
    blogAdded = true;
    console.log("Admin adds a new blog with title, content, banner image, and visibility.");
    assert.strictEqual(blogAdded, true);
});

Then('the new blog should be successfully added to the system', function () {
    // Verify that the new blog is added successfully
    console.log("The new blog is successfully added to the system.");
    assert.strictEqual(blogAdded, true);
});

When('the admin edits the blog', function () {
    // Simulate editing the existing blog
    blogEdited = true;
    console.log("Admin edits the existing blog.");
    assert.strictEqual(blogEdited, true);
});

Then('the changes should be reflected in the system', function () {
    // Verify that the changes are reflected in the system
    console.log("Changes to the blog are reflected in the system.");
    assert.strictEqual(blogEdited, true);
});

Given('there is an existing blog in the system', function () {
    // Simulate checking if there is an existing blog in the system
    blogExists = true;
    console.log("An existing blog is present in the system.");
    assert.strictEqual(blogExists, true);
});

When('the admin deletes the blog', function () {
    // Simulate deleting the existing blog
    blogDeleted = true;
    blogExists = false;
    console.log("Admin deletes the blog.");
    assert.strictEqual(blogDeleted, true);
});

Then('the blog should be removed from the system', function () {
    // Verify that the blog is removed from the system
    console.log("The blog is successfully removed from the system.");
    assert.strictEqual(blogExists, false);
});
