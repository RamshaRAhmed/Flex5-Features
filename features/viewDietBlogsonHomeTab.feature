
Feature: View Diet Blogs on Home Tab 
  As a user interested in diet and nutrition
  I want to be able to view diet blogs conveniently
  So that I can stay informed and inspired to maintain a healthy lifestyle
  
Scenario: User navigates to the home tab and views diet blogs
    Given the user is logged into the application
    When the user navigates to the home tab
    Then the user should see a section titled 
    And the user should see a list of diet-related blog posts
    And each blog post should display its title and a banner image
    And the user should be able to click on a blog post to read its full content

Scenario: User does not see any diet blogs on the home tab
    Given the user is logged into the application
    And there are no diet-related blog posts available
    When the user navigates to the home tab
    Then the user should see a message indicating that there are currently no diet blogs available

