const {Given,When,Then}= require('@cucumber/cucumber')      

         When('the user navigates to the Settings tab', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User navigates to the settings tab.");
         });

         When('the user selects the Profile Settings option', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User clicks on the Profile Settings option");
         });

         Then('the user should see options to manage their personal information such as name, address, and general practitioner information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User sees their personal information.");
         });


         Given('the user is on the Profile Settings page', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("User is on Profile Settings tab.");
         });

         When('the user updates their personal information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("updates their personal information");
         });
         

         Then('the changes should be reflected in the user\'s profile', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user displays updated personal information");
         });



         When('the user updates their general practitioner information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log("user updates their general practioner information");
         });


        
