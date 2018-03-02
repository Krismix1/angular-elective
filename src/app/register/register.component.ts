import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Baby } from '../entities/baby';
import { Babysitter } from '../entities/babysitter';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private babysitterRegisterForm: FormGroup;
  private babyRegisterForm: FormGroup;
  private isBaby: boolean;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
    this.isBaby = true;
  }

  createForm() {
    this.babysitterRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16)]],
      yearsOfExperience: ['', Validators.required],
      region: ['', Validators.required],
      picture: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.babyRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      picture: ['', Validators.required],
      postalCode: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(3)]],
      gender: ['', Validators.required]
    });
  }

  onBabysitterRegisterSubmit(registerForm) {
    if (registerForm.valid) {
      let babysitter: Babysitter = registerForm.value;
      this.dataService.addBabysitter(babysitter);
      registerForm.reset();
    } else {
      alert("Input don't meet requirements");
    }
  }

  onBabyRegisterSubmit(registerForm) {
    if (registerForm.valid) {
      let baby: Baby = registerForm.value;
      this.dataService.addBaby(baby);
      registerForm.reset();
    } else {
      alert("Input don't meet requirements");
    }
  }

  selectForm(user) {
    if (user == 'baby') {
      this.isBaby = true;
    } else if (user == 'babysitter') {
      this.isBaby = false;
    }
  }
}
