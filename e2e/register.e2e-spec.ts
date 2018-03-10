
let page = {}

function getPage() {
  page = {
    babyButton: $$(".user-selection button").get(0),
    babysitterButton: $$(".user-selection button").get(1),
    babyForm: {
      self: element(by.css("form")),
      inputs: {
        firstNameInput: $("form input[formControlName='firstName']"),
        pictureUrlInput: $("form input[formControlName='picture']"),
        postalCodeInput: $("form input[formControlName='postalCode']"),
        ageInput: $("form input[formControlName='age']"),
        genderSelection: {
          self: $("#babyGender"),
          options: {
            maleOption: element(by.cssContainingText('form option', 'Male')),
            femaleOption: element(by.cssContainingText('form option', 'Female'))
          }
        }
      },
      submitBtn: $("#babySubmitBtn")
    },
    babysitterForm: {
      self: element(by.css("form")),
      inputs: {
        firstNameInput: $("form input[formControlName='firstName']"),
        lastNameInput: $("form input[formControlName='lastName']"),
        ageInput: $("form input[formControlName='age']"),
        yearsOfExperienceInput: $("form input[formControlName='yearsOfExperience']"),
        regionInput: $("form input[formControlName='region']"),
        pictureUrlInput: $("form input[formControlName='picture']"),
        phoneInput: $("form input[formControlName='phone']"),
        genderSelection: {
          self: $("#babysitterGender"),
          options: {
            maleOption: element(by.cssContainingText('form option', 'Male')),
            femaleOption: element(by.cssContainingText('form option', 'Female'))
          }
        }
      }
    }
  };
}

describe('Page: Register baby', () => {

  beforeAll(() => {
    browser.get('/register');
    getPage();
  });

  it('1. Should load html', () => {

    // element.all(by.css()) is equivalent to $$
    $$(".user-selection").then(function(elemsAfter) {
      expect(elemsAfter.length).toEqual(1);
    });
  });

  it('2. Should display register baby form', () => {
    page.babyButton.click();
    expect(page.babyForm.self.isPresent()).toBe(true);
    $$("form input").then(elements => {
      expect(elements.length).toBe(4);
    });
  });

  it('3. Should fill fields for baby form', () => {
    page.babyForm.inputs.firstNameInput.sendKeys("Test first name");
    page.babyForm.inputs.pictureUrlInput.sendKeys("Test picture url");
    page.babyForm.inputs.postalCodeInput.sendKeys("Test postal 2000");
    page.babyForm.inputs.ageInput.sendKeys("10");

    page.babyForm.inputs.genderSelection.options.femaleOption.click();

    expect(page.babyForm.self.getAttribute('class')).toMatch('ng-valid');
  });

  it('4. Should submit new baby', () => {

    page.babyForm.submitBtn.click().then(function() {
      // Fields should be empty after submit
      expect(page.babyForm.inputs.firstNameInput.getText()).toBe("");
      expect(page.babyForm.inputs.pictureUrlInput.getText()).toBe("");
      expect(page.babyForm.inputs.postalCodeInput.getText()).toBe("");
      expect(page.babyForm.inputs.ageInput.getText()).toBe("");
      browser.get("/portal/babies");
      // should redirect to login page
      expect(browser.driver.getCurrentUrl()).toMatch('/login');
      element(by.css("input[type='text']")).sendKeys('admin');
      element(by.css("input[type='password']")).sendKeys('admin');

      // on successful login, should redirect back
      element(by.css("button[type='submit']")).click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/portal/babies');
      }, 10000);
      // the page should contain the new baby
      browser.waitForAngular();
      $$(".list-item").then(elements => {
        expect(elements.length).toBe(3);
        expect(elements[2].getText()).toBe("Test first name");
      }, 10000);
    });
  });
});

describe("Page: Register babysitter", function() {

  beforeAll(() => {
    browser.get('/register');
    getPage();
  });

  it('1. Should display register babysitter form', () => {
    browser.get("/register")
    page.babysitterButton.click();
    expect(page.babysitterForm.self.isDisplayed()).toBe(true);
    $$("form input").then(elements => {
      expect(elements.length).toBe(7);
    });
  });

  it('2. Should fill fields for babysitter form', () => {
    page.babysitterForm.inputs.firstNameInput.sendKeys("Test first name");
    page.babysitterForm.inputs.lastNameInput.sendKeys("Test last name");
    page.babysitterForm.inputs.ageInput.sendKeys("23");
    page.babysitterForm.inputs.yearsOfExperienceInput.sendKeys("8");
    page.babysitterForm.inputs.regionInput.sendKeys("Test region");
    page.babysitterForm.inputs.pictureUrlInput.sendKeys("Test picture url");
    page.babysitterForm.inputs.phoneInput.sendKeys("Test 987654321");

    page.babysitterForm.inputs.genderSelection.options.maleOption.click();

    expect(page.babysitterForm.self.getAttribute('class')).toMatch('ng-valid');
  });
});
