import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { VideoComponent } from './video/video.component';
import { LatestserviceComponent } from './latestservice/latestservice.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CasesComponent } from './cases/cases.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FactsComponent } from './facts/facts.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, ServiceComponent, VideoComponent, LatestserviceComponent, WhyusComponent, CasesComponent, TeamComponent, ContactComponent, FactsComponent, BlogpostComponent, BrandsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
