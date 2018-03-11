import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit, OnChanges {

  @Input() baby: Baby;
  private babyRegisterForm: FormGroup;
  private isEdit: boolean;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["baby"]) {
      this.isEdit = true;
      this.baby = changes.baby.currentValue;
      this.createForm();
    }
  }

  createForm() {

    if (this.baby) {
      this.babyRegisterForm = this.fb.group({
        firstName: [this.baby.firstName, Validators.required],
        picture: [this.baby.picture, Validators.required],
        postalCode: [this.baby.postalCode, Validators.required],
        age: [this.baby.age, [Validators.required, Validators.min(3)]],
        gender: [this.baby.gender, Validators.required]
      });
    } else {

      this.babyRegisterForm = this.fb.group({
        firstName: ['', Validators.required],
        picture: ['', Validators.required],
        postalCode: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(3)]],
        gender: ['', Validators.required]
      });
    }
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

  onEditButton(form) {
    if (form.valid) {
      let baby: Baby = form.value;
      baby.id = this.baby.id;
      this.dataService.editBaby(baby);
      form.reset();
    } else {
      alert("Inputs don't meet requirements");
    }
  }
}
