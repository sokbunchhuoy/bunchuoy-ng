import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormContentComponent } from './form-content/form-content.component';
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
  declarations: [
    FormComponentComponent,
    FormArrayComponent,
    FormContentComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    InputNumberModule,
    PanelModule,

    ReactiveFormsModule,

  ]
})
export class FormModule { }
