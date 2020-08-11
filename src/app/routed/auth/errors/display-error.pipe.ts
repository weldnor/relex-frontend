import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayError'
})
export class DisplayErrorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'emailRegExp':
        return 'Email has incorrect format';
      case 'nameRegExp':
        return 'Name is invalid';
      case 'phoneRegExp':
        return 'Phone is invalid';
      case 'required':
        return ;
      default:
        return value;
    }
  }

}
