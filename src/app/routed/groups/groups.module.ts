import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GroupsRoutingModule} from './groups-routing.module';
import {GroupsPage} from './pages/groups/groups.page';
import {GroupListComponent} from './components/group-list/group-list.component';
import {MatListModule} from '@angular/material/list';
import {GroupPage} from './pages/group/group.page';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AddGroupDialog} from './components/add-group/add-group.dialog';
import {JoinGroupDialog} from './components/join-group/join-group.dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [GroupsPage, GroupListComponent, GroupPage, TransactionListComponent, AddGroupDialog, JoinGroupDialog],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatListModule,
    MatToolbarModule,
    NgxChartsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class GroupsModule {
}
