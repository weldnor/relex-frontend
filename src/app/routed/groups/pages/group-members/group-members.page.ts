import {Component, OnInit} from '@angular/core';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {ActivatedRoute} from '@angular/router';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';

@Component({
  templateUrl: './group-members.page.html',
  styleUrls: ['./group-members.page.sass']
})
export class GroupMembersPage implements OnInit {
  group?: ExistingGroup;
  members?: ExistingUser[];
  private groupId: number;

  constructor(
    private readonly groupService: GroupService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.groupId = Number(this.route.parent.snapshot.paramMap.get('id'));
    this.groupService.getGroupMembers(this.groupId).subscribe(members => {
      this.members = members;
    });
    this.groupService.getGroupById(this.groupId).subscribe(group => {
      this.group = group;
      console.log(group);
    });
  }
}
