import { LoginPage } from './login.po';
import { RegisterBabyPage } from './register-baby.po';

describe("Page: Baby list", () => {
  let loginPage;
  beforeAll(() => {
    loginPage = new LoginPage();
  });

  it("1. Should require auth", () => {
    browser.get("/portal");
    expect(browser.getCurrentUrl()).toMatch("/login");
  });

  it("2. Should show portal page", () => {
    loginPage.adminLogin().then(() => {
      expect(browser.getCurrentUrl()).toMatch("/portal");
      expect($(".container p").getText()).toMatch("portal works!");
      $$(".container a").then(elements => {
        expect(elements.length).toBe(2);
      });
    });
  });

  it("3. Should load list of babies", () => {
    $$(".container a").get(0).click().then(() => {
      expect(browser.getCurrentUrl()).toMatch("/portal/babies");
      $$(".list-item").then(babies => {
        expect(babies.length).toBe(2); // FIXME: Don't hardcode the value here
      });
    });
  });

  it("4. Should delete baby", () => {
    $$("button").get(0).click().then(() => {
      $$(".list-item").then(babies => {
        expect(babies.length).toBe(1); // FIXME: Don't hardcode the value here
        expect(babies[0].getText()).toMatch("Alice");
      });
    });
  });

  it("5. Should load edit form", () => {
    $(".list-item a.btn").click().then(() => {
      expect($("app-edit-baby").isPresent()).toBeTruthy();
      expect($(".btn-positive").isPresent()).toBeTruthy();
    });
  });

  it("6. Should load correct data in edit form", () => {
    let babyForm = new RegisterBabyPage();

    expect(babyForm.firstNameField().getAttribute("value")).toMatch("Alice");
    expect(babyForm.postalCodeField().getAttribute("value")).toMatch("2000");
  });

  it("7. Should submit new data", () => {
    let babyForm = new RegisterBabyPage();
    let firstNameField = babyForm.firstNameField();
    firstNameField.clear();
    firstNameField.sendKeys("A new name for baby");

    $(".btn-positive").click().then(() => {
      $$(".baby-description").then(babies => {
        expect(babies.length).toBe(1); // FIXME: Don't hardcode the value here
        expect(babies[0].getText()).toMatch("A new name for baby");
      });
    });
  });
});
