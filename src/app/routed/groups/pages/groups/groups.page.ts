import {Component, OnInit} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {CurrentUserService} from '../../../../core/auth/current-user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddGroupDialog} from '../../components/add-group/add-group.dialog';

@Component({
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.sass']
})
export class GroupsPage implements OnInit {
  groups: ExistingGroup[];
  private userId: number;

  constructor(
    private readonly groupService: GroupService,
    private readonly currentUserService: CurrentUserService,
    private readonly router: Router,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.userId = this.currentUserService.user$.getValue().id;
    this.groupService.getUserGroups(this.userId).subscribe(groups => {
      this.groups = groups;
    });
  }

  handleDetails(group: ExistingGroup): void {
    this.router.navigate([`/groups/${group.id}`]);
  }

  handleGroupCreate(): void {
    this.dialog.open(AddGroupDialog).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }

  private refreshList(): void {
    this.groupService.getUserGroups(this.userId).subscribe(groups => {
      this.groups = groups;
    });
  }
}
