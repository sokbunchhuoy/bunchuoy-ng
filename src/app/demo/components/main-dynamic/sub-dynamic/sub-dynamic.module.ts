import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubDynamicRoutingModule } from './sub-dynamic-routing.module';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DynamicsComponent,
    TextInputComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    SubDynamicRoutingModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ToastModule,
    FormsModule,  // Make sure FormsModule is imported here
  ],
  // entryComponents: [TextInputComponent, CheckboxComponent]
})
export class SubDynamicModule { }
