import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';



import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderFourComponent } from './header-four/header-four.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CtaComponent } from './cta/cta.component';
import { ShopsidebarComponent } from './shopsidebar/shopsidebar.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';



@NgModule({
  declarations: [HeaderComponent, HeaderTwoComponent, HeaderThreeComponent, HeaderFourComponent, FooterComponent, BreadcrumbComponent, CtaComponent, ShopsidebarComponent, BlogsidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule
  ],
  exports: [HeaderComponent, HeaderTwoComponent, HeaderThreeComponent, HeaderFourComponent, FooterComponent, BreadcrumbComponent, CtaComponent, ShopsidebarComponent, BlogsidebarComponent]
})
export class SharedModule { }
