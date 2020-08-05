import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutPage} from './routed/pages/about-page/about.page';
import {NotFoundPage} from './routed/pages/not-found-page/not-found-.page';
import {HomePage} from './routed/pages/home-page/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
