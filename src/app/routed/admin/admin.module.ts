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
import { AddUserDialogDialog } from './components/add-user-dialog/add-user-dialog.dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EditUserDialogDialog } from './components/edit-user-dialog/edit-user-dialog.dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [AdminPage, UsersPage, GroupsPage, EditableUserListComponent, EditableGroupListComponent, AddUserDialogDialog, EditUserDialogDialog],
  imports: [
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    SharedModule,
    MatListModule,
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class AdminModule {
}
