import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/groups.model';

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


  constructor() {
  }

  ngOnInit(): void {
  }

  handleDeleteGroup(group: ExistingGroup): void {
    this.groupDelete.emit(group);
  }
}
