import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsPage} from './pages/groups/groups.page';
import {GroupPage} from './pages/group/group.page';

const routes: Routes = [
  {path: '', component: GroupsPage},
  {path: ':id', component: GroupPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule {
}
