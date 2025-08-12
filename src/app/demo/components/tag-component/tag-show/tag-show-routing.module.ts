import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TagListComponent },
  ])],
  exports: [RouterModule]
})
export class TagShowRoutingModule { }
