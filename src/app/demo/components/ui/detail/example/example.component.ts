import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnDestroy {
  @Input() inputValue: string;

  constructor() {
    console.log('Constructor called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
