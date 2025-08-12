import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.scss'
})
export class PageDetailComponent {

  // CurrencyPipe 
  price = 160; // Example price

  // Json Data
  myObject = { name: 'John', age: 30, city: 'New York' };
  myArray = [1, 2, 3, 4, 5];

  // date pipe
  todaydate = new Date();

  // perecnt Pipe
  myNumber: number = 0.23;

  // Decimal Pipe
  numberWithDecimal = 1240.56; // Example number with decimal

  // LowerCasePipe
  myString: string = 'This is a STRING in Mixed CASE';

  // UpperCasePipe
  UpperCaseString: string = 'This is a STRING in Mixed CASE';

  // Async Pipe
  myObservable$: Observable<number> = of(42);
  myPromise$: Promise<string> = Promise.resolve('Hello World!');
  gl: string = 'Demand and Savings Deposits with Banks and OFIs - Resident';
}
