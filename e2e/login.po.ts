import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  adminLogin() {
    element(by.css("input[type='text']")).sendKeys('admin');
    element(by.css("input[type='password']")).sendKeys('admin');

    return element(by.css("button[type='submit']")).click();
  }

  userLogin() {
    element(by.css("input[type='text']")).sendKeys('user');
    element(by.css("input[type='password']")).sendKeys('user');

    return element(by.css("button[type='submit']")).click();
  }
}
