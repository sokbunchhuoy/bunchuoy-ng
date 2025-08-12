import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.scss'
})
export class StructuralComponent {
  condition = true;

  customers = [
    { name: 'Kong Bora', email: 'kong.bora@email.com', status: 'A' },
    { name: 'Som Dara', email: 'somdara168@email.com', status: 'B' },
    { name: 'Hong Dyna', email: 'hongdyna24@email.com', status: 'C' },
    { name: 'Sem Pheara', email: 'sempheara@email.com', status: 'A' },
    { name: 'Sorn Bunthann', email: 'sornbunthann@email.com', status: 'B' },
    { name: 'Bun Bonia', email: 'bunbonia@email.com', status: 'C' },
    { name: 'khan Vanny', email: 'khanvanny@email.com', status: 'B' },
  ]


  showBooks = true; // check to show or hide books
  books = [
    { id: 1, title: 'Angular Essentials', name: 'John Doe' },
    { id: 2, title: 'React in Depth', name: 'Jane Smith' },
    { id: 3, title: 'Vue.js Guide', name: 'Michael Johnson' }
  ];
  checkBooks() {
    this.showBooks = !this.showBooks;
  }



}
