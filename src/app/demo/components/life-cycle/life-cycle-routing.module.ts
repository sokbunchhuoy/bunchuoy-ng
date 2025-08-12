import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'page', data: { breadcrumb: 'Life Cycle' }, loadChildren: () => import('./life/life.module').then(m => m.LifeModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
