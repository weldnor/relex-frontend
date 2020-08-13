import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailValidatorDirective} from './directives/email-validator.directive';
import {NameValidatorDirective} from './directives/name-validator.directive';
import {PhoneValidatorDirective} from './directives/phone-validator.directive';
import {DisplayErrorPipe} from '../form/errors/display-error.pipe';
import {ErrorsToArrayPipe} from '../form/errors/errors-to-array.pipe';


@NgModule({
  declarations: [
    DisplayErrorPipe,
    ErrorsToArrayPipe,
    EmailValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayErrorPipe,
    ErrorsToArrayPipe,
    EmailValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ]
})
export class ValidationModule {
}
