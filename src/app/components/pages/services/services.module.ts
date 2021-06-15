import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceblockComponent } from './serviceblock/serviceblock.component';
import { PlansComponent } from './plans/plans.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [ServicesComponent, ServiceblockComponent, PlansComponent, BlogpostComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class ServicesModule { }
