import { browser, by, element } from 'protractor';

export class RegisterBabysitterPage {
  navigateTo() {
    browser.get("/register");
    return this.displayForm();
  }

  displayForm() {
    return $$(".user-selection button").get(1).click();
  }

  fillValidForm() {
    $("form input[formControlName='firstName']").sendKeys("Test first name");
    $("form input[formControlName='lastName']").sendKeys("Test last name");
    $("form input[formControlName='age']").sendKeys("23");
    $("form input[formControlName='yearsOfExperience']").sendKeys("8");
    $("form input[formControlName='region']").sendKeys("Test region");
    $("form input[formControlName='picture']").sendKeys("Test picture url");
    $("form input[formControlName='phone']").sendKeys("Test 987654321");

    element(by.cssContainingText('form option', 'Male')).click();
  }

  submitForm(){
    return $("#babysitterSubmitBtn").click();
  }
}
