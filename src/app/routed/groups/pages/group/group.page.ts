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
  public results = [{ 'name': 'd', 'value': 100000 },{ 'name': 'e', 'value': 100000 },{ 'name': 'f', 'value': 100000 }, { 'name': 'b', 'value': 100000 }, { 'name': 'c', 'value': 100000 }];

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

  title = 'Angular Charts';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;

  // data goes here
  public single = [
    {
      'name': 'China',
      'value': 2243772
    },
    {
      'name': 'USA',
      'value': 1126000
    },
    {
      'name': 'Norway',
      'value': 296215
    },
    {
      'name': 'Japan',
      'value': 257363
    },
    {
      'name': 'Germany',
      'value': 196750
    },
    {
      'name': 'France',
      'value': 204617
    }
  ];
}
