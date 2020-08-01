import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionListPage} from './routed/budget-adviser/components/transaction-list/transaction-list.page';
import {TransactionsListDetailsPage} from './routed/budget-adviser/components/transactions-list-details/transactions-list-details.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionListPage
  },
  {
    path: ':id',
    component: TransactionsListDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
