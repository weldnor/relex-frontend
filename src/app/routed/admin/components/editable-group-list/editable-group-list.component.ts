import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/groups.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editable-group-list',
  templateUrl: './editable-group-list.component.html',
  styleUrls: ['./editable-group-list.component.sass']
})
export class EditableGroupListComponent implements OnInit {

  @Input()
  groups: ExistingGroup[];

  @Output()
  groupDelete = new EventEmitter<ExistingGroup>();


  constructor(
    private readonly route: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleDeleteGroup(group: ExistingGroup): void {
    this.groupDelete.emit(group);
  }

  handleEditGroup(group: ExistingGroup): void {
    // TODO
  }

  handleClickOnGroup(group: ExistingGroup): void {
    this.route.navigate([`/admin/groups/${group.id}`]);
  }
}
