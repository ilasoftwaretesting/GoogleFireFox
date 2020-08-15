@GannaSong
  Feature: I would like to sign in with ganna.com
    Scenario: I want sign in
      Given I am on homepage
      And I click on 1st terms and Condition
      And I click on 2nd terms and Condition
      And I click on 3rd terms and Condition
      And I click on agreeButton
      When I click on siginin
      Then I will able to sign in
