package org.example;

import org.openqa.selenium.By;

public class LoginPage extends Utils {

     private By checkboxOne = By.cssSelector("#gdpr-step1 > div > ul > li:nth-child(1) > input[type=checkbox]");
     private By checkboxTwo = By.cssSelector("#gdpr-step1 > div > ul > li:nth-child(2) > input[type=checkbox]");
     private By checkboxThree = By.cssSelector("#gdpr-step1 > div > ul > li:nth-child(3) > input[type=checkbox]");
     private By agreeButton=By.id("gdprTC_Agree");


     public void firstTick (){

         ClickOnElement(checkboxOne);
         waitForElementToBevisible();
         ClickOnElement(checkboxTwo);
         //waitForElementToBevisible(checkboxThree,10);
         ClickOnElement(checkboxThree);
         ClickOnElement(agreeButton);
     }

}

