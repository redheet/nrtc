import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV4RoutingModule } from './home-v4-routing.module';
import { HomeV4Component } from './home-v4.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CasesComponent } from './cases/cases.component';
import { CounterComponent } from './counter/counter.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeV4Component, BannerComponent, FeaturesComponent, WhyusComponent, CasesComponent, CounterComponent, FaqsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeV4RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeV4Module { }
