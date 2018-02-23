import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private babysitterRegisterForm: FormGroup;
  private babyRegisterForm: FormGroup;
  private isBaby : boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.isBaby = true;
  }

  createForm() {
    this.babysitterRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      picture: ['', Validators.required],
      postalCode: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16)]],
      gender: ['', Validators.required]
    });

    this.babyRegisterForm = this.fb.group({
      name: '',
      months: '',
      gender: ''
    });
  }

  onBabysitterRegisterSubmit(registerForm) {
    console.log("Babysitter form", registerForm);
  }

  onBabyRegisterSubmit(registerForm) {
    console.log("Baby form", registerForm);
  }

  selectForm(user){
    if(user =='baby'){
      this.isBaby = true;
    }else if(user =='babysitter'){
      this.isBaby = false;
    }
  }
}
