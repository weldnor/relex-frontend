import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsPage} from './pages/groups/groups.page';
import {GroupPage} from './pages/group/group.page';
import {GroupOverviewPage} from './pages/group-overview/group-overview.page';
import {GroupMembersPage} from './pages/group-members/group-members.page';
import {GroupTransactionsPage} from './pages/group-transactions/group-transactions.page';

const routes: Routes = [
  {path: '', component: GroupsPage},
  {
    path: ':id',
    component: GroupPage,
    children: [
      {path: 'overview', component: GroupOverviewPage},
      {path: 'members', component: GroupMembersPage},
      {path: 'transactions', component: GroupTransactionsPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule {
}
