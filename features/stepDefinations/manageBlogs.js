const { Given, When, Then } = require('@cucumber/cucumber');

When('the admin adds a new blog by providing following information title, content, banner image, visibility', function () {
    // Code to add a new blog with valid information
});

Then('the new blog should be successfully added to the system', function () {
    // Code to verify that the new blog is added successfully
});

When('the admin edits the blog', function () {
    // Code to edit the existing blog
});

Then('the changes should be reflected in the system', function () {
    // Code to verify that the changes are reflected in the system
});


Given('there is an existing blog in the system', function () {
    // Code to check if there is an existing blog in the system
});

When('the admin deletes the blog', function () {
    // Code to delete the existing blog
});

Then('the blog should be removed from the system', function () {
    // Code to verify that the blog is removed from the system
});
