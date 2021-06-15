import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { VideoComponent } from './video/video.component';
import { TeamComponent } from './team/team.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { QuoteComponent } from './quote/quote.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CtaComponent } from './cta/cta.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutComponent, ServicesComponent, VideoComponent, TeamComponent, ProgressbarComponent, QuoteComponent, FaqsComponent, CtaComponent, BlogpostComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgCircleProgressModule.forRoot()
  ]
})
export class HomeV2Module { }
