import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'staff', data: { breadcrumb: 'Staff' }, loadChildren: () => import('./component-staff/component-staff.module').then(m => m.ComponentStaffModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
