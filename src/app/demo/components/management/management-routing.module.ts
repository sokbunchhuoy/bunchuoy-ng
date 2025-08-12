import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'customer', data: { breadcrumb: 'Customer' }, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
