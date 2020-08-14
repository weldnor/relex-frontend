import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserRole} from '../../../../features/users/models/user-role.model';
import {UserService} from '../../../../features/users/services/users.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {nameRegExp} from '../../../../features/validators/directives/name-validator.directive';
import {phoneRegExp} from '../../../../features/validators/directives/phone-validator.directive';
import {emailRegExp} from '../../../../features/validators/directives/email-validator.directive';
import {passwordRegExp} from '../../../../features/validators/directives/password-validator.directive';

interface FormValue {
  username: string;
  password: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}


@Component({
  templateUrl: './add-user.dialog.html',
  styleUrls: ['./add-user.dialog.sass']
})
export class AddUserDialog implements OnInit {
  error = false;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<AddUserDialog, undefined>,
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      username: this.fb.control('', [Validators.required, nameRegExp]),
      password: this.fb.control('', [Validators.required, passwordRegExp]),
      role: this.fb.control('', [Validators.required]),
      firstName: this.fb.control('', [Validators.required, nameRegExp]),
      lastName: this.fb.control('', [Validators.required, nameRegExp]),
      phone: this.fb.control('', [Validators.required, phoneRegExp]),
      email: this.fb.control('', [Validators.required, emailRegExp]),
    });
  }

  handleSaveClick(value: FormValue): void {
    this.error = false;
    this.userService.createUserAsAdmin
    (
      value.username,
      value.password,
      value.role,
      value.firstName,
      value.lastName,
      value.phone,
      value.email
    ).subscribe(
      () => this.dialogRef.close(),
      err => this.error = true
    );
  }
}
