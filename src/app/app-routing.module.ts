import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './routed/shared/pages/home-page/home.page';
import {AboutPage} from './routed/shared/pages/about-page/about.page';
import {NotFoundPage} from './routed/shared/pages/not-found-page/not-found-.page';
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
    path: 'admin',
    loadChildren: () => import('./routed/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./routed/groups/groups.module').then(m => m.GroupsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./routed/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./routed/profile/profile.module').then(m => m.ProfileModule)
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
