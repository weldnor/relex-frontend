import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../../core/auth/current-user.service';
import { ExistingUser } from '../../../../features/users/models/existing-user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRole } from '../../../../features/users/models/user-role.model';
import { UserService } from '../../../../features/users/services/users.service';
import {nameRegExp} from '../../../../features/validators/directives/name-validator.directive';
import {phoneRegExp} from '../../../../features/validators/directives/phone-validator.directive';
import {emailRegExp} from '../../../../features/validators/directives/email-validator.directive';

interface FormValue {
  password: string;
  role: UserRole;
  isActive: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Component({
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.sass'],
})
export class ProfileInfoPage implements OnInit {
  user?: ExistingUser;
  form: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly currentUserService: CurrentUserService,
    private readonly fb: FormBuilder
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.user = this.currentUserService.getCurrentUser().getValue();
    console.log(this.user);
    this.form.get('firstName').setValue(this.user.personalInfo.firstName);
    this.form.get('lastName').setValue(this.user.personalInfo.lastName);
    this.form.get('phone').setValue(this.user.personalInfo.phone);
    this.form.get('email').setValue(this.user.personalInfo.email);
  }

  private initForm(): FormGroup {
    return this.fb.group(
      {
        password: this.fb.control(''),
        firstName: this.fb.control('', [Validators.required, nameRegExp]),
        lastName: this.fb.control('', [Validators.required, nameRegExp]),
        phone: this.fb.control('', [Validators.required, phoneRegExp]),
        email: this.fb.control('', [Validators.required, emailRegExp]),
      },
      {}
    );
  }

  handleFormSubmit(value: FormValue): void {
    console.log(value);
    this.userService
      .editUserAsUser(
        this.user.id,
        value.password,
        this.user.role,
        value.firstName,
        value.lastName,
        value.phone,
        value.email
      )
      .subscribe(
        () => {
          console.log('changes had been submitted');
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
}
