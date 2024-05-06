const {Given,When,Then}= require('@cucumber/cucumber')      
  
Given('there is an existing health diary entry for the selected date', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Biometric Record Exists');
});


When('the user updates the existing health diary entry with new values for the metrics:', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Updating Record...');
});

Then('the user should see the updated health diary entry reflected in the list of biometric information', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log('Biometric Record Updated');
});