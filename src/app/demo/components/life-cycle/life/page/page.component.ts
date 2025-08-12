import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements AfterViewInit, AfterContentChecked, AfterViewChecked {

  // ngAfterViewInit
  @ViewChild('targetElement') targetElement: ElementRef;
  message: string = 'Hello, world!';
  ngAfterViewInit() {
    this.targetElement.nativeElement.style.color = 'red';
  }

  // ngAfterViewChecked
  view: string = 'Initial message';
  changeMessage() {
    this.view = 'New message';
  }
  ngAfterViewChecked(): void {
    this.view;
    console.log("ngAfterViewChecked", this.view);
  }

  // ngAfterContentChecked
  dataToShow: any;
  ngAfterContentChecked() {
    this.dataToShow = "Angular 14";
  }

  // ngOnChange
  inputText: string = "This is "



}
