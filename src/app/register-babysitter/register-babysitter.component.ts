import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Babysitter } from '../entities/babysitter';

@Component({
  selector: 'app-register-babysitter',
  templateUrl: './register-babysitter.component.html',
  styleUrls: ['./register-babysitter.component.scss']
})
export class RegisterBabysitterComponent implements OnInit {

  private babysitterRegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
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
  }

  onFormSubmit(registerForm) {
    if (registerForm.valid) {
      let babysitter: Babysitter = registerForm.value;
      this.dataService.addBabysitter(babysitter);
      registerForm.reset();
    } else {
      alert("Inputs don't meet requirements");
    }
  }
}
