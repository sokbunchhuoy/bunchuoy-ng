import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentViewRoutingModule } from './content-view-routing.module';
import { ContentViewDemoComponent } from './content-view-demo/content-view-demo.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContentViewDemoComponent, ShowContentComponent],
  imports: [
    CommonModule,
    ContentViewRoutingModule,
    InputTextModule,
    FormsModule
  ]
})
export class ContentViewModule { }
