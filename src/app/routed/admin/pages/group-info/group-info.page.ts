import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';

@Component({
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.sass']
})
export class GroupInfoPage implements OnInit {
  group?: ExistingGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupService: GroupService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroupById(id).subscribe(group => {
      this.group = group;
    });
    this.groupService.getGroupMembers(id).subscribe(group => {
      this.group = group;
    });
  }
}