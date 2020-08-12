import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserRole} from '../../../../features/users/models/user-role.model';

@Component({
  selector: 'app-editable-member-list',
  templateUrl: './editable-member-list.component.html',
  styleUrls: ['./editable-member-list.component.sass']
})
export class EditableMemberListComponent implements OnInit {

  @Input()
  users: ExistingUser[];

  @Output()
  userDelete = new EventEmitter<ExistingUser>();

  @Output()
  userInfo = new EventEmitter<ExistingUser>();

  @Output()
  userEdit = new EventEmitter<ExistingUser>();

  // HACK
  UserRole = UserRole;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleDelete($event, user: ExistingUser): void {
    // блокируем всплытие https://learn.javascript.ru/event-bubbling
    $event.stopPropagation();
    this.userDelete.emit(user);
  }

  handleEdit($event, user: ExistingUser): void {
    // блокируем всплытие https://learn.javascript.ru/event-bubbling
    $event.stopPropagation();
    this.userEdit.emit(user);
  }

  handleInfo(user: ExistingUser): void {
    this.userInfo.emit(user);
  }
}
