import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
    path: 'auth',
    loadChildren: () => import('./routed/auth/auth.module').then(m => m.AuthModule)
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
export class AppRoutingModule {
}
