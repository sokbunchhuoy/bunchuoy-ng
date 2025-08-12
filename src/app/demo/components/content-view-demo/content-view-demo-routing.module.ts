import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'view', data: { breadcrumb: 'content-view-demo' }, loadChildren: () => import('./content-view/content-view.module').then(m => m.ContentViewModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class ContentViewDemoRoutingModule { }
