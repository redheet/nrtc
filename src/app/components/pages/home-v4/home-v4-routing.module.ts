import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV4Component } from './home-v4.component';

const routes: Routes = [{ path: '', component: HomeV4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV4RoutingModule { }
