package org.example;

import org.openqa.selenium.By;

public class HomePage extends Utils {
    LoadProp loadProp=new LoadProp();


    private By clickonaccountandlist = By.cssSelector("#nav-link-accountList > div > span");
    private By Signin = By.id("ap_email");
    private By Continue = By.id("continue");
    private By Password = By.id("ap_password");
    private By signinButton =By.id("signInSubmit");




    public void Clickonaccountandlist() {
        ClickOnElement(clickonaccountandlist);
    }
    public void signin(){
        waitForElementToBevisible(Signin,20);
        enterText(Signin,loadProp.getproperty("Signin"));
        ClickOnElement(Continue);
    }
    public void EnterPassword(){
        waitForElementToBevisible(Password,20);
        enterText(Password,loadProp.getproperty("Password"));
    }
    public void SigninButton(){
        ClickOnElement(signinButton);
    }

    }



