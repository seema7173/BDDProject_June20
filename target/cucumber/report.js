$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login functionality different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLogin"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 16,
      "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 17,
      "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 18,
      "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc123"
      ],
      "line": 19,
      "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3067600401,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on the Tecfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinition.User_is_on_the_Tecfios_login_page()"
});
formatter.result({
  "duration": 4528096000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepsDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 194296000,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_clicks_on_signin()"
});
formatter.result({
  "duration": 6089401101,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_should_land_on_DashBoard_page()"
});
formatter.result({
  "duration": 543580300,
  "status": "passed"
});
formatter.after({
  "duration": 712780500,
  "status": "passed"
});
formatter.before({
  "duration": 1264993900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on the Tecfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinition.User_is_on_the_Tecfios_login_page()"
});
formatter.result({
  "duration": 4945169399,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"demo@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 37
    }
  ],
  "location": "StepsDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 269199099,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_clicks_on_signin()"
});
formatter.result({
  "duration": 3554219600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_should_land_on_DashBoard_page()"
});
formatter.result({
  "duration": 5832101,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepsDefinition.User_should_land_on_DashBoard_page(StepsDefinition.java:82)\r\n\tat ✽.Then User should land on Dashboard page(features/OtherLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1514844000,
  "status": "passed"
});
formatter.before({
  "duration": 1256351000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on the Tecfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinition.User_is_on_the_Tecfios_login_page()"
});
formatter.result({
  "duration": 4407328401,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;1-user-should-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"demo1@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "StepsDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 212661899,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_clicks_on_signin()"
});
formatter.result({
  "duration": 4168752900,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.User_should_land_on_DashBoard_page()"
});
formatter.result({
  "duration": 8287201,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepsDefinition.User_should_land_on_DashBoard_page(StepsDefinition.java:82)\r\n\tat ✽.Then User should land on Dashboard page(features/OtherLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 721008899,
  "status": "passed"
});
});