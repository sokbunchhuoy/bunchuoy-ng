import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentViewDemoComponent } from './content-view-demo/content-view-demo.component';
import { ShowContentComponent } from './show-content/show-content.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ContentViewDemoComponent }
  ])],
  exports: [RouterModule]
})
export class ContentViewRoutingModule { }
