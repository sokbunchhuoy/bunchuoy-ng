import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'page-detail', data: { breadcrumb: 'Pipe' }, loadChildren: () => import('./pipe-page/pipe-page.module').then(m => m.PipePageModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
