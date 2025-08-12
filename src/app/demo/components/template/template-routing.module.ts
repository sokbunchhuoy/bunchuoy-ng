import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({

  imports: [RouterModule.forChild([
    { path: 'template', data: { breadcrumb: 'Template' }, loadChildren: () => import('./template-list/template-list.module').then(m => m.TemplateListModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
