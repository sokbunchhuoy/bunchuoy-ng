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
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { CustomerRoutingModule } from './customer-routing.module';
import { NullShowPipeModule } from "../../../../share/pipe/null-show-pipe.module";
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PanelModule } from 'primeng/panel';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { ModelBComponent } from './model-b/model-b.component';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
    FileUploadComponent,
    CanDeactivateComponent,
    ModelBComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
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
    ReactiveFormsModule,
    NullShowPipeModule,
    PanelModule,
    ProgressBarModule,
    FormsModule,
    CheckboxModule

  ],
  providers: [ConfirmationService, MessageService],

})
export class CustomerModule { }
