import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {AddGroupDialogDialog} from '../../components/add-group-dialog/add-group-dialog.dialog';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.sass']
})
export class GroupsPage implements OnInit {

  groups?: ExistingGroup[];

  constructor(
    private readonly groupService: GroupService,
    private readonly dialog: MatDialog,
    private readonly router: Router
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

  handleGroupDetails(group: ExistingGroup): void {
    this.router.navigate([`/admin/groups/${group.id}`]);
  }
}
