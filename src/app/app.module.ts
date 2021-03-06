import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {AboutPage} from './routed/shared/pages/about-page/about.page';
import {MatButtonModule} from '@angular/material/button';
import {NotFoundPage} from './routed/shared/pages/not-found-page/not-found-.page';
import {HomePage} from './routed/shared/pages/home-page/home.page';
import {CurrentUserModule} from './features/current-user/current-user.module';
import {CoreModule} from './core/core.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    NotFoundPage,
    HomePage,
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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
