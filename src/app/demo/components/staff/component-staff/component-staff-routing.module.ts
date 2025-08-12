import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStaffComponent } from './list-staff/list-staff.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListStaffComponent },
  ])],
  exports: [RouterModule]
})
export class ComponentStaffRoutingModule { }
