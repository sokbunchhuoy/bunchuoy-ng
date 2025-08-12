import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { AppComponentsComponent } from './app-components/app-components.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';


@NgModule({
  declarations: [
    AppComponentsComponent,
    AlertBoxComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
