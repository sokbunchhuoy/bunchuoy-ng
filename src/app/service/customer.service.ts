import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer`).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/customer/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer`, customer).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/customer/${id}`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/customer/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 404:
          errorMessage = 'Error 404: Resource not found';
          break;
        case 500:
          errorMessage = 'Error 500: Internal server error';
          // Additional logic for 500 errors:
          console.error('Server error 500, notify admin or log to monitoring system');
          // You could add retry logic here if needed
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }

}
