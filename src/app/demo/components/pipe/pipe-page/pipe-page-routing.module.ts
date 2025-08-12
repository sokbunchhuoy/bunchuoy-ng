import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailComponent } from './page-detail/page-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PageDetailComponent }
  ])],
  exports: [RouterModule]
})
export class PipePageRoutingModule { }
