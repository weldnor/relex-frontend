import { Pipe, PipeTransform } from '@angular/core';
import {ShoppingListItemState} from '../../models/shopping-list.model';

@Pipe({
  name: 'listItemState'
})
export class ListItemStatePipe implements PipeTransform {
  transform(
    value: ShoppingListItemState | undefined
  ): string | undefined {
    if (value == undefined) {
      return undefined;
    }
    switch (value) {
      case ShoppingListItemState.ACTIVE:
        return 'Active';
      case ShoppingListItemState.COMPLETED:
        return 'Completed';
      default:
        return value;
    }
  }
}
