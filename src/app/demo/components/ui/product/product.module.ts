import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ListComponent} from "./list/list.component";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {AddEditComponent} from "./add-edit/add-edit.component";
import {EditComponent} from "./edit/edit.component";
import {NullShowPipeModule} from "../../../../share/pipe/null-show-pipe.module";


@NgModule({
  declarations: [
      ListComponent,
      AddEditComponent,
      EditComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
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
        NullShowPipeModule
    ],
    providers: [ConfirmationService],
})
export class ProductModule { }
