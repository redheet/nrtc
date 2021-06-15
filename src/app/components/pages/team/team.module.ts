import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { CtasComponent } from './ctas/ctas.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [TeamComponent, ContentComponent, CtasComponent, CounterComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class TeamModule { }
