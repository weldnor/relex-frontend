import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';

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

  @Output()
  groupDetails = new EventEmitter<ExistingGroup>();


  constructor(
    private readonly route: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleDelete($event, group: ExistingGroup): void {
    // блокируем всплытие https://learn.javascript.ru/event-bubbling
    $event.stopPropagation();
    this.groupDelete.emit(group);
  }

  handleClick(group: ExistingGroup): void {
    this.groupDetails.emit(group);
  }
}
