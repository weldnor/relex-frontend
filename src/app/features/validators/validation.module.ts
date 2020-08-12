import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailValidatorDirective} from './directives/email-validator.directive';
import {NameValidatorDirective} from './directives/name-validator.directive';
import {PhoneValidatorDirective} from './directives/phone-validator.directive';


@NgModule({
  declarations: [
    EmailValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailValidatorDirective,
    NameValidatorDirective,
    PhoneValidatorDirective
  ]
})
export class ValidationModule {
}
