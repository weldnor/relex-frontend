import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {ExistingGroup} from '../../../../features/groups/models/groups.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.sass']
})
export class GroupsPage implements OnInit {

  groups?: ExistingGroup[];

  constructor(private readonly groupService: GroupService) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.groupService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  handleGroupDelete(group: ExistingGroup): void {
    this.groupService.deleteGroupById(group.id).subscribe(() => {
      this.refreshList();
    });
  }
}
