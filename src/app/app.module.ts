import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { AboutPage } from './routed/pages/about-page/about.page';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundPage } from './routed/pages/not-found-page/not-found-.page';
import { HomePage } from './routed/pages/home-page/home.page';
import {CurrentUserModule} from './features/current-user/current-user.module';
import {CoreModule} from './core/core.module';
import {ShoppingListsPage} from './routed/pages/shopping-lists/shopping-lists.page';
import {MatListModule} from '@angular/material/list';
import {ShoppingListDetailsPage} from './routed/pages/shopping-list-details/shopping-list-details.page';
import {ListItemStatePipe} from './routed/pages/pipes/list-item-state.pipe';
import {MeasurePipe} from './routed/pages/pipes/measure.pipe';
import {ShoppingListCreatePage} from './routed/pages/shopping-list-create/shopping-list-create.page';
import {AddItemDialogDialog} from './routed/budget-adviser/components/add-item-dialog/add-item-dialog.dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DisplayErrorPipe} from './features/form/errors/display-error.pipe';
import {ErrorsToArrayPipe} from './features/form/errors/errors-to-array.pipe';
import { ValidatorDirective } from './features/form/validators/validator.directive';
import {OnlyDigitsValidatorDirective} from './features/form/validators/only-digits-validator.directive';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { TransactionListPage } from './routed/pages/transaction-list/transaction-list.page';

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    NotFoundPage,
    HomePage,
    ShoppingListsPage,
    ShoppingListDetailsPage,
    ListItemStatePipe,
    MeasurePipe,
    ShoppingListCreatePage,
    AddItemDialogDialog,
    OnlyDigitsValidatorDirective,
    DisplayErrorPipe,
    ErrorsToArrayPipe,
    ValidatorDirective,
    TransactionListPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    CurrentUserModule,
    CoreModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
