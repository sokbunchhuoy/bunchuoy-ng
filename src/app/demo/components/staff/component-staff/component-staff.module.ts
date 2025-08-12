import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStaffRoutingModule } from './component-staff-routing.module';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    ListStaffComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    ComponentStaffRoutingModule
  ]
})
export class ComponentStaffModule { }
