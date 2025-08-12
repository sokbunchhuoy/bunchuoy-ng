import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'basic', data: { breadcrumb: 'Alert Box' }, loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class TableRoutingModule { }
