const {Given,When,Then}= require('@cucumber/cucumber')      
        

Given('the user is logged into the application', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('User logged in');
});

When('the user navigates to the home tab', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Navigated to home tab');
});



  Then('the user should see a section titled Food for Thought', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('display food for thought section');
  });



  When('the user clicks on the Food for Thought section', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('clicks on food for thought section');
  });


  When('the user should see a list of currated topics by Dr. Tom blog posts by date', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log('user sees a list of curated topics by Dr Tom');
  });


         Then('the user should see a section titled Community Topics', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('see section titled community topics');
         });

         When('the user clicks on the Community Topics section', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('user clicks on section titled community topics');
         });



         When('the user should see a list of currated community topics blog posts by date', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('Creating New Recorduser should see a list of currated community topics blog posts by date');
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

When('the user should be able to click links in the blog post to open up in a browser', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('blog post is clickable');
});
Given('there are no diet-related blog posts available', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('No Blogs Available');
});

Then('the user should see a message indicating that there are currently no diet blogs available', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Nothing to display');

});
