import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPage} from './pages/admin/admin.page';
import {UsersPage} from './pages/users/users.page';
import {GroupsPage} from './pages/groups/groups.page';

const routes: Routes = [
  {path: '', component: AdminPage},
  {path: 'users', component: UsersPage},
  {path: 'groups', component: GroupsPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
