import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { DataListComponent } from './data-list/data-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PageListComponent },
    { path: 'add', component: DataListComponent },
  ])],
  exports: [RouterModule]
})
export class ShareDataRoutingModule { }
