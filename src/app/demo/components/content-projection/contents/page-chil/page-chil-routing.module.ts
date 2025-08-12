import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HbModule } from './hb/hb.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'in', data: { breadcrumb: 'Input Output' }, loadChildren: () => import('./hb/hb-routing.module').then(m => m.HbRoutingModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class PageChilRoutingModule { }
