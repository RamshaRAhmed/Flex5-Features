Feature: View Health Diary on Metrics Tab
  As a user concerned about my health, 
  I want to view and manage my health diary on the Metrics tab, 
  So that I can track and monitor my biometric information over time.

   Scenario: Update Existing Health Diary Entry
    Given the user is logged into the application
    And the user navigates to the Metrics tab
    And there is an existing health diary entry for the selected date
    When the user updates the existing health diary entry with new values for the metrics:
    Then the user should see the updated health diary entry reflected in the list of biometric information
