Feature: View Individual Diet Blogs
  As a user interested in diet and nutrition
  I want to be able to view individual diet blogs in detail
  So that I can read the full content and navigate back to view more diet blogs

  Scenario: User clicks on a diet blog post to read full content
    Given the user is on the home tab with a list of diet blogs
    When the user clicks on a specific diet blog post
    Then the user should be redirected to a page displaying the full content of the selected blog post
    And the user should be able to navigate back to the home tab to view more diet blogs

  Scenario: User does not see any diet blogs on the home tab
    Given the user is logged into the application
    And there are no diet-related blog posts available
    When the user navigates to the home tab
    Then the user should see a message indicating that there are currently no diet blogs available
