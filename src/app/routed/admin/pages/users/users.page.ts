import {Component, OnInit} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/ExistingUser.model';
import {UserService} from '../../../../features/users/services/users.service';
import {AddUserDialogDialog} from '../../components/add-user-dialog/add-user-dialog.dialog';
import {MatDialog} from '@angular/material/dialog';
import {EditUserDialogDialog} from '../../components/edit-user-dialog/edit-user-dialog.dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.sass']
})
export class UsersPage implements OnInit {
  users?: ExistingUser[];

  constructor(
    private readonly userService: UserService,
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

  handleUserEdit(user: ExistingUser): void {
    this.dialog.open(EditUserDialogDialog, {data: user.id}).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }

  handleUserCreate(): void {
    this.dialog.open(AddUserDialogDialog).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }


}
