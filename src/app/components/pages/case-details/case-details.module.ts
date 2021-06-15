import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CaseDetailsRoutingModule } from './case-details-routing.module';
import { CaseDetailsComponent } from './case-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [CaseDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    CaseDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class CaseDetailsModule { }
