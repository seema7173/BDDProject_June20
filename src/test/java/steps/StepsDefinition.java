package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepsDefinition {

	WebDriver driver;
	LoginPage loginPage;

	@Before
	public void before_run() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the Tecfios login page$")
	public void User_is_on_the_Tecfios_login_page() throws InterruptedException {

		driver.get("http://techfios.com/billing/?ng=admin/");
		Thread.sleep(2000);
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String userName) throws InterruptedException {

		loginPage.enterUserName(userName);
		Thread.sleep(2000);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws InterruptedException {

		loginPage.enterPassword(password);
		Thread.sleep(2000);
	}

	@When("^User clicks on signin$")
	public void User_clicks_on_signin() throws InterruptedException {
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);

	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String userName, String password) throws Throwable {
		loginPage.enterCredentials(userName, password);
	}

	@Then("^User should land on Dashboard page$")
	public void User_should_land_on_DashBoard_page() throws IOException {

// Soft Assert:

//			String expectedTitle = "Dashboard- iBillin";
//			String actualTitle = loginPage.getPageTitle();

//			  if(expectedTitle.equalsIgnoreCase(actualTitle)) {
//			  		System.out.println("Tile matched!");
//			
//			  }else {
//				  	System.out.println("Tile does'nt match!");
//			  }
//			  
//			  loginPage.takeScreenshotAtEndOfTest(driver);

//	******************************************************************************************		

		// Hard Assert:

		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		loginPage.takeScreenshotAtEndOfTest(driver); // In HARD ASSERT We get the screenshot after the validation- i.e.
														// when the page is displayed whereas in SOFT ASSERT you can
														// take the screenshot before the validation part. In 'hard
														// assert' you'll not get the screenshot if the spelling is
														// wrong but in 'soft assert' you'll get the screenshot

	}

	@After
	public void tearDown() {

		driver.close();
		driver.quit();
	}
}