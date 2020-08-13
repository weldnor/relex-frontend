import {Pipe, PipeTransform} from '@angular/core';
import {categoryIdToString} from '../mappers/category.mapper';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(value: number) {
    if (value == undefined) {
      return value;
    }
    return categoryIdToString(value);
  }
}
