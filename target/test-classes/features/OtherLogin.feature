  @OtherLogin @Regression
 Feature: Validate Techfios Login functionality different way
 

Background:
	Given User is on the Tecfios login page

@Scenario1 @smoke              
Scenario Outline: 1 User should be able to login with valid credentials
	When User enters "<userName>" and "<password>"           
	And User clicks on signin
	Then User should land on Dashboard page 
	
Examples:

        |userName         |password|
		|demo@techfios.com|abc123|
		|demo@techfios.com|abc124|
	    |demo1@techfios.com|abc123|
