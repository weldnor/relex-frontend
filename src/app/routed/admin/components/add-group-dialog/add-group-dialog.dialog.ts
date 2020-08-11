import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GroupService} from '../../../../features/groups/services/groups.service';

interface FormValue {
  groupName: string;
  groupDescription: string;
  groupAdminId: number;
}


@Component({
  templateUrl: './add-group-dialog.dialog.html',
  styleUrls: ['./add-group-dialog.dialog.sass']
})
export class AddGroupDialogDialog implements OnInit {

  error = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<AddGroupDialogDialog, undefined>,
    private readonly groupService: GroupService
  ) {
  }

  ngOnInit(): void {
  }

  handleSaveClick(value: FormValue): void {
    this.error = false;
    this.groupService.createGroup
    (
      value.groupName,
      value.groupDescription,
      value.groupAdminId,
    ).subscribe(
      () => this.dialogRef.close(),
      err => this.error = true
    );
  }

}
