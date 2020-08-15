package org.example;

import org.junit.Before;

public class Hooks extends BasePage {
    BrowserSetup browserSetup = new BrowserSetup();
    LoadProp loadProp = new LoadProp();
    @Before
    public void openBrowser (){
        browserSetup.setUPBrowser();
        driver.get(loadProp.getproperty("url"));
        driver.manage().deleteAllCookies();
        driver.manage().
    }
}
