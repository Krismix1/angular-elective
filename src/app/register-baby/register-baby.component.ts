import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {

  private babyRegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.babyRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      picture: ['', Validators.required],
      postalCode: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(3)]],
      gender: ['', Validators.required]
    });
  }

  onFormSubmit(registerForm) {
    if (registerForm.valid) {
      let baby: Baby = registerForm.value;
      this.dataService.addBaby(baby);
      registerForm.reset();
    } else {
      alert("Inputs don't meet requirements");
    }
  }
}
