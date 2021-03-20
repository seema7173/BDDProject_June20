$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate TechFios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 9,
      "value": "#@Scenario1"
    },
    {
      "line": 10,
      "value": "#Scenario:"
    },
    {
      "line": 11,
      "value": "#\tUser should be able to log in with valid credentials (Making Variables work as Placeholders"
    },
    {
      "line": 12,
      "value": "#\tWhen User enters the username as \"demo@techfios.com\""
    },
    {
      "line": 13,
      "value": "#\tWhen User enters the password as \"abc123\""
    },
    {
      "line": 14,
      "value": "#\tAnd User clicks on the log in button"
    },
    {
      "line": 15,
      "value": "#\tThen User should be able to see the DashBoard Page"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#@Scenario2"
    },
    {
      "line": 18,
      "value": "#Scenario:"
    },
    {
      "line": 19,
      "value": "#\tUser should be able to log in with valid credentials (Making Variables work as Placeholders"
    },
    {
      "line": 20,
      "value": "#\tWhen User enters the username as \"demo@techfios.com\""
    },
    {
      "line": 21,
      "value": "#\tWhen User enters the password as \"abc124\""
    },
    {
      "line": 22,
      "value": "#\tAnd User clicks on the log in button"
    },
    {
      "line": 23,
      "value": "#\tThen User should be able to see the DashBoard Page"
    }
  ],
  "line": 26,
  "name": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated )",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User enters the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 33,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 34,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 35,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;3"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc123"
      ],
      "line": 36,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2553915500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 1752678800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated )",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 263792400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 3721805300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 12377200,
  "status": "passed"
});
formatter.before({
  "duration": 1631531400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 1653011700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated )",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User enters the \"demo@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc124",
      "offset": 41
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 236961300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 3263259200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 6068200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepDefs.user_should_be_able_to_see_the_DashBoard_Page(StepDefs.java:60)\r\n\tat ✽.Then User should be able to see the DashBoard Page(feature/TechFios_Login.feature:29)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1341056100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 2086605600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated )",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-(keeping-variables-and-placeholders-separated-);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User enters the \"demo1@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 42
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 208053300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 3393596000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 8551800,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepDefs.user_should_be_able_to_see_the_DashBoard_Page(StepDefs.java:60)\r\n\tat ✽.Then User should be able to see the DashBoard Page(feature/TechFios_Login.feature:29)\r\n",
  "status": "failed"
});
});