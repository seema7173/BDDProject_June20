@NewAccount @Regression
 Feature: Techfios bank and cah New Account functionality
 
@NewScenario1
Scenario Outline:
 User should be able to login with valid credentials and Add New Account
 When User enters the "<userName>" and "<password>"
 And User clicks on the login button
 Then User should be able to see the Dashboard page
 Then User clicks on Bank and Cash button
 Then User clicks on New Account
 Then User should  be able to see the Add New Account page
 Then User fill up the form by entering "<account>" and "<description>" and "<initialBalance>"and "<accountNumber>" and "<contactPerson>"and "<phone>"
 Then User clicks on Submit button

Examples:

 |userName         | password| accountTittle |   description       | initialBalance |acxountNumber| contactPerson|   phone   |
 |demo@techfios.com| abc123  |Savings Account|New business account |    100000      |9982367458900|  Seema Khan  |4698186727 |
