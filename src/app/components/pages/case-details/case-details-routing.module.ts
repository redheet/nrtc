import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailsComponent } from './case-details.component';

const routes: Routes = [{ path: '', component: CaseDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseDetailsRoutingModule { }
