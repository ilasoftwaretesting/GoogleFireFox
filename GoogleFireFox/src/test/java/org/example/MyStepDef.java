package org.example;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepDef extends BasePage {
    LoginPage loginpage = new LoginPage();


    @When("^I enter username \"([^\"]*)\"$")
    public void i_enter_username(String Email) {
        loginpage.enterEmailAdress(Email);
    }

    @When("^Click on next Button$")
    public void click_on_next_Button() {
        loginpage.ClickonSignin();
    }

    @When("^I enter password \"([^\"]*)\"$")
    public void i_enter_password(String arg1) {
    }

    @When("^I click on login button$")
    public void i_click_on_login_button() {
    }

    @Then("^I am not able to log in successfully and  i should see error \"([^\"]*)\"$")
    public void i_am_not_able_to_log_in_successfully_and_i_should_see_error(String errormessage) {
        Assert.assertEquals(driver.findElement(By.id("headingText")).getText(), errormessage);
        System.out.println("error message should be display successfully");
    }
}