import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.sass']
})
export class GroupListComponent implements OnInit {

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
