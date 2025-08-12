import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'directives', data: { breadcrumb: 'directives' }, loadChildren: () => import('./show-directive/show-directive.module').then(m => m.ShowDirectiveModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
