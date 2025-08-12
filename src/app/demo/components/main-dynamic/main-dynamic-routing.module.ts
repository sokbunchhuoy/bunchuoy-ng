import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dynamic', data: { breadcrumb: 'dynamic' }, loadChildren: () => import('./sub-dynamic/sub-dynamic.module').then(m => m.SubDynamicModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class MainDynamicRoutingModule { }
