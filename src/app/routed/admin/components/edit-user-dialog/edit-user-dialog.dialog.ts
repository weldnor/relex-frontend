import {Component, Inject, OnInit} from '@angular/core';
import {UserRole} from '../../../../features/users/models/user-role.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../../features/users/services/users.service';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';

interface FormValue {
  password: string;
  role: UserRole;
  isActive: boolean;
  isLocked: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  templateUrl: './edit-user-dialog.dialog.html',
  styleUrls: ['./edit-user-dialog.dialog.sass']
})
export class EditUserDialogDialog implements OnInit {
  user: ExistingUser;
  error = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<EditUserDialogDialog, undefined>,
    private readonly userService: UserService
  ) {
    const id = data;
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  handleSaveClick(value: FormValue): void {
    console.log(value);

    this.error = false;
    this.userService.editUserAsAdmin
    (
      this.user.id,
      value.password,
      value.role,
      value.isActive,
      value.isLocked,
      value.firstName,
      value.lastName,
      value.phone,
      value.email
    ).subscribe(
      () => this.dialogRef.close(),
      err => this.error = true
    );
  }
}
