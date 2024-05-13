Feature: Manage Users on Admin Dashboard

  As an admin user,
  I want to be able to manage users on the admin dashboard,
  So that I can control user access and view user information.

  Scenario: Add New User
    Given the admin is logged into the admin dashboard
    When the admin adds a new user with valid information
    Then the new user should be successfully added to the system

  Scenario: Block User
    Given the admin is logged into the admin dashboard
    And there is a user in the system
    When the admin blocks the user
    Then the user's access should be revoked

  Scenario: Delete User
    Given the admin is logged into the admin dashboard
    And there is a user in the system
    When the admin deletes the user
    Then the user should be removed from the system