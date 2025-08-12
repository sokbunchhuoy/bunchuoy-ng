import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ContainerComponent, DynamicComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ButtonModule
  ]
})
export class ContainerModule { }
