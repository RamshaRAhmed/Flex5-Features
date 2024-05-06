const {Given,When,Then}= require('@cucumber/cucumber')      


When('the user clicks on the notification icon to go to the Notification tab', function () {
           // Write code here that turns the phrase above into concrete actions
          return console.log("User clicks the notification icon");
        });
     
 
          Then('the user should be redirected to the notification tab', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log("Redirected to Notification Tab.");
          });
         
        Then('the user should see a list of their notifications', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User sees all his notifications");
         });

   

         Then('if there are no notifications', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("No new notifications found.");
         });

  
         Then('the user should see a message indicating that there are no notifications available', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("Nothing to display");
         });
