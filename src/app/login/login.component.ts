import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  // Supports DI
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmitLogin(loginForm) {
    console.log(loginForm);
    if (loginForm.valid) {
      console.log("Send login request");
      this.router.navigate(['contact']);
    } else {
      console.log("Show wrong credentials");
    }
  }

}
