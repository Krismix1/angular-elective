import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBabysitterComponent } from './register-babysitter.component';

describe('RegisterBabysitterComponent', () => {
  let component: RegisterBabysitterComponent;
  let fixture: ComponentFixture<RegisterBabysitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBabysitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
