import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(value) {
    if (value == undefined) {
      return value;
    }
    return value.slice().reverse();
  }
}
