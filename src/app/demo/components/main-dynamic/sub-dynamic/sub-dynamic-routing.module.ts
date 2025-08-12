import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicsComponent } from './dynamics/dynamics.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DynamicsComponent }
  ])],
  exports: [RouterModule]
})
export class SubDynamicRoutingModule { }
