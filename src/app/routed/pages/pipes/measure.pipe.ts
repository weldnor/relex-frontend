import { Pipe, PipeTransform } from '@angular/core';
import {ShoppingListItemMeasure} from '../../models/shopping-list.model';

@Pipe({
  name: 'measure'
})
export class MeasurePipe implements PipeTransform {
  transform(
    value: ShoppingListItemMeasure | undefined
  ): unknown {
    if (value == undefined) {
      return undefined;
    }
    switch (value) {
      case ShoppingListItemMeasure.LITER:
        return 'l.';
      case ShoppingListItemMeasure.BOTTLE:
        return 'bot.';
      case ShoppingListItemMeasure.KILOGRAM:
        return 'kg.';
      default:
        return value;
    }
  }
}
