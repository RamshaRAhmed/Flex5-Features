const {Given,When,Then}= require('@cucumber/cucumber')      

Given('the user navigates to the Metrics tab', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User navigates to the Metrics tab")
         });


         When('the user selects a date to view their biometric information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('User selects a date'); 
         });


         Then('the user should see their daily biometric information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('User views metric information');          });


           Then('the user should be able to click on the Info for You button next to any metric', function () {
            // Write code here that turns the phrase above into concrete actions
            return console.log('Info for you button is clicked.'); 
          });
  
         Then('the user should see a graph of the selected metric data for the past one month', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('Displaying Graph...');          });

      