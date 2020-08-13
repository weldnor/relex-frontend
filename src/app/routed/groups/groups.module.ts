import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsPage } from './pages/groups/groups.page';
import {GroupListComponent} from './components/group-list/group-list.component';
import {MatListModule} from '@angular/material/list';
import { GroupPage } from './pages/group/group.page';
import {NgxChartsModule, PieChartModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [GroupsPage, GroupListComponent, GroupPage],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatListModule,
    NgxChartsModule,
  ]
})
export class GroupsModule { }
