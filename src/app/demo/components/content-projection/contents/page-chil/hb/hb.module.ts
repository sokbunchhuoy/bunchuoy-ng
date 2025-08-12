import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HbRoutingModule } from './hb-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChilComponent } from './chil/chil.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChilComponent
  ],
  imports: [
    CommonModule,
    HbRoutingModule,
    CommonModule
  ]
})
export class HbModule { }
