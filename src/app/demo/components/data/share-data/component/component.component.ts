import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent implements OnChanges, OnInit, DoCheck {
  @Input() data!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - changes:', changes);
  }

  message = '';

  ngOnInit() {
    this.message = 'Component Initialized!';
    console.log('ngOnInit called');
  }

  //
  counter = 0;

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  increment() {
    this.counter++;
  }


}
