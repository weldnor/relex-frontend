import {Component, OnInit} from '@angular/core';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {CurrentUserService} from '../../../../core/auth/current-user.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.sass']
})
export class GroupsPage implements OnInit {
  groups: ExistingGroup[];

  constructor(
    private readonly groupService: GroupService,
    private readonly currentUserService: CurrentUserService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    const userId = this.currentUserService.user$.getValue().id;
    this.groupService.getUserGroups(userId).subscribe(groups => {
      this.groups = groups;
    });
  }

  handleDetails(group: ExistingGroup): void {
    this.router.navigate([`/groups/${group.id}`]);
  }
}
