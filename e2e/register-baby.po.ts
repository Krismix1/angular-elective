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
    this.firstNameField().sendKeys("Test first name");
    this.pictureField().sendKeys("Test picture url");
    this.postalCodeField().sendKeys("Test postal 2000");
    this.ageField().sendKeys("10");

    element(by.cssContainingText('form option', 'Female')).click();
  }

  submitForm() {
    return $("#babySubmitBtn").click();
  }

  isEmpty() {

  }

  firstNameField() {
    return $("form input[formControlName='firstName']");
  }

  postalCodeField() {
    return $("form input[formControlName='postalCode']");
  }

  pictureField() {
    return $("form input[formControlName='picture']");
  }

  ageField() {
    return $("form input[formControlName='age']");
  }
}
