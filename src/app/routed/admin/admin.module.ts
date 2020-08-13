import {NgModule} from '@angular/core';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPage} from './pages/admin/admin.page';
import {MatTabsModule} from '@angular/material/tabs';
import {UsersPage} from './pages/users/users.page';
import {GroupsPage} from './pages/groups/groups.page';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import {EditableUserListComponent} from './components/editable-user-list/editable-user-list.component';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {EditableGroupListComponent} from './components/editable-group-list/editable-group-list.component';
import {AddUserDialog} from './components/add-user-dialog/add-user.dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AddGroupDialog} from './components/add-group-dialog/add-group.dialog';
import {MatTableModule} from '@angular/material/table';
import {GroupInfoPage} from './pages/group-info/group-info.page';
import {UserInfoPage} from './pages/user-info/user-info.page';
import {MatCardModule} from '@angular/material/card';
import {EditableMemberListComponent} from './components/editable-member-list/editable-member-list.component';
import {ValidationModule} from '../../features/validators/validation.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AdminPage,
    UsersPage,
    GroupsPage,
    EditableUserListComponent,
    EditableGroupListComponent,
    AddUserDialog,
    AddGroupDialog,
    GroupInfoPage,
    UserInfoPage,
    EditableMemberListComponent
  ],
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
    MatTableModule,
    MatCardModule,
    ValidationModule,
    MatSlideToggleModule,
  ]
})
export class AdminModule {
}
