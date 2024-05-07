Feature: Manage Profile Settings

  As a user of the application,
  I want to be able to manage my personal information in the profile settings,
  So that I can keep my information up to date.

  Scenario: View Profile Settings
    Given the user is logged into the application
    When the user navigates to the Settings tab
    And the user selects the Profile Settings option
    Then the user should see options to manage their personal information such as name, mobile #, birthday, height, sex, and general practitioner information

  Scenario: Update Personal Information
    Given the user is logged into the application
    And the user is on the Profile Settings page
    When the user updates their personal information
    Then the changes should be reflected in the user's profile

  Scenario: Manage General Practitioner Information
    Given the user is logged into the application
    And the user is on the Profile Settings page
    When the user updates their general practitioner information
    Then the changes should be reflected in the user's profile
