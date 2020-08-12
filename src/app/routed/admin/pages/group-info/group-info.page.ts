import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UpdateGroupFormData} from '../../models/update-group-form-data.model';

@Component({
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.sass']
})
export class GroupInfoPage implements OnInit {
  error = false;
  group?: ExistingGroup;
  members?: ExistingUser[];
  private groupId: number;


  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly groupService: GroupService
  ) {
  }

  ngOnInit(): void {
    this.groupId = Number(this.route.snapshot.paramMap.get('id'));
    this.refreshAll();
  }

  refreshAll(): void {
    this.groupService.getGroupById(this.groupId).subscribe(group => {
      this.group = group;
    });
    this.groupService.getGroupMembers(this.groupId).subscribe(members => {
      this.members = members;
    });
  }

  handleSave(data: UpdateGroupFormData): void {
    // TODO
  }

  handleMemberDelete(member: ExistingUser): void {
    this.groupService.deleteGroupMember(this.group.id, member.id).subscribe(() => {
      this.refreshAll();
    });
  }

  handleMemberInfo(member: ExistingUser): void {
    this.router.navigate([`/admin/users/${member.id}`]);
  }

  handleMemberEdit($event: ExistingUser): void {
    // TODO
  }

  handleGoBack(): void {
    this.router.navigate([`/admin/groups`]);
  }
}
