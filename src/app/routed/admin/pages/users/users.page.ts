import {Component, OnInit} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/users.model';
import {UserService} from '../../../../features/users/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.sass']
})
export class UsersPage implements OnInit {
  users?: ExistingUser[];

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  handleUserDelete(user: ExistingUser): void {
    this.userService.deleteUserById(user.id).subscribe(() => {
      this.refreshList();
    });
  }
}
