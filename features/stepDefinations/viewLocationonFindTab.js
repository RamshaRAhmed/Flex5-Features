const {Given,When,Then}= require('@cucumber/cucumber') 

         When('the user navigates to the Find tab', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user navigates to the Find tab");
         });

         Then('the user should see a list of locations displayed', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user sees a list of locations displayed");
         });


         Then('the user should see a map displayed showing the locations', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user sees a map displayed showing the location");
         });

         Given('the user is on the Find tab with a list of locations displayed', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user is on the Find tab ");
         });

 
         When('the user selects a specific location from the list', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user selects a specific location");
         });


         Then('the user should see the details of the selected location displayed on the map', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user sees the details of the selected location displayed on the map");
         });
