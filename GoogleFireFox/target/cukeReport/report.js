$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "I would like to login in firfox driver and sign in google",
  "description": "so as user i want be to login",
  "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on next Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am not able to log in successfully and  i should see error \"\u003cerrormessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;",
  "rows": [
    {
      "cells": [
        "Email",
        "password",
        "errormessage"
      ],
      "line": 17,
      "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;1"
    },
    {
      "cells": [
        "Test123@gmail.com",
        "",
        "Sign in"
      ],
      "line": 18,
      "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7287865337,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on google sign page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "I am not able to log in massage will appear we are having trouble to confirming details please try again",
  "description": "",
  "id": "i-would-like-to-login-in-firfox-driver-and-sign-in-google;i-am-not-able-to-log-in-massage-will-appear-we-are-having-trouble-to-confirming-details-please-try-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Test123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on next Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am not able to log in successfully and  i should see error \"Sign in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test123@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyStepDef.i_enter_username(String)"
});
formatter.result({
  "duration": 264597969,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_on_next_Button()"
});
formatter.result({
  "duration": 131673635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepDef.i_enter_password(String)"
});
formatter.result({
  "duration": 130154,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 17727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 62
    }
  ],
  "location": "MyStepDef.i_am_not_able_to_log_in_successfully_and_i_should_see_error(String)"
});
formatter.result({
  "duration": 48433408,
  "status": "passed"
});
formatter.after({
  "duration": 411045795,
  "status": "passed"
});
});