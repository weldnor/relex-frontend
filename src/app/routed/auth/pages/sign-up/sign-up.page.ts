import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../../core/auth/current-user.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {emailRegExp} from '../../../../features/validators/directives/email-validator.directive';
import {phoneRegExp} from '../../../../features/validators/directives/phone-validator.directive';
import {nameRegExp} from '../../../../features/validators/directives/name-validator.directive';

interface SignUpFormData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.sass'],
})
export class SignUpPage implements OnInit {
  error = false;
  form: FormGroup;

  constructor(
    private readonly currentUserService: CurrentUserService,
    private readonly fb: FormBuilder
  ) {
    this.form = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control(''),
      firstName: this.fb.control('', [Validators.required, nameRegExp]),
      lastName: this.fb.control('', [Validators.required, nameRegExp]),
      phone: this.fb.control('', [Validators.required, phoneRegExp]),
      email: this.fb.control('', [Validators.required, emailRegExp]),
    });
  }

  ngOnInit(): void {}

  handleFormSubmit(value: SignUpFormData): void {
    console.log(value);
    this.error = false;
    this.currentUserService
      .createUser(
        value.username,
        value.password,
        value.firstName,
        value.lastName,
        value.phone,
        value.email
      )
      .subscribe(
        () => {
          this.currentUserService.login(value.username, value.password);
        },
        (error) => {
          console.error('Error', error);
          this.error = true;
        }
      );
  }
}
