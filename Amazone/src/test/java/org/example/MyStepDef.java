package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class MyStepDef {
    HomePage homePage = new HomePage();
    Electronics electronics = new Electronics();

    @Given("^I am on login page$")
    public void i_am_on_login_page() {

    }

    @When("^I click on accounts & lists$")
    public void i_click_on_accounts_lists()  {
        homePage.Clickonaccountandlist();

    }
    @When("^I click on email$")
    public void i_click_on_email() {
        homePage.signin();

    }

    @When("^I enter password$")
    public void i_enter_password()  {
        homePage.EnterPassword();
    }
    @When("^I click on signin button$")
    public void i_click_on_signin_button()  {
        homePage.SigninButton();
    }
    @When("^I click on all button$")
    public void i_click_on_all_button() {
        electronics.Alldepartment();

    }

    @When("^I select electronics & photos$")
    public void i_select_electronics_photos()  {
        electronics.Electronicandphotos();

    }
    @When("^I click on recent view$")
    public void i_click_on_recent_view() {
        electronics.Recentviewed();

    }
    @When("^I click on add to Basket$")
    public void i_click_on_add_to_Basket() {
        electronics.AddtoBasket();
    }
    @When("^I click on proceed to checkout$")
    public void i_click_on_proceed_to_checkout()  {
        electronics.ProceedTocheckout();

    }
    @When("^I click on change quantity$")
    public void i_click_on_change_quantity() {
        electronics.Changequantity();
    }
    @When("^I enter (\\d+) quantity$")
    public void i_enter_quantity(int arg1) {
        electronics.Quantity();
    }
    @When("^I click on update$")
    public void i_click_on_update()  {
        electronics.Update();
    }
    @When("^I click on checkout$")
    public void i_click_on_checkout()  {
        electronics.CheckouttoPay();
    }






    }




















