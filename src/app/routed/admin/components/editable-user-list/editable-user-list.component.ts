import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserRole} from '../../../../features/users/models/user-role.model';

@Component({
  selector: 'app-editable-user-list',
  templateUrl: './editable-user-list.component.html',
  styleUrls: ['./editable-user-list.component.sass']
})
export class EditableUserListComponent implements OnInit {

  @Input()
  users: ExistingUser[];

  @Output()
  userDelete = new EventEmitter<ExistingUser>();

  @Output()
  userEdit = new EventEmitter<ExistingUser>();

  // HACK
  UserRole = UserRole;

  constructor() {
  }

  ngOnInit(): void {
  }

  // TODO норм название? (хз)
  handleDeleteUserButtonClick(user: ExistingUser): void {
    this.userDelete.emit(user);
  }

  handleEditUserButtonClick(user: ExistingUser): void {
    this.userEdit.emit(user);
  }
}
