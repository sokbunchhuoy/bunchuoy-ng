import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FormComponentComponent },
  ])],
  exports: [RouterModule]
})
export class FormRoutingModule { }
