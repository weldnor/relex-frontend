import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {GroupService} from '../../../../features/groups/services/groups.service';

@Component({
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.sass']
})
export class GroupPage implements OnInit {

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

  }

}
