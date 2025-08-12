import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDirectiveRoutingModule } from './show-directive-routing.module';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BuidCustomComponent } from './buid-custom/buid-custom.component';
import { ContentDirective } from './content.directive';


@NgModule({
  declarations: [
    ComponentDirectiveComponent,
    StructuralComponent,
    AttributeComponent,
    BuidCustomComponent,
    ContentDirective
  ],
  imports: [
    CommonModule,
    ShowDirectiveRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class ShowDirectiveModule { }
