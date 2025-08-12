import { Component } from '@angular/core';

@Component({
  selector: 'app-buid-custom',
  templateUrl: './buid-custom.component.html',
  styleUrl: './buid-custom.component.scss'
})
export class BuidCustomComponent {

  showContent: boolean = false;

  onShowContent() {
    this.showContent = !this.showContent;
  }


  showBooks = true; // check to show or hide books

  checkBooks() {
    this.showBooks = !this.showBooks;
  }

}
