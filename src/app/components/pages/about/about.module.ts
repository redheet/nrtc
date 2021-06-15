import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { IntrovideoComponent } from './introvideo/introvideo.component';
import { HistoryComponent } from './history/history.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [AboutComponent, ServicesComponent, IntrovideoComponent, HistoryComponent, FaqsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AboutModule { }
