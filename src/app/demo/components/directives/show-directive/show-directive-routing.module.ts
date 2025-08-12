import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ComponentDirectiveComponent }
  ])],
  exports: [RouterModule]
})
export class ShowDirectiveRoutingModule { }
