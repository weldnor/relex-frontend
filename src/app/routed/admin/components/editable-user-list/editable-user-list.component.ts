import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/users.model';

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


  constructor() {
  }

  ngOnInit(): void {
  }

  // TODO норм название? (хз)
  handleDeleteUser(user: ExistingUser): void {
    this.userDelete.emit(user);
  }
}
