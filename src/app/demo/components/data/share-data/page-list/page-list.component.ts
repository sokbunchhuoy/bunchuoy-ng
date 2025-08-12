import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss'
})
export class PageListComponent {


  constructor(private service: ShareService) { }

  parentData = "Initial Data";

  updateData() {
    this.parentData = "Updated Data";
  }

}
