import { browser, by, element } from 'protractor';

export class RegisterBabyPage {

  navigateTo() {
    browser.get("/register");
    return this.displayForm();
  }

  displayForm() {
    return $$(".user-selection button").get(0).click();
  }

  fillValidForm() {
    $("form input[formControlName='firstName']").sendKeys("Test first name");
    $("form input[formControlName='picture']").sendKeys("Test picture url");
    $("form input[formControlName='postalCode']").sendKeys("Test postal 2000");
    $("form input[formControlName='age']").sendKeys("10");

    element(by.cssContainingText('form option', 'Female')).click();
  }

  submitForm() {
    return $("#babySubmitBtn").click();
  }

  isEmpty() {

  }
}
