import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { ExampleComponent } from './example/example.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [DetailComponent, ExampleComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class DetailModule { }
