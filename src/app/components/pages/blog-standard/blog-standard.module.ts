import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BlogStandardRoutingModule } from './blog-standard-routing.module';
import { BlogStandardComponent } from './blog-standard.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BlogStandardComponent, ContentComponent],
  imports: [
    CommonModule,
    BlogStandardRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class BlogStandardModule { }
