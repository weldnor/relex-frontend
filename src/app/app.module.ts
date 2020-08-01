import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { TransactionListPage } from './routed/budget-adviser/components/transaction-list/transaction-list.page';
import { TransactionsListDetailsPage } from './routed/budget-adviser/components/transactions-list-details/transactions-list-details.page';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListPage,
    TransactionsListDetailsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
