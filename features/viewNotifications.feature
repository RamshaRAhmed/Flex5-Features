Feature: View Notifications on Notification Tab

  As a user of the application,
  I want to be able to view my notifications on the Notification tab,
  So that I can stay informed about important updates and activities.

  Scenario: User views notifications on the Notification tab
    Given the user is logged into the application
    When the user clicks on the notification icon to go to the Notification tab
    Then the user should be redirected to the notification tab 
    And the user should see a list of their notifications
    And if there are no notifications
    Then the user should see a message indicating that there are no notifications available
