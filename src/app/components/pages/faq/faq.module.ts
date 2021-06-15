import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleoneComponent } from './styleone/styleone.component';
import { StyletwoComponent } from './styletwo/styletwo.component';
import { QuoteComponent } from './quote/quote.component';
import { ServiceblockComponent } from './serviceblock/serviceblock.component';


@NgModule({
  declarations: [FaqComponent, StyleoneComponent, StyletwoComponent, QuoteComponent, ServiceblockComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FaqModule { }
