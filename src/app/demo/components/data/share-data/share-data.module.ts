import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ShareDataRoutingModule } from './share-data-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { PageListComponent } from './page-list/page-list.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataGetComponent } from './data-get/data-get.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    PageListComponent,
    DataListComponent,
    DataGetComponent,
    ComponentComponent
  ],
  imports: [
    CommonModule,
    ShareDataRoutingModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,   // Add FormsModule here
    FileUploadModule,
    ProgressBarModule,

  ]
})
export class ShareDataModule { }
