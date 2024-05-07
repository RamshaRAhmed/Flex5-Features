
# Feature: Manage Health Diary on Metrics Tab
#   As a user concerned about my health, 
#   I want to view and manage my health diary on the Metrics tab, 
#   So that I can track and monitor my biometric information over time.

  # Scenario: View Health Diary
  #   Given the user is logged into the application
  #   And the user navigates to the Metrics tab
  #   When the user selects a date to view their biometric information
  #   Then the user should see their daily biometric information 
  #   And the user should be able to click on the Info for You button next to any metric
  #   And the user should see a graph of the selected metric's data for the past one month

  # Scenario: Add or Update Health Diary Entry
  #   Given the user is logged into the application
  #   And the user navigates to the Metrics tab
  #   And there is no health diary entry for the selected date
  #   When the user creates a new health diary entry with the following biometric information
  #   Then the user should see the new health diary entry reflected in the list of biometric information

  # Scenario: Update Existing Health Diary Entry
  #   Given the user is logged into the application
  #   And the user navigates to the Metrics tab
  #   And there is an existing health diary entry for the selected date
  #   When the user updates the existing health diary entry with new values for the metrics:
  #   Then the user should see the updated health diary entry reflected in the list of biometric information

  # Scenario: Change to Another Health Diary Day Entry
  #   Given the user is logged into the application
  #   And the user navigates to the Metrics tab
  #   When the user select a different date from the calendar control
  #   Then the user should see the health diary entry for that date or blank if no entry

