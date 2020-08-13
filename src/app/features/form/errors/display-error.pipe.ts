import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayError'
})
export class DisplayErrorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'required':
        return 'Value is required';
      case 'onlyDigits':
        return 'Value must be a number';
      default:
        return value;
    }
  }
}
