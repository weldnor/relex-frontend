import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserRole} from '../../../../features/users/models/user-role.model';
import {UserService} from '../../../../features/users/services/users.service';

interface FormValue {
  username: string;
  password: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}


@Component({
  templateUrl: './add-user-dialog.dialog.html',
  styleUrls: ['./add-user-dialog.dialog.sass']
})
export class AddUserDialogDialog implements OnInit {
  error = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<AddUserDialogDialog, undefined>,
    private readonly userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  handleSaveClick(value: FormValue): void {
    this.error = false;
    this.userService.createUserAsAdmin
    (
      value.username,
      value.password,
      value.role,
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
