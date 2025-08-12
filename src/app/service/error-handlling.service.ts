import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandllingService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 404:
          errorMessage = 'Error 404: Not Found';
          break;
        case 500:
          errorMessage = 'Error 500: Internal Server Error';
          break;
        case 0:

          errorMessage = 'Network error: Please check your internet connection.';
          break;
        default:
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
          break;
      }
    }



    return throwError(errorMessage || 'Something went wrong. Please try again later.');
  }
}
