import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagShowRoutingModule } from './tag-show-routing.module';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagBComponent } from './tag-b/tag-b.component';
import { TagAComponent } from './tag-a/tag-a.component';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TagListComponent,
    TagBComponent,
    TagAComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TagShowRoutingModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
  ]
})
export class TagShowModule { }
