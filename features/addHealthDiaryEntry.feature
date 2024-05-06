
Feature: Manage Health Diary on Metrics Tab
  As a user concerned about my health, 
  I want to view and manage my health diary on the Metrics tab, 
  So that I can track and monitor my biometric information over time.

  Scenario: Add Health Diary Entry
    Given the user is logged into the application
    And the user navigates to the Metrics tab
    And there is no health diary entry for the selected date
    When the user creates a new health diary entry with the following biometric information
    Then the user should see the new health diary entry reflected in the list of biometric information