import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

declare function init_plugins(): void;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  samePassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const password = control.parent?.get('password')?.value;
      return password === control.value ? null : { samePassword: true };
    };
  }

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password2: new FormControl(null, [Validators.required, this.samePassword()]),
      conditions: new FormControl( false )
    });
  }

  ngOnInit(): void {
    init_plugins();
  }

  registerUser(): void {

  }
}
