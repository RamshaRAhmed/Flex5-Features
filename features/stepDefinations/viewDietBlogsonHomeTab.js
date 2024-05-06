const {Given,When,Then}= require('@cucumber/cucumber')      
        

Given('the user is logged into the application', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('User logged in');
});

When('the user navigates to the home tab', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Navigated to home tab');
});


Then('the user should see a section titled', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('loading title...');
});

Then('the user should see a list of diet-related blog posts', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Diet Blogs are visible');


});

Then('each blog post should display its title and a banner image', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Banner images are visible');

});


Then('the user should be able to click on a blog post to read its full content', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('blog post is clickable');
  ;
});

Given('there are no diet-related blog posts available', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('No Blogs Available');
});

Then('the user should see a message indicating that there are currently no diet blogs available', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Nothing to display');

});
