import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {AddEditComponent} from "./add-edit/add-edit.component";
import {EditComponent} from "./edit/edit.component";


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ListComponent },
        { path: 'add', component: AddEditComponent },
        { path: 'edit/:id', component: EditComponent }
    ])],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
