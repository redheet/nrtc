import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { CaseStudyRoutingModule } from './case-study-routing.module';
import { CaseStudyComponent } from './case-study.component';
import { SharedModule } from '../../shared/shared.module';
import { CaseblockComponent } from './caseblock/caseblock.component';


@NgModule({
  declarations: [CaseStudyComponent, CaseblockComponent],
  imports: [
    CommonModule,
    CaseStudyRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class CaseStudyModule { }
