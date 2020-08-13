import {Category} from '../models/category.model';

export function categoryIdToString(categoryId: number): string {
  switch (categoryId as Category) {
    case Category.ACCOMMODATION:
      return 'ACCOMMODATION';
    case Category.COMMUNICATION_AND_INTERNET:
      return 'COMMUNICATION_AND_INTERNET';
    case Category.ENTERTAINMENT:
      return 'ENTERTAINMENT';
    case Category.FINES:
      return 'FINES';
    case Category.FOOD_AND_DRINK:
      return 'FOOD_AND_DRINK';
    case Category.INVESTMENTS:
      return 'INVESTMENTS';
    case Category.MONEY_TRANSFER:
      return 'MONEY_TRANSFER';
    case Category.PERSONAL_TRANSPORT:
      return 'PERSONAL_TRANSPORT';
    case Category.PUBLIC_TRANSPORT:
      return 'PUBLIC_TRANSPORT';
    case Category.PURCHASES:
      return 'PURCHASES';
    case Category.TAX:
      return 'TAX';
    case Category.MONEY_INCOME:
      return 'MONEY_INCOME';
    default:
      throw new Error('oops!');
  }
}
