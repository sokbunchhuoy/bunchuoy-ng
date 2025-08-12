import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConpontFormComponent } from './conpont-form/conpont-form.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ConpontFormComponent }
  ])],
  exports: [RouterModule]
})
export class ContentFormRoutingModule { }
