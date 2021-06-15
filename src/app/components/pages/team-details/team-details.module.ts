import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { CounterComponent } from './counter/counter.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [TeamDetailsComponent, ContentComponent, CounterComponent, FaqsComponent],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class TeamDetailsModule { }
