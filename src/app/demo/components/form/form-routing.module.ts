import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'arrays', data: { breadcrumb: 'Array' }, loadChildren: () => import('./content-form/content-form.module').then(m => m.ContentFormModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class FormRoutingModule { }
