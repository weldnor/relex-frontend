import { Directive } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const phoneRegExp: ValidatorFn = (control) => {
  if (/\d{5,15}/.test(control.value)) {
    // tslint:disable-next-line:no-null-keyword
    return null;
  }
  return {
    phoneRegExp: true,
  };
};

@Directive({
  selector: '[appPhoneValidator]'
})
export class PhoneValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return phoneRegExp(control);
  }
}
