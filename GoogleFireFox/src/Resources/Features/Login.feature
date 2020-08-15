@OrangeHrm
Feature: I would like to login in firfox driver and sign in google
  so as user i want be to login
  Background: I am on google sign page
  Scenario Outline: I am not able to log in massage will appear we are having trouble to confirming details please try again


    When I enter username "<Email>"
    And Click on next Button
    And I enter password "<password>"
    And I click on login button
    Then I am not able to log in successfully and  i should see error "<errormessage>"



    Examples:
    | Email           | password   |     errormessage|
    |Test123@gmail.com|            | Sign in|




