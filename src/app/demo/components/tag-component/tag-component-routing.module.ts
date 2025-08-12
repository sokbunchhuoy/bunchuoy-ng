import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'tag-list', data: { breadcrumb: 'Tag List' }, loadChildren: () => import('./tag-show/tag-show-routing.module').then(m => m.TagShowRoutingModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class TagComponentRoutingModule { }
