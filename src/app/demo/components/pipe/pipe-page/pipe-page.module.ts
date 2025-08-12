import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PipePageRoutingModule } from './pipe-page-routing.module';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { TruncateStringModule } from 'src/app/share/pipe/truncate-string/truncate-string.module';


@NgModule({
  declarations: [PageDetailComponent],
  imports: [
    CommonModule,
    PipePageRoutingModule,
    InputTextModule,
    TruncateStringModule

  ],
  providers: [
    DatePipe
  ]
})
export class PipePageModule { }
