import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // private inputNameSource = new BehaviorSubject<string>('');  // Default value is an empty string
  // currentInputName = this.inputNameSource.asObservable();  // Observable to listen to the changes

  // constructor() { }

  // sendInputName(inputName: string) {
  //   this.inputNameSource.next(inputName);  // Send new input value
  // }
  private inputNameSource = new BehaviorSubject<string>(''); // Initial value
  currentInputName$ = this.inputNameSource.asObservable(); // Observable for subscribers

  constructor() { }

  // Method to send data
  sendInputName(name: string): void {
    this.inputNameSource.next(name); // Emit the new value
  }

}
