package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef extends BasePage {
    LoginPage loginpage = new LoginPage();


    @Given("^I am on homepage$")
    public void i_am_on_homepage(){
    }

    @Given("^I click on (\\d+)st terms and Condition$")
    public void i_click_on_st_terms_and_Condition(int arg1){
        loginpage.firstTick();
    }

    @Given("^I click on (\\d+)nd terms and Condition$")
    public void i_click_on_nd_terms_and_Condition(int arg1){
        loginpage.firstTick();
    }

    @Given("^I click on (\\d+)rd terms and Condition$")
    public void i_click_on_rd_terms_and_Condition(int arg1) {
        loginpage.firstTick();
    }

    @Given("^I click on agreeButton$")
    public void i_click_on_agreeButton() {
        loginpage.firstTick();
    }

    @When("^I click on siginin$")
    public void i_click_on_siginin() {
    }



    @Then("^I will able to sign in$")
    public void i_will_able_to_sign_in() {
    }

}
