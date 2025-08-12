import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'array', data: { breadcrumb: 'Form Array' }, loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
