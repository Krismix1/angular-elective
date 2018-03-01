import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  // Supports DI
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

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
      this.authService.login().subscribe(() => {
        console.log("now you are logged in");
        let redirectTo = this.authService.redirectUrl ? this.authService.redirectUrl : "/";

        this.router.navigate([redirectTo]);
      });
    } else {
      console.log("Show wrong credentials");
      alert("Fill out the fields, dummy!");
    }
  }

}
