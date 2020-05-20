import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',
      Validators.required,
      UsernameValidator.shouldBeUnique
    ),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  constructor() {}
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.form.setErrors({invalidLogin: true});
  }
}
