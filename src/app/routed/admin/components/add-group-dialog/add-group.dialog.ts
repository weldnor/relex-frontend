import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {nameRegExp} from '../../../../features/validators/directives/name-validator.directive';

interface FormValue {
  groupName: string;
  groupDescription: string;
  groupAdminId: number;
}


@Component({
  templateUrl: './add-group.dialog.html',
  styleUrls: ['./add-group.dialog.sass']
})
export class AddGroupDialog implements OnInit {

  error = false;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly dialogRef: MatDialogRef<AddGroupDialog, undefined>,
    private readonly groupService: GroupService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      groupName: this.fb.control('', [Validators.required, nameRegExp, Validators.minLength(5)]),
      groupDescription: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      groupAdminId: this.fb.control('', [Validators.required]),
    });
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
