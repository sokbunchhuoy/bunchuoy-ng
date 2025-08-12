import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss'
})
export class DataListComponent {
  inputName: string = '';

  constructor(private sharedService: SharedDataService) { }

  sendInput(): void {
    this.sharedService.sendInputName(this.inputName); // Send inputName to the service
  }

  // inputName: string = '';

  // constructor(private sharedService: SharedDataService) { }

  // sendInput() {
  //   this.sharedService.sendInputName(this.inputName);  // Send inputName to the service
  // }

}
