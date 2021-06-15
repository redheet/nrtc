import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV3RoutingModule } from './home-v3-routing.module';
import { HomeV3Component } from './home-v3.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { CasesComponent } from './cases/cases.component';
import { VideoComponent } from './video/video.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TeamComponent } from './team/team.component';
import { CtaComponent } from './cta/cta.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [HomeV3Component, BannerComponent, ServicesComponent, CasesComponent, VideoComponent, FaqsComponent, TeamComponent, CtaComponent, BlogpostComponent],
  imports: [
    CommonModule,
    HomeV3RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeV3Module { }
