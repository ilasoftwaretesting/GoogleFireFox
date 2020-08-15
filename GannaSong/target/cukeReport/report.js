$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/GannaSong.feature");
formatter.feature({
  "line": 2,
  "name": "I would like to sign in with ganna.com",
  "description": "",
  "id": "i-would-like-to-sign-in-with-ganna.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GannaSong"
    }
  ]
});
formatter.before({
  "duration": 11196722046,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "I want sign in",
  "description": "",
  "id": "i-would-like-to-sign-in-with-ganna.com;i-want-sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on 1st terms and Condition",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on 2nd terms and Condition",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on 3rd terms and Condition",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on agreeButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on siginin",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will able to sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_homepage()"
});
formatter.result({
  "duration": 150991349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "MyStepDef.i_click_on_st_terms_and_Condition(int)"
});
formatter.result({
  "duration": 623834375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "MyStepDef.i_click_on_nd_terms_and_Condition(int)"
});
formatter.result({
  "duration": 20288985829,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#gdpr-step1 \u003e div \u003e ul \u003e li:nth-child(2) \u003e input[type\u003dcheckbox]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SD-PC\u0027, ip: \u0027169.254.135.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SD\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:58866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aa987daca4c9cd253cd28db983ad5e63\n*** Element info: {Using\u003dcss selector, value\u003d#gdpr-step1 \u003e div \u003e ul \u003e li:nth-child(2) \u003e input[type\u003dcheckbox]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.ClickOnElement(Utils.java:27)\r\n\tat org.example.LoginPage.firstTick(LoginPage.java:16)\r\n\tat org.example.MyStepDef.i_click_on_nd_terms_and_Condition(MyStepDef.java:22)\r\n\tat ✽.And I click on 2nd terms and Condition(src/Resources/Features/GannaSong.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "MyStepDef.i_click_on_rd_terms_and_Condition(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_agreeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_siginin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_will_able_to_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28924,
  "status": "passed"
});
});