import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleonwComponent } from './styleonw/styleonw.component';
import { StyletwoComponent } from './styletwo/styletwo.component';


@NgModule({
  declarations: [PricingComponent, StyleonwComponent, StyletwoComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PricingModule { }
