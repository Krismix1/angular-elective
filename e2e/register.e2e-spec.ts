
let page = {}

function getPage() {
  page = {
    babyButton: $$(".user-selection button").get(0),
    babysitterButton: $$(".user-selection button").get(1),
    babyForm: {
      self: element(by.css("#baby-form")),
      inputs: {
        firstNameInput: $$("#baby-form input[formControlName='firstName']"),
        pictureUrlInput: $$("#baby-form input[formControlName='picture']"),
        postalCodeInput: $$("#baby-form input[formControlName='postalCode']"),
        ageInput: $$("#baby-form input[formControlName='age']"),
        phoneInput: $$("#baby-form input[formControlName='phone']"),
        genderSelection: {
          self: $$("#babyGender"),
          options: {
            maleOption: element(by.cssContainingText('#baby-form option', 'Male')),
            femaleOption: element(by.cssContainingText('#baby-form option', 'Female'))
          }
        }
      }
    },
    babysitterForm: {
      self: element(by.css("#babysitter-form")),
      inputs: {
        firstNameInput: $$("#babysitter-form input[formControlName='firstName']"),
        lastNameInput: $$("#babysitter-form input[formControlName='lastName']"),
        ageInput: $$("#babysitter-form input[formControlName='age']"),
        yearsOfExperienceInput: $$("#babysitter-form input[formControlName='yearsOfExperience']"),
        regionInput: $$("#babysitter-form input[formControlName='region']"),
        pictureUrlInput: $$("#babysitter-form input[formControlName='picture']"),
        phoneInput: $$("#babysitter-form input[formControlName='phone']"),
        genderSelection: {
          self: $$("#babysitterGender"),
          options: {
            maleOption: element(by.cssContainingText('#babysitter-form option', 'Male')),
            femaleOption: element(by.cssContainingText('#babysitter-form option', 'Female'))
          }
        }
      }
    }
  };
}

describe('Page: Register baby', () => {

  beforeAll(() => {
    getPage();
  });

  it('1. Should load html', () => {
    browser.get('/home/register');

    // element.all(by.css()) is equivalent to $$
    $$(".user-selection").then(function(elemsAfter) {
      expect(elemsAfter.length).toEqual(1);
    });

    $$("form").then((elements) => {
      expect(elements.length).toEqual(2);
    });
  });

  it('2. Should display register baby form', () => {
    page.babyButton.click();

    expect(page.babyForm.self.isDisplayed()).toBe(true);
    expect(page.babysitterForm.self.isDisplayed()).toBe(false);

  });

  it('3. Should fill fields for baby form', () => {
    page.babyForm.inputs.firstNameInput.sendKeys("Test first name");
    page.babyForm.inputs.pictureUrlInput.sendKeys("Test picture url");
    page.babyForm.inputs.postalCodeInput.sendKeys("Test postal 2000");
    page.babyForm.inputs.ageInput.sendKeys("10");
    page.babyForm.inputs.phoneInput.sendKeys("Test 987654321");

    page.babyForm.inputs.genderSelection.options.femaleOption.click();

    expect(page.babyForm.self.getAttribute('class')).toMatch('ng-valid');
  });

  it('4. Should submit new baby', () => {

    // element(by.id('babySubmitBtn')).click();
  });

  it('5. Should display register babysitter form', () => {
    page.babysitterButton.click();

    expect(page.babyForm.self.isDisplayed()).toBe(false);
    expect(page.babysitterForm.self.isDisplayed()).toBe(true);

  });

  it('6. Should fill fields for babysitter form', () => {
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
