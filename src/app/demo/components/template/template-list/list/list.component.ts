import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { el } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  //Property Binding
  property: string = 'Property Binding Example';
  isDisabled = true;

  // Event Binding
  name: string = '';
  changeEvent(eventData: Event) {
    this.name = (<HTMLInputElement>eventData.target).value;
  }

  // Two-way binding
  hello: string = '';

  // Attribute binding
  imageUrl: string = 'assets/layout/images/sh.png';
  linkUrl: string = 'https://angular.io/docs'; // Default link URL

  //styleBinding
  fontColor: string = 'red';

  //classBinding
  classBinding: boolean = true;

  ngOnInit(): void {

  }


  // Template variables
  displayedText: string = '';
  displayText(value: HTMLInputElement) {
    value.disabled = true;

  }
  display(value: HTMLInputElement) {
    value.disabled = false;

  }

  // template statememt
  message: string = '';
  handleClick() {
    this.message = 'Button clicked!';
  }

}
