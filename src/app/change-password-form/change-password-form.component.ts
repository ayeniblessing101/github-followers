import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ChangePasswordValidator } from "./change-password.validator";

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})

export class ChangePasswordComponent {
  changePasswordForm =  new FormGroup({
    oldPassword: new FormControl('',Validators.required, ChangePasswordValidator.validOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },{
    validators: ChangePasswordValidator.passwordsShouldMatch
  })
  constructor() { }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  onchange() {
    console.log(this.oldPassword);
  }
}