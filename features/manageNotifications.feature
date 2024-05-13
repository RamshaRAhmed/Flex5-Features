Feature: Manage Notifications on Admin Dashboard

  As an admin user,
  I want to be able to manage notifications on the admin dashboard,
  So that I can communicate important information to users.

  Scenario: Create and Send Notification
    Given the admin is logged into the admin dashboard
    When the admin creates and sends a notification to a user
    Then the notification should be successfully delivered to the user
