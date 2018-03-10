import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private isBaby: boolean;

  constructor() { }

  ngOnInit() {
    this.isBaby = true;
  }

  selectForm(user) {
    if (user == 'baby') {
      this.isBaby = true;
    } else if (user == 'babysitter') {
      this.isBaby = false;
    }
  }
}
