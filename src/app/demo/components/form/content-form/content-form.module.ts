import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentFormRoutingModule } from './content-form-routing.module';
import { ConpontFormComponent } from './conpont-form/conpont-form.component';
import { PageFormArrayComponent } from './page-form-array/page-form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    ConpontFormComponent,
    PageFormArrayComponent
  ],
  imports: [
    CommonModule,
    ContentFormRoutingModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    InputNumberModule
  ]
})
export class ContentFormModule { }
