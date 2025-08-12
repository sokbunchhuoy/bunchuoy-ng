import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  private subscription: Subscription;

  //doCheck
  currentTime: Date;

  // onInit
  subtitle: string;
  data: string;

  // onCgange
  @Input() inputValue: string;
  contentLength: string;

  //ngDistory

  constructor() {

  }

  ngOnInit(): void {
    this.data = "Welcome to";
    this.subtitle = "from ngOnInit";
  }

  // ngOnChange 

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputValue && this.inputValue.length > 5) {
      this.contentLength = 'long';
    } else {
      this.contentLength = 'short';
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngDoCheck() {
    this.currentTime = new Date();
  }


}
