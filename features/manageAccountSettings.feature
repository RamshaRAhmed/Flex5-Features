Feature: Manage Account Settings

  As a user of the application,
  I want to be able to manage my account information in the account settings,
  So that I can maintain control over my account and security.

  Scenario: View Account Settings
    Given the user is logged into the application
    When the user navigates to the Settings option in the profile menu on the top menu bar
    And the user selects the Account Settings option
    Then the user should see options to manage their account information such as email and password

  Scenario: Change Email
    Given the user is logged into the application
    And the user is on the Account Settings page
    When the user changes their email address
    Then the changes should be reflected in the users account

  Scenario: Reset Password
    Given the user is logged into the application
    And the user is on the Account Settings page
    When the user resets their password
    Then the user should be able to log in with the new password
