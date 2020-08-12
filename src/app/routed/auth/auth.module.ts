import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { DisplayErrorPipe } from './errors/display-error.pipe';
import { ErrorsToArrayPipe } from './errors/errors-to-array.pipe';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { PhoneValidatorDirective } from './validators/phone-validator.directive';
import { NameValidatorDirective } from './validators/name-validator.directive';

@NgModule({
    declarations: [
        LoginPage,
        SignUpPage,
        DisplayErrorPipe,
        ErrorsToArrayPipe,
        EmailValidatorDirective,
        PhoneValidatorDirective,
        NameValidatorDirective,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  exports: [
    ErrorsToArrayPipe,
    DisplayErrorPipe
  ]
})
export class AuthModule {}
