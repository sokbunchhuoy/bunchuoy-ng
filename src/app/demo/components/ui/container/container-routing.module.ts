import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { CanDeactivateGuard } from 'src/app/guard/can-deactivate.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: ContainerComponent,
      canDeactivate: [CanDeactivateGuard]  // Apply CanDeactivate guard 

    }
  ])],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
