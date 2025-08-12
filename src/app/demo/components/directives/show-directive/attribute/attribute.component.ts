import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {

  condition = false;
  Fname: string;

  isRed = true;
  toggleColor() {
    this.isRed = !this.isRed;
  }
}
