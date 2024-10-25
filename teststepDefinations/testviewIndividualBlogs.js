const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isOnHomeTab = false;
let isBlogPostClicked = false;

Given('the user is on the home tab with a list of diet blogs', function () {
    // Simulate the user being on the home tab
    isOnHomeTab = true;
    console.log('User is on Home Tab');
    assert.strictEqual(isOnHomeTab, true); // Ensure user is on the home tab
});

When('the user clicks on a specific diet blog post', function () {
    // Simulate clicking on a blog post
    if (isOnHomeTab) {
        isBlogPostClicked = true; // Set flag to indicate a blog post has been clicked
        console.log('User clicks on a blog post');
    } else {
        throw new Error('User is not on the home tab to click a blog post');
    }
});

Then('the user should be redirected to a page displaying the full content of the selected blog post', function () {
    // Simulate redirection to the blog post content
    if (isBlogPostClicked) {
        console.log('User is redirected to Individual blog post');
    } else {
        throw new Error('User did not click a blog post to be redirected');
    }
});

Then('the user should be able to navigate back to the home tab to view more diet blogs', function () {
    // Simulate navigating back to the home tab
    if (isBlogPostClicked) {
        isOnHomeTab = true; // Reset the state to indicate the user is back on the home tab
        console.log('User navigates back to see all blog posts on Home Tab');
    } else {
        throw new Error('User cannot navigate back to the home tab without clicking a blog post');
    }
});
