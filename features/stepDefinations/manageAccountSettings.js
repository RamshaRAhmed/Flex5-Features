const {Given,When,Then}= require('@cucumber/cucumber')      
         When('the user selects the Account Settings option', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User clicks on Settings option");
         });

         Then('the user should see options to manage their account information such as email and password', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User sees their account information");
         });
         Given('the user is on the Account Settings page', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("user is navigated to the Account Settings page.");
          });
 
 
          When('the user changes their email address', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("user updates their email address.");
          });
 
 
          Then('the changes should be reflected in the user account', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("user's updated email is displayed.");
          });

          
         When('the user resets their password', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("user updates their account password.");
          });
 
 
          Then('the user should be able to log in with the new password', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("user's account password is updated.");
          });


          Then('the changes should be reflected in the users account', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("");
          });