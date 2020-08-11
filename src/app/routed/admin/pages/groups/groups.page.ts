import {Component, OnInit} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/groups.model';
import {MatDialog} from '@angular/material/dialog';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {AddGroupDialogDialog} from '../../components/add-group-dialog/add-group-dialog.dialog';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.sass']
})
export class GroupsPage implements OnInit {

  groups?: ExistingGroup[];

  constructor(
    private readonly groupService: GroupService,
    private readonly dialog: MatDialog
  ) {
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

  handleGroupCreate(): void {
    this.dialog.open(AddGroupDialogDialog).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
