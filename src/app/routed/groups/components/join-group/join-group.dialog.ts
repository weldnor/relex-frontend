import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {MatDialogRef} from '@angular/material/dialog';
import {AddGroupDialog} from '../add-group/add-group.dialog';


interface FormValue {
  code: string;
}

@Component({
  templateUrl: './join-group.dialog.html',
  styleUrls: ['./join-group.dialog.sass']
})
export class JoinGroupDialog implements OnInit {
  public error = false;

  constructor(
    private readonly groupService: GroupService,
    private readonly dialogRef: MatDialogRef<JoinGroupDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
  }

  handleJoinClick(form: FormValue): void {
    this.error = false;
    const code = form.code;
    this.groupService.joinToGroup(code).subscribe(
      () => {
        this.dialogRef.close();
      },
      error => {
        this.error = true;
      }
    );
  }
}
