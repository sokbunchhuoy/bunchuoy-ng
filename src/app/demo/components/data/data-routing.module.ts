import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'page-list', data: { breadcrumb: 'Page List' }, loadChildren: () => import('./share-data/share-data.module').then(m => m.ShareDataModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class DataRoutingModule { }
