package org.example;

import org.openqa.selenium.By;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LoginPage extends Utils {
    LoadProp loadProp = new LoadProp();

    // to creat timestamp to use in email
    public static String timeStamp() {
        DateFormat format = new SimpleDateFormat("DDMMYYMMSS");
        return format.format(new Date());
    }
    private By _enterEmailAdress = By.id("identifierId");
    private By _clickonSignin = By.cssSelector("div[class='VfPpkd-RLmnJb']");
   

    public void enterEmailAdress(String Email)  {

        enterText(_enterEmailAdress,(Email));
    }
    public void ClickonSignin(){
             ClickOnElement(_clickonSignin);
    }


}
