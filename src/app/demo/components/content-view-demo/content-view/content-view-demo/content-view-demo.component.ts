import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-view-demo',
  templateUrl: './content-view-demo.component.html',
  styleUrl: './content-view-demo.component.scss'
})
export class ContentViewDemoComponent implements AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  // ngAfterViewInit
  // Called once after the component's view (and child views) has been initialized
  @ViewChild('getElement') targetElement: ElementRef;
  message: string = 'Hello, Jonh!';
  ngAfterViewInit() {
    this.targetElement.nativeElement.style.color = 'red';
  }

  // ngAfterViewChecked
  // called multiple times, after every change detection cycle for the component's view and child views.
  content: string = 'Wellcome One';
  changeMessage() {
    this.content = 'Wellcome Two';
  }
  ngAfterViewChecked(): void {
    this.content;
  }


  //ngAfterContentInit
  // called only once, after the component's content has been initialized.
  @ContentChild('contentParagraph') contentParagraph!: ElementRef;
  ngAfterContentInit() {
    // this.contentParagraph.nativeElement.style.color = 'green';
    // console.log('Content has been initialized');
    this.contentParagraph.nativeElement.style.color = 'blue';
  }

  // ngAfterContentChecked
  //  called multiple times, after every change detection cycle for the component's content.
  dataToShow: any;
  ngAfterContentChecked() {
    this.dataToShow = "Angular 16";
  }


}
