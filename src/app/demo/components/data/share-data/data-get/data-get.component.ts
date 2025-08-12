import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-data-get',
  templateUrl: './data-get.component.html',
  styleUrl: './data-get.component.scss'
})
export class DataGetComponent implements OnInit {
  inputName: string = '';

  constructor(private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedService.currentInputName$.subscribe((name) => {
      this.inputName = name; // Get the updated input name
    });
  }


}
