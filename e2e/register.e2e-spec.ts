import { LoginPage } from './login.po';
import { RegisterBabyPage } from './register-baby.po';
import { RegisterBabysitterPage } from './register-babysitter.po';

let page = {}

function getPage() {
  page = {
    babyForm: {
      self: element(by.css("form")),
      inputs: {
        genderSelection: {
          self: $("#babyGender"),
          options: {
            maleOption: element(by.cssContainingText('form option', 'Male'))
          }
        }
      }
    },
    babysitterForm: {
      self: element(by.css("form")),
      inputs: {
        genderSelection: {
          self: $("#babysitterGender"),
          options: {
            femaleOption: element(by.cssContainingText('form option', 'Female'))
          }
        }
      }
    }
  };
}

describe('Page: Register baby', () => {

  let loginPage = new LoginPage();
  let registerBabyPage = new RegisterBabyPage();

  beforeAll(() => {
    registerBabyPage.navigateTo();
    getPage();
  });

  it('1. Should load html', () => {
    // element.all(by.css()) is equivalent to $$
    $$(".user-selection").then(function(elemsAfter) {
      expect(elemsAfter.length).toEqual(1);
    });
  });

  it('2. Should display register baby form', () => {
    expect(page.babyForm.self.isPresent()).toBe(true);
    $$("form input").then(elements => {
      expect(elements.length).toBe(4);
    });
  });

  it('3. Should fill fields for baby form', () => {
    registerBabyPage.fillValidForm();
    expect(page.babyForm.self.getAttribute('class')).toMatch('ng-valid');
  });

  it('4. Should submit new baby', () => {

    registerBabyPage.submitForm().then(function() {
      // Fields should be empty after submit
      expect(page.babyForm.inputs.firstNameInput.getText()).toBe("");
      expect(page.babyForm.inputs.pictureUrlInput.getText()).toBe("");
      expect(page.babyForm.inputs.postalCodeInput.getText()).toBe("");
      expect(page.babyForm.inputs.ageInput.getText()).toBe("");
      browser.get("/portal/babies");
      // should redirect to login page
      expect(browser.driver.getCurrentUrl()).toMatch('/login');
      loginPage.adminLogin().then(function() {
        browser.waitForAngular();
        // on successful login, should redirect back
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

  let registerBabysitterPage = new RegisterBabysitterPage();

  beforeAll(() => {
    registerBabysitterPage.navigateTo();
    getPage();
  });

  it('1. Should display register babysitter form', () => {
    expect(page.babysitterForm.self.isDisplayed()).toBe(true);
    $$("form input").then(elements => {
      expect(elements.length).toBe(7);
    });
  });

  it('2. Should fill fields for babysitter form', () => {
    registerBabysitterPage.fillValidForm();
    expect(page.babysitterForm.self.getAttribute('class')).toMatch('ng-valid');
  });
});
