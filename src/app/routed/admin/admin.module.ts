import {NgModule} from '@angular/core';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPage} from './pages/admin/admin.page';
import {MatTabsModule} from '@angular/material/tabs';
import {UsersPage} from './pages/users/users.page';
import {GroupsPage} from './pages/groups/groups.page';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { EditableUserListComponent } from './components/editable-user-list/editable-user-list.component';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import { EditableGroupListComponent } from './components/editable-group-list/editable-group-list.component';


@NgModule({
  declarations: [AdminPage, UsersPage, GroupsPage, EditableUserListComponent, EditableGroupListComponent],
  imports: [
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    SharedModule,
    MatListModule,
    CommonModule,
  ]
})
export class AdminModule {
}
