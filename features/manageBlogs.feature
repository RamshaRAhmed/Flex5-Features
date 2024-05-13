Feature: Manage Blogs on Admin Dashboard

  As an admin user,
  I want to be able to manage blogs on the admin dashboard,
  So that I can publish, edit, or delete blog posts.

  Scenario: Add New Blog
    Given the admin is logged into the admin dashboard
    When the admin adds a new blog with valid information
    Then the new blog should be successfully added to the system

  Scenario: Edit Blog
    Given the admin is logged into the admin dashboard
    And there is an existing blog in the system
    When the admin edits the blog
    Then the changes should be reflected in the system

  Scenario: Delete Blog
    Given the admin is logged into the admin dashboard
    And there is an existing blog in the system
    When the admin deletes the blog
    Then the blog should be removed from the system
