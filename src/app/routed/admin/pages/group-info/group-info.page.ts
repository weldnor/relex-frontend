import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';

@Component({
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.sass']
})
export class GroupInfoPage implements OnInit {
  error = false;
  group?: ExistingGroup;
  members?: ExistingUser[];


  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly groupService: GroupService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroupById(id).subscribe(group => {
      this.group = group;
    });
    this.groupService.getGroupMembers(id).subscribe(members => {
      this.members = members;
      console.log(members);
    });
  }

  handleSave(): void {
    // TODO
  }

  handleMemberDelete(member: ExistingUser): void {
    // TODO
  }

  handleMemberInfo(member: ExistingUser): void {
    this.router.navigate([`/admin/users/${member.id}`]);
  }

  handleMemberEdit($event: ExistingUser): void {
    // TODO
  }
}
