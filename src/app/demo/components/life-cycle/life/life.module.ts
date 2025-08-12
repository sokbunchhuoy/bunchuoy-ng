import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { PageComponent } from './page/page.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [PageComponent, ComponentAComponent],
  imports: [
    CommonModule,
    LifeRoutingModule,
    FormsModule,
    InputTextModule
  ]
})
export class LifeModule { }
