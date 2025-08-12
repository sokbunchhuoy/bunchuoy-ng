import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateListRoutingModule } from './template-list-routing.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TemplateListRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class TemplateListModule { }
