Feature: Test login functionality

  Scenario: Login with usermane and password missing
    Given user is on login page
    When user clicks on login button
    Then “Epic sadface: Username is required” error message is visible
