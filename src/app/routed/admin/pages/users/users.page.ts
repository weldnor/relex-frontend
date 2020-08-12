import {Component, OnInit} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserService} from '../../../../features/users/services/users.service';
import {AddUserDialogDialog} from '../../components/add-user-dialog/add-user-dialog.dialog';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.sass']
})
export class UsersPage implements OnInit {
  users?: ExistingUser[];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {
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

  handleUserInfo(user: ExistingUser): void {
    this.router.navigate([`/admin/users/${user.id}`]);
  }

  handleUserCreate(): void {
    this.dialog.open(AddUserDialogDialog).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }


}
