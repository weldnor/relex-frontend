import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileInfoPage} from './pages/profile-info/profile-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileInfoPage
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
