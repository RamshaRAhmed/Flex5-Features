Feature: Manage Health Diary on Metrics Tab
  As a user concerned about my health, 
  I want to view and manage my health diary on the Metrics tab, 
  So that I can track and monitor my biometric information over time.

  Scenario: Add Health Diary Entry
    Given the user is logged into the application
    And the user navigates to the Metrics tab
    And there is no health diary entry for the selected date
    When the user creates a new health diary entry with the following biometric information, Height, Weight, A1c, Blood Pressure, Non hdl cholersterol, GFR and Mood
    Then the user should see the new health diary entry reflected in the list of biometric information
    Then the user should see any alerts where their biometric number is out of range
    Then the user should see the phone number to call their General Practioner/Doctor 
    Then the user can click and dial the General Practioner/Doctor right from the application

