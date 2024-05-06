
Feature: View Health Diary on Metrics Tab
  As a user concerned about my health, 
  I want to view and manage my health diary on the Metrics tab, 
  So that I can track and monitor my biometric information over time.

  Scenario: View Health Diary
    Given the user is logged into the application
    And the user navigates to the Metrics tab
    When the user selects a date to view their biometric information
    Then the user should see their daily biometric information 
    And the user should be able to click on the Info for You button next to any metric
    And the user should see a graph of the selected metric data for the past one month

  