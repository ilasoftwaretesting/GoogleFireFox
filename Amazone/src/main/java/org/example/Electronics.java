package org.example;

import org.openqa.selenium.By;

public class Electronics extends Utils {
    LoadProp loadProp = new LoadProp();

    private By alldeparment = By.cssSelector("div[class='nav-search-scope nav-sprite']");
    private By eleandPhotos = By.cssSelector("#searchDropdownBox");
    private By recentView =By.cssSelector("[class='a-image-container a-dynamic-image-container hud-card-image-redesign-container']");
    private By addTobabasket =By.id("submit.add-to-cart");
    private By proceedtoCheckout = By.id("hlb-ptc-btn");
    private By changeQuantity = By.cssSelector("a[class='a-declarative change-quantity-button a-size-mini']");
    private By quantity = By.cssSelector("[class='quantity-input']");
    private By update = By.cssSelector("a[class='a-declarative update-quantity-button a-size-mini']");
    //private By checkout = By.cssSelector("input[class='a-button-text place-your-order-button']");

    public void Alldepartment (){
        ClickOnElement(alldeparment);
    }
    public void Electronicandphotos(){
        ClickOnElement(eleandPhotos);
    }
    public void Recentviewed(){
        ClickOnElement(recentView);
    }
    public void AddtoBasket(){
        ClickOnElement(addTobabasket);
    }
    public void ProceedTocheckout(){
        ClickOnElement(proceedtoCheckout);
    }
    public void Changequantity(){
        ClickOnElement(changeQuantity);
    }
    public void Quantity(){
        enterText(quantity,"1");
    }
    public void Update(){
        ClickOnElement(update);
    }
    public void CheckouttoPay(){
        //ClickOnElement(checkout);
    }
}


