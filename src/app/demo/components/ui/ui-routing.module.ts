import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'product', data: { breadcrumb: 'Product' }, loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
    { path: 'detail', data: { breadcrumb: 'Component Lifecycle' }, loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
    { path: 'dynamic', data: { breadcrumb: ' Dynamic component loader' }, loadChildren: () => import('./container/container.module').then(m => m.ContainerModule) },


    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class UiRoutingModule { }
