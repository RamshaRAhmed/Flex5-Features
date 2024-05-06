const {Given,When,Then}= require('@cucumber/cucumber')      
  
         Given('there is no health diary entry for the selected date', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('No Record on this day');;
         });

  

         When('the user creates a new health diary entry with the following biometric information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('Creating New Record...');
         });


         Then('the user should see the new health diary entry reflected in the list of biometric information', function () {
           // Write code here that turns the phrase above into concrete actions
           return console.log('New Biometric Record Displayed');         });


     