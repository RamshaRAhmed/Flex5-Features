const {Given,When,Then}= require('@cucumber/cucumber')      


  Given('the user is on the home tab with a list of diet blogs', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('User is on Home Tab');
  });

  When('the user clicks on a specific diet blog post', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('User clicks on any blog post');
  });

  Then('the user should be redirected to a page displaying the full content of the selected blog post', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('User is redirected to Individual blog post');
  });

  Then('the user should be able to navigate back to the home tab to view more diet blogs', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('User navigates back to see all blog posts on Home Tab');
  });
