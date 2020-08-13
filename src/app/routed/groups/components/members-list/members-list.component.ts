import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserRole} from 'src/app/features/users/models/user-role.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.sass']
})
export class MembersListComponent implements OnInit {

  @Input()
  members: ExistingUser[];

  @Output()
  userInfo = new EventEmitter<ExistingUser>();

  // HACK
  UserRole = UserRole;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleInfo(user: ExistingUser): void {
    this.userInfo.emit(user);
  }

}
