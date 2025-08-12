import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanDeactivateGuard } from 'src/app/guard/can-deactivate.guard';
import { ModelBComponent } from './model-b/model-b.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'add/:id', component: AddEditComponent },
    { path: 'upload', component: FileUploadComponent },
    { path: 'modelb', component: ModelBComponent },
    { path: 'deactive', component: CanDeactivateComponent, canDeactivate: [CanDeactivateGuard] }
  ])],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
