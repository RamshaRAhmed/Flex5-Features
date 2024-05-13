
Feature: View Diet Blogs on Home Tab 
  As a user interested in diet and nutrition
  I want to be able to view diet blogs conveniently
  So that I can stay informed and inspired to maintain a healthy lifestyle
  
Scenario: User navigates to the home tab and clicks on the Community topics
    Given the user is logged into the application
    When the user navigates to the home tab
    Then the user should see a section titled Community Topics
    When the user clicks on the Community Topics section
    And the user should see a list of currated community topics blog posts by date
    And each blog post should display its title and a banner image
    And the user should be able to click on a blog post to read its full content
    And the user should be able to click links in the blog post to open up in a browser


Scenario: User navigates to the home tab and clicks on the Food for Thought 
    Given the user is logged into the application
    When the user navigates to the home tab
    Then the user should see a section titled Food for Thought
    When the user clicks on the Food for Thought section
    And the user should see a list of currated topics by Dr. Tom blog posts by date
    And each blog post should display its title and a banner image
    And the user should be able to click on a blog post to read its full content
    And the user should be able to click links in the blog post to open up in a browser

# Scenario: User does not see any diet blogs on the home tab  (Not sure we need this ... I think we will rotate existing blog posts?)
#     Given the user is logged into the application
#     And there are no diet-related blog posts available
#     When the user navigates to the home tab
#     Then the user should see a message indicating that there are currently no diet blogs available

