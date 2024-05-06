Feature: View Locations and Map on Find Tab

  As a user of the application,
  I want to be able to view a list of locations and a map on the Find tab,
  So that I can explore different places and find their details easily.

  Scenario: View List of Locations
    Given the user is logged into the application
    When the user navigates to the Find tab
    Then the user should see a list of locations displayed

  Scenario: View Map on Find Tab
    Given the user is logged into the application
    When the user navigates to the Find tab
    Then the user should see a map displayed showing the locations

  Scenario: Select Location from List
    Given the user is logged into the application
    And the user is on the Find tab with a list of locations displayed
    When the user selects a specific location from the list
    Then the user should see the details of the selected location displayed on the map

