import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsComponent } from './app-components/app-components.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AppComponentsComponent }
  ])],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
