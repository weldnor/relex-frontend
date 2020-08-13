import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../../../core/auth/current-user.service';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {MatDialogRef} from '@angular/material/dialog';

interface FormValue {
  name: string;
  description: string;
}

@Component({
  templateUrl: './add-group.dialog.html',
  styleUrls: ['./add-group.dialog.sass']
})
export class AddGroupDialog implements OnInit {
  error = false;

  constructor(
    private readonly currentUserService: CurrentUserService,
    private readonly groupService: GroupService,
    private readonly dialogRef: MatDialogRef<AddGroupDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
  }

  handleSaveClick(form: FormValue): void {
    const userId = this.currentUserService.user$.getValue().id;
    this.groupService.createGroup(form.name, form.description, userId).subscribe(
      value => {
        this.dialogRef.close();
      },
      error => {
        this.error = true;
      },
    );
  }
}
